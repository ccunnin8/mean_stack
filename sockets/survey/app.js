var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
var socket = require('socket.io');
app.set("view engine","ejs");
app.set("static",__dirname + "/static");
app.set("views",__dirname + "/views");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
  res.render("index");
});

app.post("/result",(req,res)=>{
  var { name, location, lang, comment } = req.body;
  res.render("results",{ name, location, lang, comment });
})

var server = app.listen(8080,()=>{
  console.log("listening on 8080");
})
var io = socket(server);

io.sockets.on("connection",(socket)=>{
  socket.on("posting_form",(data)=>{
    socket.emit("return_form",{...data, num: Math.floor(Math.random() *1000) + 1});
  })
});
