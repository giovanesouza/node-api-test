const userService = require("../service/usuario.service");

const createUserController = async (req, res) => {
    try {
        const foundUserByEmail = await userService.findUserByEmailService(req.body.email);

        // Verifica se existe um usuário com o e-mail informado
        if (foundUserByEmail)
            return res.status(400).send({ message: "Já existe um usuário cadastrado com o email informado." });

        return res.status(201).send(await userService.createUserService(req.body));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        console.log(err.name)

        return res.status(500).send({ message: `Tente novamente!` });
    }
};

const findUserByIdController = async (req, res) => {

    try {
        const user = await userService.findUserByIdService(req.params.id);

        if (!user) {
            return res.status(404).send({ message: "Usuário não encontrado, tente novamente!" });
        }

        return res.status(200).send(user);

    } catch (err) {
        if (err.kind == "ObjectId") {
            return res.status(400).send({ message: `O 'id' informado está incorreto. tente novamente!` });
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const findAllUsersController = async (req, res) => {
    try {
        return res.status(200).send(await userService.findAllUsersService(req.query.limit, req.query.offset));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!` });
    }
};


const updateUserController = async (req, res) => {

    try {
        return res.send(await userService.updateUserService(req.params.id, req.body));
    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado tente novamente!` });
    }
};

const deleteUserController = async (req, res) => {
    try {

        const deletedUser = await userService.deleteUserService(req.params.id);

        console.log(deletedUser);

        if (deletedUser == null) {
            res.status(404).send({ message: `Usuário não encontrado, tente novamente!` });
        } else {
            res.status(200).send({ message: `Usuário deletado com sucesso!` });
        }

    } catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado. tente novamente!` });
    }
};


module.exports = {
    findUserByIdController,
    findAllUsersController,
    createUserController,
    updateUserController,
    deleteUserController
}