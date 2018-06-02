const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  //add schema
});

const User = mongoose.model("User",UserSchema);

//export User
module.exports = User;
