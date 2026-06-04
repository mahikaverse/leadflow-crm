const User = require('../models/User');
const { verifyToken } = require('../utils/token');

async function protect(req, res, next) {
  try {
    const token = req.headers.authorization?.startsWith('Bearer ')
      ? req.headers.authorization.slice(7)
      : null;
    if (!token) return res.status(401).json({ message: 'Authentication required' });
    const payload = verifyToken(token);
    const user = await User.findById(payload.sub);
    if (!user) return res.status(401).json({ message: 'User no longer exists' });
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: error.message || 'Invalid authentication token' });
  }
}

module.exports = { protect };
