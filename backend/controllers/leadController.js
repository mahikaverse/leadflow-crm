const mongoose = require('mongoose');
const Lead = require('../models/Lead');

const statuses = ['New', 'Contacted', 'Qualified', 'Converted', 'Lost'];
const sortOptions = {
  created: '-createdAt',
  name: 'name',
  followup: 'followUpDate',
  value: '-value',
};

function ownerQuery(req) {
  return { owner: { $in: [req.user._id, req.user._id.toString()] } };
}

function parseLeadValue(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
}

function numericValueExpression() {
  return { $convert: { input: '$value', to: 'double', onError: 0, onNull: 0 } };
}

function debugAnalytics(req, payload) {
  if (process.env.DEBUG_ANALYTICS !== 'true') return;
  console.debug('[analytics]', {
    userId: req.user._id.toString(),
    ...payload,
  });
}

async function getOwnedLead(req, res) {
  if (!mongoose.isValidObjectId(req.params.id)) {
    res.status(404).json({ message: 'Lead not found' });
    return null;
  }
  const lead = await Lead.findOne({ _id: req.params.id, ...ownerQuery(req) });
  if (!lead) res.status(404).json({ message: 'Lead not found' });
  return lead;
}

async function getLeads(req, res) {
  try {
    const { q, status, source, company, sort = 'created' } = req.query;
    const query = ownerQuery(req);
    if (status && statuses.includes(status)) query.status = status;
    if (source) query.source = source;
    if (company) query.company = company;
    if (q) {
      const escaped = String(q).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      query.$or = ['name', 'email', 'company', 'phone'].map((field) => ({ [field]: { $regex: escaped, $options: 'i' } }));
    }
    const leads = await Lead.find(query).sort(sortOptions[sort] || sortOptions.created);
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getLead(req, res) {
  try {
    const lead = await getOwnedLead(req, res);
    if (lead) res.json(lead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function createLead(req, res) {
  try {
    const notes = typeof req.body.notes === 'string' && req.body.notes.trim()
      ? [{ text: req.body.notes.trim() }]
      : [];
    const lead = await Lead.create({
      ...req.body,
      owner: req.user._id,
      value: parseLeadValue(req.body.value),
      notes,
      activities: [{ type: 'created', message: `Lead created from ${req.body.source || 'Unknown'}` }],
    });
    res.status(201).json(lead);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateLead(req, res) {
  try {
    const lead = await getOwnedLead(req, res);
    if (!lead) return;
    const previousStatus = lead.status;
    const editable = ['name', 'email', 'phone', 'company', 'source', 'status', 'followUpDate', 'value'];
    editable.forEach((field) => {
      if (req.body[field] !== undefined) lead[field] = req.body[field];
    });
    if (req.body.value !== undefined) lead.value = parseLeadValue(req.body.value);
    if (typeof req.body.notes === 'string') {
      lead.notes = req.body.notes.trim() ? [{ text: req.body.notes.trim() }] : [];
    }
    if (req.body.followUpDate) lead.followUpCompletedAt = undefined;
    if (previousStatus !== lead.status) {
      lead.activities.push({ type: 'status_changed', message: `Status changed to ${lead.status}` });
    } else {
      lead.activities.push({ type: 'updated', message: 'Lead details updated' });
    }
    await lead.save();
    res.json(lead);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteLead(req, res) {
  try {
    const lead = await Lead.findOneAndDelete({ _id: req.params.id, ...ownerQuery(req) });
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json({ message: 'Lead removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function addNote(req, res) {
  try {
    const lead = await getOwnedLead(req, res);
    if (!lead) return;
    if (!req.body.text?.trim()) return res.status(400).json({ message: 'Note text is required' });
    lead.notes.push({ text: req.body.text.trim() });
    lead.activities.push({ type: 'note_added', message: 'Note added' });
    await lead.save();
    res.status(201).json(lead);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteNote(req, res) {
  try {
    const lead = await getOwnedLead(req, res);
    if (!lead) return;
    const note = lead.notes.id(req.params.noteId);
    if (!note) return res.status(404).json({ message: 'Note not found' });
    note.deleteOne();
    await lead.save();
    res.json(lead);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function completeFollowUp(req, res) {
  try {
    const lead = await getOwnedLead(req, res);
    if (!lead) return;
    lead.followUpCompletedAt = new Date();
    lead.activities.push({ type: 'followup_completed', message: 'Follow-up completed' });
    await lead.save();
    res.json(lead);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getAnalytics(req, res) {
  try {
    const ownerMatch = ownerQuery(req);
    const now = new Date();
    const safeValue = numericValueExpression();
    const [summaryRows, statusRows, sourcePerformance, monthlyGrowth, topCompanies] = await Promise.all([
      Lead.aggregate([
        { $match: ownerMatch },
        { $addFields: { safeValue } },
        { $group: {
          _id: null,
          totalLeads: { $sum: 1 },
          pipelineValue: { $sum: '$safeValue' },
          convertedLeads: { $sum: { $cond: [{ $eq: ['$status', 'Converted'] }, 1, 0] } },
          lostLeads: { $sum: { $cond: [{ $eq: ['$status', 'Lost'] }, 1, 0] } },
          activeLeads: { $sum: { $cond: [{ $in: ['$status', ['New', 'Contacted', 'Qualified']] }, 1, 0] } },
          followUps: { $sum: { $cond: [{ $and: [{ $ne: [{ $ifNull: ['$followUpDate', null] }, null] }, { $eq: [{ $ifNull: ['$followUpCompletedAt', null] }, null] }, { $in: ['$status', ['New', 'Contacted', 'Qualified']] }] }, 1, 0] } },
          completedFollowUps: { $sum: { $cond: [{ $ne: [{ $ifNull: ['$followUpCompletedAt', null] }, null] }, 1, 0] } },
          overdueFollowUps: { $sum: { $cond: [{ $and: [{ $lt: ['$followUpDate', now] }, { $eq: [{ $ifNull: ['$followUpCompletedAt', null] }, null] }, { $in: ['$status', ['New', 'Contacted', 'Qualified']] }] }, 1, 0] } },
        } },
      ]),
      Lead.aggregate([{ $match: ownerMatch }, { $group: { _id: '$status', value: { $sum: 1 } } }]),
      Lead.aggregate([{ $match: ownerMatch }, { $group: { _id: { $ifNull: ['$source', 'Unknown'] }, leads: { $sum: 1 }, converted: { $sum: { $cond: [{ $eq: ['$status', 'Converted'] }, 1, 0] } } } }, { $sort: { leads: -1 } }]),
      Lead.aggregate([{ $match: ownerMatch }, { $group: { _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } }, leads: { $sum: 1 }, converted: { $sum: { $cond: [{ $eq: ['$status', 'Converted'] }, 1, 0] } } } }, { $sort: { '_id.year': 1, '_id.month': 1 } }]),
      Lead.aggregate([{ $match: ownerMatch }, { $addFields: { safeValue } }, { $group: { _id: { $ifNull: ['$company', 'Unknown'] }, count: { $sum: 1 }, value: { $sum: '$safeValue' } } }, { $sort: { value: -1 } }, { $limit: 6 }]),
    ]);
    const summary = summaryRows[0] || {};
    const totalLeads = summary.totalLeads || 0;
    const convertedLeads = summary.convertedLeads || 0;
    const pipelineValue = Number.isFinite(summary.pipelineValue) ? summary.pipelineValue : 0;
    const statusMap = Object.fromEntries(statusRows.map((row) => [row._id, row.value]));
    const response = {
      totalLeads,
      activeLeads: summary.activeLeads || 0,
      convertedLeads,
      lostLeads: summary.lostLeads || 0,
      conversionRate: totalLeads ? Number(((convertedLeads / totalLeads) * 100).toFixed(1)) : 0,
      pipelineValue,
      averageDealSize: totalLeads ? Math.round(pipelineValue / totalLeads) : 0,
      followUps: summary.followUps || 0,
      completedFollowUps: summary.completedFollowUps || 0,
      overdueFollowUps: summary.overdueFollowUps || 0,
      statusDistribution: statuses.map((status) => ({ name: status, value: statusMap[status] || 0 })),
      sourcePerformance: sourcePerformance.map((row) => ({ source: row._id, leads: row.leads, converted: row.converted })),
      monthlyGrowth: monthlyGrowth.map((row) => ({ year: row._id.year, month: row._id.month, leads: row.leads, converted: row.converted })),
      topCompanies: topCompanies.map((row) => ({ name: row._id, count: row.count, value: row.value || 0 })),
    };
    debugAnalytics(req, { matchedLeads: totalLeads, pipelineValue });
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getLeads, getLead, createLead, updateLead, deleteLead, addNote, deleteNote, completeFollowUp, getAnalytics };
