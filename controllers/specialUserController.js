const specialUserService = require("../services/specialUserService");

const createSpecialUser = async (req, res) => {
    const userData = req.body;
    const result = await specialUserService.createSpecialUser(userData);
    if (result.success) {
        return res.status(201).send({ message: result.message });
    } else {
        return res.status(500).send({ message: result.message });
    }
};

const getSpecialUser = async (req, res) => {
    const query = req.query;
    const result = await specialUserService.getSpecialUser(query);
    if (result.success) {
        return res.status(200).send({ data: result.data });
    } else {
        return res.status(404).send({ message: result.message });
    }
};

const updateSpecialUser = async (req, res) => {
    const query = req.query;
    const updateData = req.body;
    const result = await specialUserService.updateSpecialUser(query, updateData);
    if (result.success) {
        return res.status(200).send({
            message: result.message,
            data: result.data,
        });
    } else {
        return res.status(400).send({ message: result.message });
    }
};

const deleteSpecialUser = async (req, res) => {
    const query = req.query;
    const result = await specialUserService.deleteSpecialUser(query);
    if (result.success) {
        return res.status(200).send({ message: result.message });
    } else {
        return res.status(404).send({ message: result.message });
    }
};

module.exports = {
    createSpecialUser,
    getSpecialUser,
    updateSpecialUser,
    deleteSpecialUser,
};