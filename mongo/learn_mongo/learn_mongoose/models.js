var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: String,
  age: Number
});
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.model("User",UserSchema);
mongoose.Promise = global.Promise

module.exports = {
    User: mongoose.model("User")
}
