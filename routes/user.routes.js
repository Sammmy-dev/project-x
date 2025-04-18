// routes/user.routes.js
const express = require('express');
const router = express.Router();
const { addUser } = require('../controllers/user.controller');
const { verifyToken, isSuperAdmin } = require('../utils/auth');

router.post('/add', verifyToken, isSuperAdmin, addUser);

module.exports = router;
