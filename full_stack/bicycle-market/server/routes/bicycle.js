const router = require('express').Router();
const BicycleController = require('../controllers/bicycle');
const multer = require('multer');
const upload = multer({ dest: '../../uploads' });


router
  .get("/",BicycleController.index)
  .post("/", upload.single('bicycle'), BicycleController.add)
  .get("/user",BicycleController.user_bikes);


module.exports = router;
