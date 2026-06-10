const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) {
    console.error("SMTP VERIFY ERROR:", error);
  } else {
    console.log("SMTP SERVER READY");
  }
});

async function sendVerificationEmail(email, token) {
  const verificationLink =
    `${process.env.FRONTEND_URL}/verify-email/${token}`;

  console.log("Sending email with:");
  console.log("USER:", process.env.EMAIL_USER);
  console.log("PASS EXISTS:", !!process.env.EMAIL_PASS);

  console.log("STARTING EMAIL SEND");

  try {
    const result = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Verify Your Email",
      html: `
        <h2>Email Verification</h2>
        <a href="${verificationLink}">
          Verify Email
        </a>
      `,
    });

    console.log("EMAIL SENT SUCCESS");
    console.log(result);

    return result;

  } catch (error) {
    console.error("EMAIL SEND ERROR:");
    console.error(error);
    throw error;
  }
}

module.exports = {
  sendVerificationEmail,
};