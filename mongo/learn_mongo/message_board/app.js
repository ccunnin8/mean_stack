var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var { Message } = require('./models.js');

const PORT = 8000 || PORT
var app = express();

app.use(bodyParser({urlencoded: true}));
app.use("/static",express.static(path.join(__dirname,"/static")));
app.use("/views",express.static(path.join(__dirname,"/views")));

app.set("view engine","ejs");


app.get("/",(req,res)=>{
  var messages = Message.find({},(err,messages)=>{
    res.render("index", {messages});
  });
});

app.post("/new_message",(req,res)=>{
  Message.create({
    name: req.body.name,
    message: req.body.message
  },(errors)=>{
    if (errors) {
      console.log("an error occured");
      res.render("index",{errors})
    } else {
      res.redirect('/');
    }
  })
});

app.post("/comment/:id",(req,res)=>{
  Message.findOne({_id: req.params.id},(err,message)=>{
    if (err) {
      console.log("an error occured");
      res.redirect("/");
    } else {
      message.comments.push({
        name: req.body.name,
        message: req.body.message
      });
      message.save((err)=>{
        if (err) console.log(err);
        res.redirect("/");
      })
    }
  });
});

app.listen(PORT,() => console.log("listening on port ",PORT));
