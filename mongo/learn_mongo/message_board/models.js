var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/messages");

var Schema = mongoose.Schema;

var CommentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String ,required: true }
}, {timestamps: true });

var MessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  comments: [CommentSchema]
}, { timestamps: true });

mongoose.model("Message",MessageSchema);


module.exports = {
    Message: mongoose.model("Message")
}
