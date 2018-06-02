const Bicycle = require('../models/bicycle');

module.exports = {
  index(req,res){
    Bicycle.find({}).then( data => res.json(data)).catch(err => console.log(err));
  }
  add(req,res){
    Bicycle.create(req.POST).then(data => res.json(data)).catch(err => console.log(err));
  }
}
