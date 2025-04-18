// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: String,
  email: {
     type: String, 
     unique: true 
    },
  password: String,
  role: {
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Role' },
  companyName: String
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
