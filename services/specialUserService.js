const SpecialUser = require('../models/SpecialUser');

async function createSpecialUser(data) {
    try {
        const specialUser = new SpecialUser(data);
        await specialUser.save();
        return { success: true, message: "Special User has been saved" };
    } catch (error) {
        console.error("Error: can't save Special User", error);
        return { success: false, message: "Failed to save Special User" };
    }
}

async function getSpecialUser(query = {}) {
    try {
        const specialUsers = await SpecialUser.find({ ...query, status: 'active' });
        if (!specialUsers || specialUsers.length === 0) {
            return { success: false, message: "No special users found" };
        }
        return { success: true, data: specialUsers };
    } catch (error) {
        console.error("Error: can't get Special User", error);
        return { success: false, message: "Failed to get Special User" };
    }
}

async function updateSpecialUser(query = {}, data) {
    try {
        if (Object.keys(query).length === 0) {
            return {
                success: false,
                message: "Query parameters are required for update operation",
            };
        }

        const specialUser = await SpecialUser.findOneAndUpdate(
            query,
            data,
            { new: true, runValidators: true }
        );
        if (!specialUser) {
            return { success: false, message: "Special User not found" };
        }
        return {
            success: true,
            message: "Special User updated successfully",
            data: specialUser,
        };
    } catch (error) {
        console.error("Error: can't update Special User", error);
        return { success: false, message: "Failed to update Special User" };
    }
}

async function deleteSpecialUser(query = {}) {
    try {
        if (Object.keys(query).length === 0) {
            return {
                success: false,
                message: "Query parameters are required for delete operation",
            };
        }

        const specialUser = await SpecialUser.findOneAndUpdate(
            query,
            { status: 'removed' },
            { new: true }
        );
        if (!specialUser) {
            return { success: false, message: "Special User not found" };
        }
        return { success: true, message: "Special User deleted successfully" };
    } catch (error) {
        console.error("Error: can't delete Special User", error);
        return { success: false, message: "Failed to delete Special User" };
    }
}

module.exports = {
    createSpecialUser,
    getSpecialUser,
    updateSpecialUser,
    deleteSpecialUser,
};