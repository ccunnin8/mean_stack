var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/1955");
var personSchema = mongoose.Schema({
  name: String
});

var Person = mongoose.model("Person",personSchema);

app.get("/",(req,res)=>{
  Person.find({},(err,people)=>{
    if (err) res.json({message: "Error", error: err});
    else res.json({people});
  });
});

app.get("/new/:name",(req,res)=>{
  var {name} = req.params;
  Person.create({name},(err)=>{
    if (err) res.json({message: "Error", error: err});
    else res.json({message:"Success"});
  })
});

app.get("/remove/:name",(req,res)=>{
  var {name} = req.params;
  Person.deleteOne({name},(err)=>{
    if (err) res.json({message: "Error", error: err});
    else res.json({message: "Success"});
  })
});

app.get("/:name",(req,res)=>{
  var {name} = req.params;
  Person.findOne({name},(err,person)=>{
    if (err) res.json({messsage: "Error", error: err });
    else res.json({message: "Success", person});
  })
});

app.listen(8000,()=>{
  console.log("listening on port 8000");
});
