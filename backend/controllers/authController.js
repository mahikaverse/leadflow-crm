const User = require('../models/User');
const { signToken } = require('../utils/token');

function authResponse(user) {
  return { token: signToken(user._id.toString()), user: user.toJSON() };
}

async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name?.trim() || !email?.trim() || !password || password.length < 8) {
      return res.status(400).json({ message: 'Name, email, and an 8+ character password are required' });
    }
    if (await User.exists({ email: email.toLowerCase().trim() })) {
      return res.status(409).json({ message: 'An account with this email already exists' });
    }
    const user = new User({ name: name.trim(), email: email.toLowerCase().trim() });
    user.setPassword(password);
    await user.save();
    res.status(201).json(authResponse(user));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email?.toLowerCase().trim() }).select('+passwordHash +passwordSalt');
    if (!user || !password || !user.verifyPassword(password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.json(authResponse(user));
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function getProfile(req, res) {
  res.json(req.user);
}

async function updateProfile(req, res) {
  try {
    const allowed = ['name', 'jobTitle', 'phone', 'preferences'];
    allowed.forEach((field) => {
      if (req.body[field] !== undefined) req.user[field] = req.body[field];
    });
    await req.user.save();
    res.json(req.user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = { register, login, getProfile, updateProfile };
