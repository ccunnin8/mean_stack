var express = require('express');
var socket = require('socket.io');
var app = express();
var counter = 0;

app.set("view engine","ejs");
app.use(express.static(__dirname + "/static"));
app.get("/",(req,res)=>{
  res.render("index", {counter });
});

var server = app.listen(8080,()=>{
  console.log("listening on 8080")
})

var io = socket(server)

io.sockets.on("connection",(socket)=>{
  socket.on("increase_counter",()=>{
    counter++;
    io.emit("update_counter", {counter });
  });

  socket.on("reset_counter",()=>{
    counter = 0;
    io.emit("update_counter", {counter });
  })
});
