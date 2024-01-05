const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");
const { validaUsuario, validaIdParams } = require("../middleware/userValidation");
const paginacao = require("../middleware/paginacao.middleware");


//rotas GET
router.get('/findById/:id', validaIdParams, usuarioController.findUserByIdController);
router.get('/findAll', paginacao, usuarioController.findAllUsersController);

//rotas POST
router.post('/create', validaUsuario, usuarioController.createUserController);

//rotas PUT
router.put('/update/:id', validaIdParams, validaUsuario, usuarioController.updateUserController);

//rotas DELETE
router.delete('/delete/:id', validaIdParams, usuarioController.removeUserController);


module.exports = router;