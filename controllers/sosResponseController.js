const sosResponseService = require("../services/sosResponseService");

const createSOSResponse = async (req, res) => {
    const responseData = req.body;
    const result = await sosResponseService.createSOSResponse(responseData);
    if (result.success) {
        return res.status(201).send({ message: result.message });
    } else {
        return res.status(500).send({ message: result.message });
    }
};

const getSOSResponse = async (req, res) => {
    const query = req.query;
    const result = await sosResponseService.getSOSResponse(query);
    if (result.success) {
        return res.status(200).send({ data: result.data });
    } else {
        return res.status(404).send({ message: result.message });
    }
};

const updateSOSResponse = async (req, res) => {
    const query = req.query;
    const updateData = req.body;
    const result = await sosResponseService.updateSOSResponse(
        query,
        updateData
    );
    if (result.success) {
        return res.status(200).send({
            message: result.message,
            data: result.data,
        });
    } else {
        return res.status(400).send({ message: result.message });
    }
};

const deleteSOSResponse = async (req, res) => {
    const query = req.query;
    const result = await sosResponseService.deleteSOSResponse(query);
    if (result.success) {
        return res.status(200).send({ message: result.message });
    } else {
        return res.status(404).send({ message: result.message });
    }
};

module.exports = {
    createSOSResponse,
    getSOSResponse,
    updateSOSResponse,
    deleteSOSResponse,
};
