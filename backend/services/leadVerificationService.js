const { validate } = require("deep-email-validator");
const { parsePhoneNumberFromString } = require("libphonenumber-js");
const disposableDomains = require("../utils/disposableDomains");

 
async function verifyLead(email, phone) {
    console.log("VERIFY LEAD CALLED");
console.log("Email:", email);
console.log("Phone:", phone);

  const domain = email.split("@")[1]?.toLowerCase();

if (disposableDomains.includes(domain)) {
  return {
    verified: false,
    reason: "Disposable email detected",
    score: 0,
  };
}

console.log("Domain:", domain);
console.log("Disposable:", disposableDomains.includes(domain));

  const result = await validate({
    email,
    validateSMTP: false,
  });
console.log("Deep Email Result:", result);
  if (!result.valid) {
    return {
      verified: false,
      reason: "Invalid email",
      score: 0,
    };
  }
console.log("Deep Email Result:", result);

  const phoneObj = parsePhoneNumberFromString(phone, "IN");

  if (!phoneObj?.isValid()) {
    return {
      verified: false,
      reason: "Invalid phone",
      score: 50,
    };
  }

  return {
    verified: true,
    score: 100,
  };
}

module.exports = { verifyLead };