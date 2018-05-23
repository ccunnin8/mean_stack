const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/teams");

mongoose.connection.on("connected",()=>{
  console.log("connected to database");
});

require("../models/players");
