const mongoose = require('mongoose');

const SpecialUserSchema = new mongoose.Schema({
    specialUserId: { type: String },
    specialUserName: { type: String },
    specialUserEmail: { type: String },
    specialUserPhone: { type: String },
    role: { type: String},
    Status: { type: String, },
    institution: { type: String }, // Optional, only after removal
}, { timestamps: true });

module.exports = mongoose.model('SpecialUser', SpecialUserSchema);
