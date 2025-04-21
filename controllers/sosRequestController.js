const sosRequestService = require("../services/sosRequestService");

const createSOSRequest = async (req, res) => {
    const requestData = req.body;
    const result = await sosRequestService.createSOSRequest(requestData);
    if (result.success) {
        return res.status(201).send({ message: result.message });
    } else {
        return res.status(500).send({ message: result.message });
    }
};

const getSOSRequest = async (req, res) => {
    const query = req.query;
    const result = await sosRequestService.getSOSRequest(query);
    if (result.success) {
        return res.status(200).send({ data: result.data });
    } else {
        return res.status(404).send({ message: result.message });
    }
};

const updateSOSRequest = async (req, res) => {
    const query = req.query;
    const updateData = req.body;
    const result = await sosRequestService.updateSOSRequest(query, updateData);
    if (result.success) {
        return res.status(200).send({
            message: result.message,
            data: result.data,
        });
    } else {
        return res.status(400).send({ message: result.message });
    }
};

const deleteSOSRequest = async (req, res) => {
    const query = req.query;
    const result = await sosRequestService.deleteSOSRequest(query);
    if (result.success) {
        return res.status(200).send({ message: result.message });
    } else {
        return res.status(404).send({ message: result.message });
    }
};

module.exports = {
    createSOSRequest,
    getSOSRequest,
    updateSOSRequest,
    deleteSOSRequest,
};
