var express = require('express');
var session = require('express-session');
var socket = require('socket.io');
var app = express();
var chatlog = {
  "users": {},
  "messages": []
}

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/static"));
app.use(session({secret: "elSecreto"}));

app.get("/",(req,res)=>{
  res.render("index", {"messages": chatlog["messages"] });
});

var server = app.listen(8000,()=>{
  console.log("App listening on port 8000");
});

var io = socket(server);

io.sockets.on("connection",function(socket){
  //listen for new user has joined
    //store new user in session ?
    //broadcast new user joined message
  socket.on("new_user",(data)=>{
    chatlog.messages.push(`${data.name} has joined the chat`);
    chatlog.users[socket.id] = data.name;
    socket.broadcast.emit("new_user_server",(data));
  });

  //listen for  new user has sent message
    //store new user message in session.user.messages.push(message) ?
    //broadcast user + message
  socket.on("new_message",(data)=>{
    chatlog.messages.push(`${data.name}: ${data.message}`);
    socket.broadcast.emit("new_message_server", data);
  });


  //listen for user has left
     //delete user from session?
     //broadcast user has left
  socket.on("disconnect",()=>{
    socket.broadcast.emit("user_left",{name: chatlog.users[socket.id]});
    delete chatlog.users[socket.id];
  });
});
