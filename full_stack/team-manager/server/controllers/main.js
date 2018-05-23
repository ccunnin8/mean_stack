const { Player } = require("../models/players");

module.exports = {
  index(req,res){
    Player.find({})
    .then(data => res.json(data))
    .catch(error => console.log(error))
  },
  add_player(req,res){
    Player.create(req.body)
      .then(data => res.json(data))
      .catch(error => console.log(error));
  },
  delete_player(req,res){
    Player.findByIdAndDelete(req.params.id)
      .then(data => res.json(data))
      .catch(error => console.log(error));
  },
  update_player(req,res){
    const { game, status } = req.body;
    const { id } = req.params;
    Player.findById(id, (err,doc)=>{
      let games = doc.games;
      games[game] = status;
      doc.games = games;
      doc.save();
    }).then((data)=> res.json(data))
      .catch(err => console.log(err.message));
  }
}
