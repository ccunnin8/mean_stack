var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var { User } = require('./models.js');

app.use(bodyParser.urlencoded({extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, "./static")));
app.set("views",path.join(__dirname,"./views"));

app.set("view engine","ejs");

app.get("/",(req,res)=>{
  User.find({},(err,data)=>{
    if (err) {
      console.log("ERROR");
      res.render("index");
    } else {
      res.render("index", { users: data });
    }
  });
});

app.post("/users",(req,res)=>{
  var user = new User({
    name: req.body.name,
    age: parseInt(req.body.age)
  });
  user.save((err)=>{
    if (err) {
      console.log("something went wrong!");
    } else {
      console.log("You're good!");
    }
  });
  res.redirect("/");
});

app.listen(8000,()=>{
  console.log("listening on 8000");
});
