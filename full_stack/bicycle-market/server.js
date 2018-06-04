const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/",express.static(path.join(__dirname,"/dist/bicycle-market")));
app.use('/api',require('./server/routes/index.js'));


require("./server/config/config.js")
app.listen(port, () => console.log("listening on port", port));
