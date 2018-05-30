const { Player } = require('../models/player');

module.exports = {
  add_player(req,res){
    let player  = req.body.username;
    Player.find({ username: player}).then((data)=>{
      if (data.length === 0){
        Player.create({ username: player }).then(data => res.json(data)).catch(err=>console.log(err))
      } else {
        res.json({"error": "username already exists"});
      }
    }).catch(err=> console.log(err));
  },
  get_players(req,res){
    Player.find({}).then((data)=>{
      let usernames = data.map(x => x.username);
      res.json({ usernames });
    }).catch((error)=>{
      console.log("ERROR");
    });
  }
}
