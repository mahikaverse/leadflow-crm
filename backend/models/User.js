const crypto = require('crypto');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true, select: false },
  passwordSalt: { type: String, required: true, select: false },
  jobTitle: { type: String, default: '' },
  phone: { type: String, default: '' },
  preferences: {
    emailNotifications: { type: Boolean, default: true },
    pushNotifications: { type: Boolean, default: false },
    weeklySummary: { type: Boolean, default: true },
    productUpdates: { type: Boolean, default: false },
  },
}, { timestamps: true });

userSchema.methods.setPassword = function setPassword(password) {
  this.passwordSalt = crypto.randomBytes(16).toString('hex');
  this.passwordHash = crypto.scryptSync(password, this.passwordSalt, 64).toString('hex');
};

userSchema.methods.verifyPassword = function verifyPassword(password) {
  const candidate = crypto.scryptSync(password, this.passwordSalt, 64);
  return crypto.timingSafeEqual(candidate, Buffer.from(this.passwordHash, 'hex'));
};

userSchema.methods.toJSON = function toJSON() {
  const user = this.toObject();
  delete user.passwordHash;
  delete user.passwordSalt;
  return user;
};

module.exports = mongoose.model('User', userSchema);
