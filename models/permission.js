// models/permission.js
const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  name: String
}, { timestamps: true });

module.exports = mongoose.model('Permission', permissionSchema);
