const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { BicycleSchema }  = require('./bicycle');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, min: [2, "username too short (must be > 2 chars)"]},
  first_name: { type: String, required: true},
  last_name: { type: String, required: true },
  password: { type: String, required: true,
     validate: {
       validator: (password) =>{
         return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)
       },
       message: "{PASSWORD} must have 1 lowercase, 1 uppercase, 1 number, and longer than 8 characters!"
     }
   },
   bicycles: [BicycleSchema]
}, { timestamps: true });


UserSchema.pre("save",function (done) {
  bcrypt.hash(this.password,10).then((hashed_password)=>{
    this.password = hashed_password
    done();
  }).catch(err => err );
});

const User = mongoose.model("User",UserSchema);

//export User
module.exports = User;
