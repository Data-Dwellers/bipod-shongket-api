const express = require("express");
const router = express.Router();
const {
    createReport,
    getReport,
    updateReport,
    deleteReport,
} = require("../controllers/reportController");

// Create new report
router.post("/", createReport);

// Get reports (with optional query filters)
router.get("/", getReport);

// Update report (with query filters)
router.put("/", updateReport);

// Delete report (with query filters)
router.delete("/", deleteReport);

module.exports = router;
