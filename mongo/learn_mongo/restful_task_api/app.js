var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/task_api");

var taskSchema = mongoose.Schema({
  title: { type: String, required: true },
  descriptipn: { type: String, required: true },
  completed: { type: Boolean, required: true, default: false}
}, {timestamps: true});

var Task = mongoose.model("Task",taskSchema);

//GET ALL TASKS
app.get("/tasks",(req,res)=>{

});

//GET ONE TASK
app.get("/tasks/:id",(req,res)=>{
  var { id } = req.params;

});

//MAKE A NEW TASK
app.post("/tasks",(req,res)=>{

});

//UPDATE TASK
app.put("/tasks/:id",(req,res)=>{
  var { id } = req.params;

});

//REMVOE TASK
app.delete("/tasks/:id",(req,res)=>{
  var { id } = req.params;

});
