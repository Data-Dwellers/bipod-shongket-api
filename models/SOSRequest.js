const mongoose = require("mongoose");

const sosRequestSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  user: { type: String },
  date: { type: Date, default: Date.now },
  location: {
    lat: Number,
    long: Number,
  },
});

const SOSRequest = mongoose.model("SOSReqeust", sosRequestSchema);
module.exports = SOSRequest;
