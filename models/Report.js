const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
    owner: String,
    ownerName: String,
    incedentType: String,
    description: String,
    incedentDate: Date,
    reportingDate: Date,
    location: {
        country: String,
        city: String,
        street: String,
    },
    comments: [{
        text: String,
        authorName: String,
        authorEmail: String,
        createdAt: { type: Date, default: Date.now }
    }]
});

const Report = mongoose.model("Report", reportSchema);
module.exports = Report;
