const User = require('../models/user');
const session = require('express-session')
module.exports = {
  login(req,res){
    User.find({}).then(data => res.json(data)).catch(err => console.log(err));
  },
  register(req,res){
    User.create(post).then(data => json(data)).catch(err => console.log(err));
  }
}
