const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./server/config/config.js")
app.listen(port, () => console.log("listening on port", port));
