const reportService = require("../services/reportService");

const createReport = async (req, res) => {
    const reportData = req.body;
    const result = await reportService.createReport(reportData);
    if (result.success) {
        return res.status(201).send({ message: result.message });
    } else {
        return res.status(500).send({ message: result.message });
    }
};

const getReport = async (req, res) => {
    const query = req.query;
    const result = await reportService.getReport(query);
    if (result.success) {
        return res.status(200).send({ data: result.data });
    } else {
        return res.status(404).send({ message: result.message });
    }
};

const updateReport = async (req, res) => {
    const query = req.query;
    const updateData = req.body;
    const result = await reportService.updateReport(query, updateData);
    if (result.success) {
        return res.status(200).send({
            message: result.message,
            data: result.data,
        });
    } else {
        return res.status(400).send({ message: result.message });
    }
};

const deleteReport = async (req, res) => {
    const query = req.query;
    const result = await reportService.deleteReport(query);
    if (result.success) {
        return res.status(200).send({ message: result.message });
    } else {
        return res.status(404).send({ message: result.message });
    }
};

module.exports = {
    createReport,
    getReport,
    updateReport,
    deleteReport,
};
