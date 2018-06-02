const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const modelsPath = path.join(__dirname, '../models');

mongoose.connect("mongodb://localhost/bicycle-marketplace");

mongoose.connect.on("connected",()=> console.log("connected to mongoose database"));

fs.readdirSync(modelsPath).forEach((file)=>{
  require(path.join(modelsPath,file));
});
