const Usuario = require("../model/Usuario");

const findUserByIdService = (id) => {
    return Usuario.findById(id);
}

const findAllUsersService = (limit, offset) => {
    return Usuario.find().limit(limit).skip(offset);
}

const createUserService = (body) => {
    return Usuario.create(body);
}

const updateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
}

const removeUserService = (id) => {
    return Usuario.findByIdAndRemove(id);
}

module.exports = {
    findUserByIdService,
    findAllUsersService,
    createUserService,
    updateUserService,
    removeUserService
}