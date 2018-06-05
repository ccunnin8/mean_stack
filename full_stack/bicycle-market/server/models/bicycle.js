const mongoose = require('mongoose');
const User = require('./user');

const BicycleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: Buffer, contentType: String },
});

const Bicycle = mongoose.model("Bicycle",BicycleSchema);

module.exports = { Bicycle, BicycleSchema } ;
