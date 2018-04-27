var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/task_api");

var taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, required: true, default: false}
}, {timestamps: true});

var Task = mongoose.model("Task",taskSchema);


//GET ALL TASKS
app.get("/tasks",(req,res)=>{
  Task.find({},(err,tasks)=>{
    if (err) res.json({message: "Error", err });
    else res.json({ message: "Success", tasks });
  });
});

//GET ONE TASK
app.get("/tasks/:id",(req,res)=>{
  var { id } = req.params;
  Task.find({ _id: id }, (err,task)=>{
    if (err) res.json({ message: "Error" });
    else res.json({ ...task });
  });
});

//MAKE A NEW TASK
app.post("/tasks",(req,res)=>{
  var { title, description, completed } = req.body;
  Task.create({title, description, completed},(err)=>{
    if (err) res.json({message: "Error" });
    else res.json({message: "Success"});
  });
});

//UPDATE TASK
app.put("/tasks/:id",(req,res)=>{
  var { id } = req.params;
    var { title, description, completed } = req.body;
  Task.updateOne({_id: id },{
    $set: { title, description, completed }
  }, function(){
    res.redirect("/tasks/" + id );
  });
});

//REMVOE TASK
app.delete("/tasks/:id",(req,res)=>{
  var { id } = req.params;
  Task.deleteOne({_id: id },(err)=>{
    if (err) res.json({message: "Error"});
    else res.json({message: "Success"});
  })
});

app.listen(8000,()=>{
  console.log("Listening on port 8000");
})
