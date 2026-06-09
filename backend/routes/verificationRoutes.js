const express = require("express");
const router = express.Router();

const {
  verifyEmail,
} = require("../controllers/verificationController");

router.get("/:token", verifyEmail);

module.exports = router;