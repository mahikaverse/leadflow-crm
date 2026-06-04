const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  },
  name: {
    type: String,
    required: [true, 'Please add a name'],
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
  },
  phone: String,
  company: String,
  source: String,

  value: {
    type: Number,
    default: 0,
  },

  status: {
    type: String,
    enum: ['New', 'Contacted', 'Qualified', 'Converted', 'Lost'],
    default: 'New',
  },

  notes: [{
    text: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  }],
  activities: [{
    type: {
      type: String,
      enum: ['created', 'status_changed', 'note_added', 'followup_completed', 'updated'],
      required: true,
    },
    message: { type: String, required: true },
    at: { type: Date, default: Date.now },
  }],
  followUpDate: Date,
  followUpCompletedAt: Date,
}, {
  timestamps: true,
});

module.exports = mongoose.model('Lead', leadSchema);
