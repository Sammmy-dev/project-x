// controllers/user.controller.js
const bcrypt = require('bcrypt');
const User = require('../models/user');
const Role = require('../models/role');

exports.addUser = async (req, res) => {
  const { fullName, email, roleName } = req.body;
  try {
    const role = await Role.findOne({ name: roleName });
    if (!role) return res.status(404).json({ error: 'Role not found' });

    const defaultPassword = 'password123';
    const hashedPassword = await bcrypt.hash(defaultPassword, 10);

    const user = new User({
      fullName,
      email,
      password: hashedPassword,
      role: role._id
    });

    await user.save();
    res.status(201).json({ message: 'User added successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
