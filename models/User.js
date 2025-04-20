const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    phone: Number,
    isAdmin: Boolean,

    defaultAdress: {
        country: String,
        city: String,
        street: String,
        zipCode: Number,
    },

    currentLocation: {
        lat: Number,
        long: Number,
    },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
