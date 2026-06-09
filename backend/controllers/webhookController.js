const Lead = require("../models/Lead");
const WebhookLog = require("../models/WebhookLog");
const RejectedLead = require("../models/RejectedLead");
const { verifyLead } = require("../services/leadVerificationService");
const crypto = require("crypto");

const {sendVerificationEmail,
} = require("../services/emailService");

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
    const verificationToken =
    crypto.randomBytes(32).toString("hex");

    const normalizedPhone = normalizePhone(phone);

// STEP 1: Verify lead first
const verification = await verifyLead(
  normalizedEmail,
  normalizedPhone
);
console.log("Verification Result:", verification);

if (!verification.verified) {

  await RejectedLead.create({
    name,
    email: normalizedEmail,
    phone: normalizedPhone,
    company: company || "",
    source: source || "Website",
    reason: verification.reason,
    payload: req.body,
  });

  return res.status(400).json({
    success: false,
    reason: verification.reason,
  });
}

// STEP 2: Duplicate detection
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



  verificationStatus: "pending",
  leadScore: verification.score,

  emailVerified: false,
  verificationToken,

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

   try {
  await sendVerificationEmail(
    normalizedEmail,
    verificationToken
  );
} catch (emailError) {
  console.error(
    "Email Send Failed:",
    emailError.message
  );
}

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