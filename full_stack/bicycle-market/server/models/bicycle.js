const mongoose = require('mongoose');

const BicycleSchema = new mongoose.Schema({
  //bike shecma;
});

const Bicycle = mongoose.model("Bicycle",BicycleSchema);

module.exports = Bicycle;
