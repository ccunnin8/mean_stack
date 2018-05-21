const notesController = require('../controllers/notes');
const router = require('express').Router();

router
  .get("/",notesController.index)
  .post("/",notesController.create);

module.exports = router;
