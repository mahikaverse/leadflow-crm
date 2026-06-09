const express = require("express");

const {
  receiveLead,
} = require("../controllers/webhookController");

const {
  verifyWebhook,
} = require("../middleware/webhookAuth");

const router = express.Router();

router.post(
  "/leads",
  verifyWebhook,
  receiveLead
);

module.exports = router;