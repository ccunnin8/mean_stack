const User = require('../models/user');
const session = require('express-session')
const bcrypt = require('bcrypt');

module.exports = {
  login(req,res){
    const { email, password } = req.body;
    User.findOne({email}).then((user)=>{
      if (user){
        bcrypt.compare(password,user.password).then((match)=>{
          if (match) {
            session.email = email;
            session.user_id = user._id;
            session.logged_in = true;
            res.json({ "email": email })
          } else{
            res.json({"error": "password not correct"})
          }
        }).catch(err => res.json({ "error": "error with bcrypt" }))
      } else{
        res.json({ "error": "username not found"});
      }
    }).catch(err => res.json({"error": err }));
  },
  register(req,res){
    User.create(req.body).then((data)=>{
      bcrypt.hash(data.password,10).then((hashed_pw)=>{
        data.password = hashed_pw;
        data.save();
        res.json({"email": data.email });
      });
    }).catch(err => res.json({"error": err }));
  },
  logout(req,res){
    delete(session.username);
    delete(session.user_id);
    delete(session.logged_in);
    res.redirect("/");
  }
}
