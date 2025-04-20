const mongoose = require("mongoose");

const sosRequestSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: new Date(""),
    location: {
        lat: Number,
        long: Number,
    },
});

const SOSRequest = mongoose.model("SOSReqeust", sosRequestSchema);
module.exports = SOSRequest;
