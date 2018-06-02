const User = require('../models/user');

module.exports = {
  index(req,res){
    User.find({}).then(data => res.json(data)).catch(err => console.log(err));
  }
}
