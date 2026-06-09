const mongoose = require("mongoose");

const rejectedLeadSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    company: String,
    source: String,
    reason: String,
    payload: Object,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "RejectedLead",
  rejectedLeadSchema
);