var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 6 },
  age: { type: Number, min: 1, max: 150 }
}, { timestamps: true });
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.model("User",UserSchema);
mongoose.Promise = global.Promise

module.exports = {
    User: mongoose.model("User")
}
