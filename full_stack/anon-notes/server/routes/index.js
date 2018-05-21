const noteRouter = require('./notes.routes');
const router = require('express').Router();

module.exports = router.use("/notes",noteRouter);
