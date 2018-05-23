const { Schema  } = require("mongoose");
const mongoose = require("mongoose");

const GameSchema = new Schema({
  game1: { type: Number, default: 3},
  game2: { type: Number, default: 3},
  game3: { type: Number, default: 3}
});

const PlayerSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true},
    games: GameSchema
});



const Player = mongoose.model("Player",PlayerSchema);

module.exports = {
  Player
}
