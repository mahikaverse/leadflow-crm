const express = require('express');
const {
  getLeads, getLead, createLead, updateLead, deleteLead,
  addNote, deleteNote, completeFollowUp, getAnalytics,
} = require('../controllers/leadController');
const { protect } = require('../middleware/auth');

const router = express.Router();
router.use(protect);
router.route('/leads').get(getLeads).post(createLead);
router.route('/leads/:id').get(getLead).put(updateLead).delete(deleteLead);
router.post('/leads/:id/notes', addNote);
router.delete('/leads/:id/notes/:noteId', deleteNote);
router.post('/leads/:id/complete-follow-up', completeFollowUp);
router.get('/analytics', getAnalytics);

module.exports = router;
