const router  = require('express').Router();
const PlayerController  = require('../controllers/players');

const players_router = router
  .get("/",PlayerController.get_players)
  .post("/",PlayerController.add_player)

module.exports = router.use("/players",players_router);
