const SOSRequest = require("../models/SOSRequest");

async function createSOSRequest(data) {
    try {
        const sosRequest = new SOSRequest(data);
        await sosRequest.save();
        return { success: true, message: "SOS Request has been saved" };
    } catch (error) {
        console.error("Error: can't save SOS Request", error);
        return { success: false, message: "Failed to save SOS Request" };
    }
}

async function getSOSRequest(query = {}) {
    try {
        const sosRequests = await SOSRequest.find(query).populate("owner");
        if (!sosRequests || sosRequests.length === 0) {
            return { success: false, message: "No SOS Requests found" };
        }
        return { success: true, data: sosRequests };
    } catch (error) {
        console.error("Error: can't get SOS Request", error);
        return { success: false, message: "Failed to get SOS Request" };
    }
}

async function updateSOSRequest(query = {}, data) {
    try {
        // Check if query is empty
        if (Object.keys(query).length === 0) {
            return {
                success: false,
                message: "Query parameters are required for update operation",
            };
        }

        const sosRequest = await SOSRequest.findOneAndUpdate(query, data, {
            new: true,
            runValidators: true,
        });
        if (!sosRequest) {
            return { success: false, message: "SOS Request not found" };
        }
        return {
            success: true,
            message: "SOS Request updated successfully",
            data: sosRequest,
        };
    } catch (error) {
        console.error("Error: can't update SOS Request", error);
        return { success: false, message: "Failed to update SOS Request" };
    }
}

async function deleteSOSRequest(query = {}) {
    try {
        // Check if query is empty
        if (Object.keys(query).length === 0) {
            return {
                success: false,
                message: "Query parameters are required for delete operation",
            };
        }

        const sosRequest = await SOSRequest.findOneAndDelete(query);
        if (!sosRequest) {
            return { success: false, message: "SOS Request not found" };
        }
        return { success: true, message: "SOS Request deleted successfully" };
    } catch (error) {
        console.error("Error: can't delete SOS Request", error);
        return { success: false, message: "Failed to delete SOS Request" };
    }
}

module.exports = {
    createSOSRequest,
    getSOSRequest,
    updateSOSRequest,
    deleteSOSRequest,
};
