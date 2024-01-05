const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");
const { validaUsuario, validaIdParams } = require("../middleware/userValidation");
const paginacao = require("../middleware/paginacao.middleware");
const authMiddleware = require("../middleware/auth.middleware");

//rotas GET
router.get('/findById/:id', authMiddleware, validaIdParams, usuarioController.findUserByIdController);
router.get('/findAll', authMiddleware, paginacao, usuarioController.findAllUsersController);

//rotas POST
router.post('/create', validaUsuario, usuarioController.createUserController);

//rotas PUT
router.put('/update/:id', authMiddleware, validaIdParams, validaUsuario, usuarioController.updateUserController);

//rotas DELETE
router.delete('/delete/:id', authMiddleware, validaIdParams, usuarioController.deleteUserController);


module.exports = router;