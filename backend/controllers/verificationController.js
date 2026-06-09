const Lead = require("../models/Lead");

async function verifyEmail(req, res) {
  try {
    const token = req.params.token;

    const lead = await Lead.findOne({
      verificationToken: token,
    });

    if (!lead) {
      return res.status(400).send("Invalid verification link");
    }

    lead.emailVerified = true;
    lead.verificationStatus = "verified";
    lead.verificationToken = null;
    
    await lead.save();

    return res.send(
      "Email verified successfully. You can close this page."
    );

  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  verifyEmail,
};