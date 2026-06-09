const Lead = require("../models/Lead");
const WebhookLog = require("../models/WebhookLog");

function normalizeEmail(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function normalizePhone(value) {
  return String(value || "")
    .replace(/\D/g, "")
    .trim();
}

async function receiveLead(req, res) {
  try {
    // Save raw webhook payload
    await WebhookLog.create({
      source: req.body.source || "Unknown",
      payload: req.body,
      processed: false,
    });

    const {
      name,
      email,
      phone,
      company,
      source,
      value,
      platform,
      campaign,
      adset,
      campaignId,
    } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    const normalizedEmail = normalizeEmail(email);
    const normalizedPhone = normalizePhone(phone);

    // Duplicate detection
    const duplicateConditions = [];

    if (normalizedEmail) {
      duplicateConditions.push({
        email: normalizedEmail,
      });
    }

    if (normalizedPhone) {
      duplicateConditions.push({
        phone: normalizedPhone,
      });
    }

    let existingLead = null;

    if (duplicateConditions.length > 0) {
      existingLead = await Lead.findOne({
        owner: process.env.DEFAULT_OWNER_ID,
        $or: duplicateConditions,
      });

      if (existingLead) {
        return res.status(200).json({
          success: true,
          duplicate: true,
          lead: existingLead,
        });
      }
    }

    // Create lead
    const lead = await Lead.create({
      owner: process.env.DEFAULT_OWNER_ID,

      name: name.trim(),

      email: normalizedEmail,
      phone: normalizedPhone,

      company: company || "",
      source: source || "Website",

      platform: platform || "",
      campaign: campaign || "",
      adset: adset || "",
      campaignId: campaignId || "",

      value: Number(value) || 0,

      status: "New",

      activities: [
        {
          type: "created",
          message: `Lead automatically received from ${
            source || "Website"
          }`,
        },
      ],
    });

    // Mark latest webhook log as processed
    await WebhookLog.findOneAndUpdate(
      {
        source: source || "Unknown",
        processed: false,
      },
      {
        processed: true,
      },
      {
        sort: {
          createdAt: -1,
        },
      }
    );

    return res.status(201).json({
      success: true,
      duplicate: false,
      lead,
    });

  } catch (error) {
    console.error("Webhook Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  receiveLead,
};