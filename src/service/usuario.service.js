const Usuario = require("../model/Usuario");

const findUserByIdService = (id) => {
    return Usuario.findById(id);
};

const findUserByEmailService = (bodyEmail) => {
    return Usuario.findOne({ email: bodyEmail });
};

const findAllUsersService = (limit, offset) => {
    return Usuario.find().limit(limit).skip(offset);
};

const createUserService = (body) => {
    return Usuario.create(body);
};

const updateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const deleteUserService = (id) => {
    return Usuario.findByIdAndDelete(id);
};

module.exports = {
    createUserService,
    findUserByIdService,
    findUserByEmailService,
    findAllUsersService,
    updateUserService,
    deleteUserService
}