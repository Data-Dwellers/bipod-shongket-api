const userService = require("../services/userService");

const createUser = async (req, res) => {
    const userData = req.body;
    const result = await userService.createUser(userData);
    if (result.success) {
        return res.status(201).send({ message: result.message });
    } else {
        return res.status(500).send({ message: result.message });
    }
};

const getUser = async (req, res) => {
    const query = req.query;
    const result = await userService.getUser(query);
    if (result.success) {
        return res.status(200).send({ data: result.data });
    } else {
        return res.status(404).send({ message: result.message });
    }
};

const updateUser = async (req, res) => {
    const query = req.query;
    const updateData = req.body;
    const result = await userService.updateUser(query, updateData);
    if (result.success) {
        return res.status(200).send({
            message: result.message,
            data: result.data,
        });
    } else {
        return res.status(400).send({ message: result.message });
    }
};

const deleteUser = async (req, res) => {
    const query = req.query;
    const result = await userService.deleteUser(query);
    if (result.success) {
        return res.status(200).send({ message: result.message });
    } else {
        return res.status(404).send({ message: result.message });
    }
};

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
};
