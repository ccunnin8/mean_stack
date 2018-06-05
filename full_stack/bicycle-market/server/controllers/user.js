const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports = {
  login(req,res){
    const { email, password } = req.body;
    User.findOne({email}).then((user)=>{
      if (user){
        bcrypt.compare(password,user.password).then((match)=>{
          if (match) {
            req.session.email = email;
            req.session.user_id = user._id;
            req.session.logged_in = true;
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
        res.json({"email": data.email });
    }).catch(err => res.json({"error": err }));
  },
  logout(req,res){
    delete(req.session.username);
    delete(req.session.user_id);
    delete(req.session.logged_in);
    res.redirect("/");
  }
}
