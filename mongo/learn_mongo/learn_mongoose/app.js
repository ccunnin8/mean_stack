var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var { User } = require('./models.js');
const ejsLint = require('ejs-lint');

app.use(bodyParser.urlencoded({extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, "./static")));
app.set("views",path.join(__dirname,"./views"));

app.set("view engine","ejs");



app.get("/",(req,res)=>{
  try {
      User.find({},(err,data)=>{
      if (err) {
        res.render("index", { errors: err });
      } else {
        res.render("index", { users: data, errors: err });
      }
    });
  } catch(error){
    console.log("an error happened!");
  }
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

User.remove({})
