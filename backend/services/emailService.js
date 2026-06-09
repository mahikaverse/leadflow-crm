const nodemailer = require("nodemailer");

console.log("EMAIL_USER =", process.env.EMAIL_USER);
console.log("EMAIL_PASS =", process.env.EMAIL_PASS);
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendVerificationEmail(
  email,
  token
) {
  const verificationLink =
    `${process.env.FRONTEND_URL}/verify-email/${token}`;

    console.log("Sending email with:");
    console.log("USER:", process.env.EMAIL_USER);
    console.log("PASS EXISTS:", !!process.env.EMAIL_PASS);
    
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify Your Email",

    html: `
      <h2>Email Verification</h2>

      <p>
        Click the button below to verify your email.
      </p>

      <a href="${verificationLink}">
        Verify Email
      </a>
    `,
  });
}

module.exports = {
  sendVerificationEmail,
};