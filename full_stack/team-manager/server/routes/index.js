const router = require("express").Router();
const playersRouter = require("./players.routers");

module.exports = router.use("/players",playersRouter);
