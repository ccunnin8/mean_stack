const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api",require('./server/routes/index.js'));
app.use("/",express.static(path.join(__dirname,"dist/github-battle")));

require('./server/config/database.js');
app.listen(PORT,()=> console.log("listening on port " + PORT));
