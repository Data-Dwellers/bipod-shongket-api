const SOSResponse = require("../models/SOSResponse");

async function createSOSResponse(data) {
    try {
        const sosResponse = new SOSResponse(data);
        await sosResponse.save();
        return { success: true, message: "SOS Response has been saved" };
    } catch (error) {
        console.error("Error: can't save SOS Response", error);
        return { success: false, message: "Failed to save SOS Response" };
    }
}

async function getSOSResponse(query = {}) {
    try {
        const sosResponses = await SOSResponse.find(query).populate("owner");
        if (!sosResponses || sosResponses.length === 0) {
            return { success: false, message: "No SOS Responses found" };
        }
        return { success: true, data: sosResponses };
    } catch (error) {
        console.error("Error: can't get SOS Response", error);
        return { success: false, message: "Failed to get SOS Response" };
    }
}

async function updateSOSResponse(query = {}, data) {
    try {
        // Check if query is empty
        if (Object.keys(query).length === 0) {
            return {
                success: false,
                message: "Query parameters are required for update operation",
            };
        }

        const sosResponse = await SOSResponse.findOneAndUpdate(query, data, {
            new: true,
            runValidators: true,
        });
        if (!sosResponse) {
            return { success: false, message: "SOS Response not found" };
        }
        return {
            success: true,
            message: "SOS Response updated successfully",
            data: sosResponse,
        };
    } catch (error) {
        console.error("Error: can't update SOS Response", error);
        return { success: false, message: "Failed to update SOS Response" };
    }
}

async function deleteSOSResponse(query = {}) {
    try {
        // Check if query is empty
        if (Object.keys(query).length === 0) {
            return {
                success: false,
                message: "Query parameters are required for delete operation",
            };
        }

        const sosResponse = await SOSResponse.findOneAndDelete(query);
        if (!sosResponse) {
            return { success: false, message: "SOS Response not found" };
        }
        return { success: true, message: "SOS Response deleted successfully" };
    } catch (error) {
        console.error("Error: can't delete SOS Response", error);
        return { success: false, message: "Failed to delete SOS Response" };
    }
}

module.exports = {
    createSOSResponse,
    getSOSResponse,
    updateSOSResponse,
    deleteSOSResponse,
};
