var express = require('express');
var session = require('express-session');
var app = express();

app.set("view engine","ejs");
app.use(express.static(__dirname + "/static"));
app.use(session({secret:"ElSecreto"}));

//add 1
app.get("/",(req,res)=>{
  if (req.session.count){
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.render("index", { count: req.session.count });
});

//add 2
app.post("/plus_two",(req,res)=>{
  req.session.count += 1;
  res.redirect("/");
});

//reset back to 1
app.post("/reset",(req,res)=>{
  req.session.count = 0;
  res.redirect("/");
})

const port = 8080;

app.listen(port,()=>{
  console.log(`Listening on port ${port}`)
})
