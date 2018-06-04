const router = require('express').Router();
const UsersController = require('../controllers/user');


router
  .post("/register",UsersController.register)
  .post("/login",UsersController.login)
  .get("/logout",UsersController.logout);


module.exports = router;
