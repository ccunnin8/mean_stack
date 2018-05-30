const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/github_battle");

mongoose.connection.on("connected",()=>{
  console.log("connected to database");
});

//require models
require('../models/player');
