var mongoose = require('mongoose');
var bcrypt = require('bcrypt-as-promised');

mongoose.connect("mongodb://localhost/login_reg");

//DEFINE THE USER SCHMEA
var UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  first_name: { type: String, required: true  },
  last_name: { type: String, required: true  },
  password: {
    type: String,
    required: true,
    validate: [{
      validator: password_validation,
      message: " { VALUE } is not a valid password needs to be longer than 5 characters"
      }]
  },
  birthday: { type: Date, required: true  }
}, { timeStamps: true });

//ADD PASHWORD ENCRYPTION USING BCRYPT RETURNS A PROMISE THAT CAN BE USED
UserSchema.methods.encrypt_password = (password) => {
  return bcrypt.hash(password);
};


//ENCRYPT BEFORE SAVING
UserSchema.pre("save",function(done){
  this.encrypt_password(this.password).then((new_pass) => {
     this.password = new_pass;
     done();
   }).catch(err=> err );
});

//STORE MODEL
var User = mongoose.model("User",UserSchema);

var compare_password = (pass1,pass2) => {
  return bcrypt.compare(pass1,pass2);
}

//PASSWORD VALIDATION
function password_validation(password) {
  return /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/.test(password);
}

module.exports = { User, compare_password };
