const router = require('express').Router();
const UsersController = require('../controllers/user');


router
  .post("/register",UsersControllers.register)
  .login("/login",UserControllers.login);


module.exports = router;
