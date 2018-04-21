var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/quoting_mongo");

var QuoteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quote: { type: String, required: true }
}, {timestamps: true });

mongoose.model("Quote",QuoteSchema);

module.exports = {
  Quote: mongoose.model("Quote")
}
