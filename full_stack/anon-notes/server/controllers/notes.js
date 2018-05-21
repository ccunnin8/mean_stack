const Note = require('mongoose').model('Note')
const Router = require('express');

module.exports = {
  index(req,res){
    Note.find({}).then(data => res.json(data))
                  .catch(console.log);
  },
  create(req,res){
    Note.create(req.body).then(data => res.json(data))
    .catch(error => console.log(error));
  }
}
