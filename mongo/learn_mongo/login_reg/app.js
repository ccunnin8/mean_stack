var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var { User, compare_password } = require('./models.js');
var flash = require('express-flash-messages');
var bcrypt = require('bcrypt-as-promised');
var app = express();

app.set("view engine","ejs");
app.use(bodyParser({urlEncoded: true }));
app.use("/views",express.static(path.join(__dirname,"/views")));
app.use(session({ secret: "ElSecreto" }));
app.use(flash());
app.get("/",(req,res)=> res.render("index"));

app.post("/register",(req,res)=>{
  //pull necessary data from form
  var { first_name, last_name, email, password, pass_conf, birthday } = req.body;
  console.log(typeof(birthday));
  //check password
  if (password === pass_conf){
    var user_details = { first_name, last_name, email, password, birthday };
    var new_user = new User(user_details);
    new_user.save((errors)=>{
      if (errors)
      {
        req.flash("error",[...errors]);
        res.redirect("/");
      }
      else
      {
        req.session.user_id = new_user._id;
        req.session.logged_in = true;
        req.session.user_name = `${new_user.first_name} + " " ${new_user.last_name}`;
        res.redirect("dashboard");
      }
    });
  }
  else
  {
    req.flash("passwords","Passwords do not match!");
    res.redirect("/");
  }
});

app.post("/login",(req,res)=>{
  //if success
  User.findOne({email: req.body.email},(err,user)=>{
    if (err)
    {
      req.flash("error","User not found!");
      res.redirect("/");
    }
    else
    {
      compare_password(req.body.password,user.password)
      .then(() => {
        req.session.user_id = user._id;
        req.session.logged_in = true;
        req.session.user_name = `${user.first_name} + " " ${user.last_name}`;
         res.redirect("/dashboard")
       })
       .catch((err)=>{
         console.log(err);
        req.flash("error","Incorrect Password!");
        res.redirect("/");
      });
    }
  });
});

app.get("/logout",(req,res)=>{
  delete req.session.user_id;
  delete req.session.user_name;
  req.session.logged_in = false;
  res.redirect("/");
})

app.get("/dashboard",(req,res)=>{
 //if session.logged_in === true
 if (req.session.logged_in){
   res.render("dashboard");
 } else {
   req.flash("error","Must be logged in");
   res.redirect("/");
 }
});

app.listen(8000,() => console.log("listening on 8000"));
