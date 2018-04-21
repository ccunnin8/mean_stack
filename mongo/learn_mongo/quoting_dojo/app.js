var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var { Quote } = require('./models.js');

app.use(express.static(path.join(__dirname,"/static")));
app.use(bodyParser({urlencoded: true}));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
  res.render("index");
});

app.post("/new_quote",(req,res)=>{
  //parse form, create new quote model and save to db redirect to quotes page
  var new_quote = new Quote();
  new_quote.name = req.body.name;
  new_quote.quote = req.body.quote;
  new_quote.save((err)=>{
    if (err) {
      console.log("ERROR");
    } else {
      res.redirect("/quotes");
    }
  });
});

app.get("/quotes",(req,res)=>{
  //get all the quotes from the database and pass to res.render
  var quotes = Quote.find({},(err,quotes)=>{
    res.render("quotes",{ quotes });
  })
});

app.listen(8000,()=>{
  console.log("Listening on port 8000");
});
