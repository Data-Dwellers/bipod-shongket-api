const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    incedentType: String,
    description: String,
    incedentDate: Date,
    reportingDate: Date,
    location: {
        country: String,
        city: String,
        street: String,
    },
});

const Report = mongoose.model("Report", userSchema);
module.exports = Report;
