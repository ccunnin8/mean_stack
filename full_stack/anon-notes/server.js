const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 8080 || process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/",express.static(path.join(__dirname + "/dist/anon-notes")));

require('./server/config/database');
app.use("/api",require('./server/routes'));

app.listen(port, () => console.log("listening on port " + port));
