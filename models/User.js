const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    phone: Number,
    isAdmin: Boolean,
    defaultLocation: {
        name: String,
        lat: String,
        long: String
    },
    emergency_contact: {
        name: String,
        phone: String,
        email: String,
        relation: String,
        location: {
            name: String,
            lat: Number,
            long: Number,
        }
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
