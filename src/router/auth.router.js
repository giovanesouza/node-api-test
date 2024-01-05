const router = require("express").Router();
const authController = require("../controller/auth.controller");
const { validaLogin } = require("../middleware/userValidation");

router.post("/login", validaLogin, authController.loginController);

module.exports = router;