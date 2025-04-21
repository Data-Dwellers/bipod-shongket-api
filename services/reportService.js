const Report = require("../models/Report");

async function createReport(data) {
    try {
        const report = new Report(data);
        await report.save();
        return { success: true, message: "Report has been saved" };
    } catch (error) {
        console.error("Error: can't save Report", error);
        return { success: false, message: "Failed to save Report" };
    }
}

async function getReport(query = {}) {
    try {
        const reports = await Report.find(query).populate("owner");
        if (!reports || reports.length === 0) {
            return { success: false, message: "No reports found" };
        }
        return { success: true, data: reports };
    } catch (error) {
        console.error("Error: can't get Report", error);
        return { success: false, message: "Failed to get Report" };
    }
}

async function updateReport(query = {}, data) {
    try {
        // Check if query is empty
        if (Object.keys(query).length === 0) {
            return {
                success: false,
                message: "Query parameters are required for update operation",
            };
        }

        const report = await Report.findOneAndUpdate(query, data, {
            new: true,
            runValidators: true,
        });
        if (!report) {
            return { success: false, message: "Report not found" };
        }
        return {
            success: true,
            message: "Report updated successfully",
            data: report,
        };
    } catch (error) {
        console.error("Error: can't update Report", error);
        return { success: false, message: "Failed to update Report" };
    }
}

async function deleteReport(query = {}) {
    try {
        // Check if query is empty
        if (Object.keys(query).length === 0) {
            return {
                success: false,
                message: "Query parameters are required for delete operation",
            };
        }

        const report = await Report.findOneAndDelete(query);
        if (!report) {
            return { success: false, message: "Report not found" };
        }
        return { success: true, message: "Report deleted successfully" };
    } catch (error) {
        console.error("Error: can't delete Report", error);
        return { success: false, message: "Failed to delete Report" };
    }
}

module.exports = {
    createReport,
    getReport,
    updateReport,
    deleteReport,
};
