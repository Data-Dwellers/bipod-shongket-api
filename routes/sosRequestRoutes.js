const express = require("express");
const router = express.Router();
const {
    createSOSRequest,
    getSOSRequest,
    updateSOSRequest,
    deleteSOSRequest,
} = require("../controllers/sosRequestController");

// Create new SOS request
router.post("/", createSOSRequest);

// Get SOS requests (with optional query filters)
router.get("/", getSOSRequest);

// Update SOS request (with query filters)
router.put("/", updateSOSRequest);

// Delete SOS request (with query filters)
router.delete("/", deleteSOSRequest);

module.exports = router;
