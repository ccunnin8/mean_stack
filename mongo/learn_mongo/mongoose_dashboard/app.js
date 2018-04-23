var express = require('express');
var path = require('path');
var app = express();
var port = 8000 || PORT;
var { Bear } = require("./models.js");
var bodyParser = require('body-parser');


app.use("static",express.static(path.join(__dirname,"/static")));
app.use("views",express.static(path.join(__dirname,"/static")));
app.use(bodyParser({urlencoded: true}));

app.set("view engine","ejs");

app.get("/",(req,res)=>{
 Bear.find({},(err,bears)=>{
    if (err) {
      console.log("ERROR");
    } else {
      res.render("index",{bears});
    }
  });
});

app.get("/bears/new",(req,res)=>{
  console.log("new_bear");
  res.render("new");
});


app.get("/bears/:id",(req,res)=>{
  Bear.findOne({_id: req.params.id },(err,bear)=>{
    if (!err && bear) {
      res.render("show", { bear });
    } else {
      res.redirect("/");
    }
  });
});

app.post("/bears",(req,res)=>{
  Bear.create({
    name: req.body.name,
    age: parseInt(req.body.age),
    email: req.body.email
  },(err)=>{
    if (err) {
      console.log("an error occured");
    } else {
      res.redirect("/");
    }
  });
});

app.get("/bears/edit/:id",(req,res)=>{
  Bear.findOne({_id: req.params.id},(err,bear)=>{
    res.render("edit", { bear });
  });
});

app.post("/bears/:id",(req,res)=>{
  Bear.update({_id: req.params.id}, {
    $set:
            { name: req.body.name,
            email: req.body.email,
             age: req.body.age },
  },(err)=>{
    if (err) {
      console.log("Error");
    } else {
      res.redirect("/");
    }
  })
});

app.post("/bears/destroy/:id",(req,res)=>{
  console.log("deleting bear",req.params.id);
  Bear.deleteOne({_id: req.params.id},(err)=>{
    if (err) {
      console.log("ERROR");
    } else {
      res.redirect("/");
    }
  })
});

app.listen(port,()=>{
  console.log("listening on port ",port);
})
