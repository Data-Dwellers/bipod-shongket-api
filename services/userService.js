const User = require("../models/User");

async function createUser(data) {
    try {
        const user = new User(data);
        await user.save();
        return { success: true, message: "User has been saved" };
    } catch (error) {
        console.error("Error: can't save User", error);
        return { success: false, message: "Failed to save User" };
    }
}

async function getUser(query = {}) {
    try {
        const users = await User.find(query);
        if (!users || users.length === 0) {
            return { success: false, message: "No users found" };
        }
        return { success: true, data: users };
    } catch (error) {
        console.error("Error: can't get User", error);
        return { success: false, message: "Failed to get User" };
    }
}

async function updateUser(query = {}, data) {
    try {
        // Check if query is empty
        if (Object.keys(query).length === 0) {
            return {
                success: false,
                message: "Query parameters are required for update operation",
            };
        }

        const user = await User.findOneAndUpdate(query, data, {
            new: true,
            runValidators: true,
        });
        if (!user) {
            return { success: false, message: "User not found" };
        }
        return {
            success: true,
            message: "User updated successfully",
            data: user,
        };
    } catch (error) {
        console.error("Error: can't update User", error);
        return { success: false, message: "Failed to update User" };
    }
}

async function deleteUser(query = {}) {
    try {
        // Check if query is empty
        if (Object.keys(query).length === 0) {
            return {
                success: false,
                message: "Query parameters are required for delete operation",
            };
        }

        const user = await User.findOneAndDelete(query);
        if (!user) {
            return { success: false, message: "User not found" };
        }
        return { success: true, message: "User deleted successfully" };
    } catch (error) {
        console.error("Error: can't delete User", error);
        return { success: false, message: "Failed to delete User" };
    }
}

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
};
