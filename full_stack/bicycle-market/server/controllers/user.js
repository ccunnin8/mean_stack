const User = require('../models/user');
const session = require('express-session')
const bcrypt = require('bcrypt');

module.exports = {
  login(req,res){
    const { username, password } = req.body;
    User.find({username}).then((user)=>{
      bcrypt.compare(password,user.password).then((match)=>{
        if (match) {
          session.username = username;
          session.logged_in = true;
          res.json({ "username": username, })
        } else{
          res.json({"error": "password not correct"})
        }
      })
    }).catch(err => res.json({"error": "username not found" }));
  },
  register(req,res){
    User.create(req.body).then((data) => {
      session.username = data.username;
      session.logged_in = true;
      res.json({ "username": username});
    }).catch(err => res.json({"error": "something went wrong!" }));
  }
}
