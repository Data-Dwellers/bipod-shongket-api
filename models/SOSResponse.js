const mongoose = require("mongoose");

const sosResponseSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    date: new Date(""),
    location: {
        lat: Number,
        long: Number,
    },
});

const SOSResponse = mongoose.model("SOSResponse", sosResponseSchema);
module.exports = SOSResponse;
