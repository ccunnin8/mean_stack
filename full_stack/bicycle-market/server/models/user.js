const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Bicycle = require('./bicycle');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, min: [2, "username too short (must be > 2 chars)"]},
  passwork: { type: String, required: true,
     validate: {
       validator: (password) =>{
         return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password)
       },
       message: "{PASSWORD} must have 1 lowercase, 1 uppercase, 1 number, and longer than 8 characters!"
     }
   },
   bicycles: [Bicycle]
}, { timestamps: true });


const User = mongoose.model("User",UserSchema);

//export User
module.exports = User;
