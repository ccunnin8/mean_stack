var express = require('express');
var socket = require('socket.io');
var app = express();

app.set("view engine","ejs");

app.get("/",(req,res)=>{
  res.render("index");
})

var server = app.listen(8000,()=>{
  console.log("Listening on port 8000");
})

var io = socket.listen(server);

io.sockets.on("connection",(socket)=>{
  console.log("Client/socket is connected");
  console.log("Client/socket id is: ", socket.id);

  socket.on("button_clicked",(data)=>{
    console.log("Someone clicked a button! Reason: " + data.reason);
    socket.emit("server_response", { response: "sockets are the best!"});
  });
});
