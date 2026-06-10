const { Resend } = require("resend");

const resend = new Resend(
  process.env.RESEND_API_KEY
);

async function sendVerificationEmail(email, token) {

 const verificationLink =
  `https://leadflow-crm-hm7v.onrender.com/api/verify-email/${token}`;

  const result = await resend.emails.send({
    from: "LeadFlow <onboarding@resend.dev>",
    to: email,
    subject: "Verify Your Email",
    html: `
      <h2>Email Verification</h2>

      <p>
        Click below to verify your email
      </p>

      <a href="${verificationLink}">
        Verify Email
      </a>
    `,
  });
console.log("RESEND RESPONSE:");
  console.log(result);
}

module.exports = {
  sendVerificationEmail,
};