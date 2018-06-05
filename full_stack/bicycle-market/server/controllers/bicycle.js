const { Bicycle } = require('../models/bicycle');
const User  = require('../models/user');

module.exports = {
  index(req,res){
    Bicycle.find({}).then( data => res.json(data)).catch(err => console.log(err));
  },
  add(req,res){
    Bicycle.create(req.body).then((bicycle) => {
      console.log(bicycle);
      bicycle.image = req.file;
      bicycle.save();
      User.findOneAndUpdate({_id: req.session.user_id }, { $push: { bicycles: bicycle }})
          .then(data => res.json({ "success": "bicycle added"}))
          .catch(err => res.json({ "error": "there was an error"}));
    }).catch(err => console.log(err));
  },
  user_bikes(req,res){
    User.findById(req.session.user_id)
        .then(data => res.json({"bicycles": data.bicycles }))
        .catch(err => res.json({"error": "an error occured!"}));
  }
}
