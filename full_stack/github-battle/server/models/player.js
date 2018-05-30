const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  "username": { type: String, required: true, unique: true}
}, { timestamps: true });

const Player = mongoose.model("Player",PlayerSchema);

module.exports = {
  Player
}
