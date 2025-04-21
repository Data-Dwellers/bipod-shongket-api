const express = require("express");
const router = express.Router();
const {
    createSOSResponse,
    getSOSResponse,
    updateSOSResponse,
    deleteSOSResponse,
} = require("../controllers/sosResponseController");

// Create new SOS response
router.post("/", createSOSResponse);

// Get SOS responses (with optional query filters)
router.get("/", getSOSResponse);

// Update SOS response (with query filters)
router.put("/", updateSOSResponse);

// Delete SOS response (with query filters)
router.delete("/", deleteSOSResponse);

module.exports = router;
