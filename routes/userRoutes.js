const express = require("express");
const router = express.Router();
const {
    createUser,
    getUser,
    updateUser,
    deleteUser,
} = require("../controllers/userController");

// Create new user
router.post("/", createUser);

// Get users (with optional query filters)
router.get("/", getUser);

// Update user (with query filters)
router.put("/", updateUser);

// Delete user (with query filters)
router.delete("/", deleteUser);

module.exports = router;
