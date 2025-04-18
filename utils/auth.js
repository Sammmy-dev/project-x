// utils/auth.js
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Role = require('../models/role');

exports.verifyToken = async (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ error: 'No token provided' });

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

exports.isSuperAdmin = async (req, res, next) => {
  if (req.userRole !== 'super_admin') {
    return res.status(403).json({ error: 'Require Super Admin Role!' });
  }
  next();
};
