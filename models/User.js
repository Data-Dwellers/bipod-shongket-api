const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    location: {
        name: String,
        lat: Number,
        long: Number
    },
    emergency_contact: {
        name: String,
        phone: String,
        email: String,
        relation: String,
        location: {
            name: String,
            lat: Number,
            long: Number
        }
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
