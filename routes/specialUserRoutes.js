const express = require("express");
const router = express.Router();
const {
    createSpecialUser,
    getSpecialUser,
    updateSpecialUser,
    deleteSpecialUser,
} = require("../controllers/specialUserController");

// Create new special user
router.post("/", createSpecialUser);

// Get special users (with optional query filters)
router.get("/", getSpecialUser);

// Update special user (with query filters)
router.put("/", updateSpecialUser);

// Delete special user (with query filters)
router.delete("/", deleteSpecialUser);

module.exports = router;