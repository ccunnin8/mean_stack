var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/bears");

var BearSchema = new mongoose.Schema({
  name: { type: String, required: true},
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true }
}, { timestamps: true });


mongoose.model("Bear",BearSchema);
var Bear = mongoose.model("Bear");

module.exports = {
  Bear
}
