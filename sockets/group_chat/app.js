var express = require('express');
var session = require('express-session');
var socket = require('socket.io');
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/static"));

app.get("/",(req,res)=>{
  res.render("index");
});

var server = app.listen(8000,()=>{
  console.log("App listening on port 8000");
});

var io = socket(server);

io.sockets.on("connection",function(socket){
  //listen for new user has joined
    //store new user in session ?
    //broadcast new user joined message

  //listen for  new user has sent message
    //store new user message in session.user.messages.push(message) ?
    //broadcast user + message

  //listen for user has left
     //delete user from session?
     //broadcast user has left
});
