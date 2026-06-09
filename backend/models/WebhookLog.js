const mongoose = require("mongoose");

const webhookLogSchema = new mongoose.Schema(
  {
    source: String,
    payload: Object,
    processed: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "WebhookLog",
  webhookLogSchema
);