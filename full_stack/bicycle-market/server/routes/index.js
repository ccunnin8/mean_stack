const router = require('express').Router();
const UserRoutes = require('./users');
const BicycleRoutes = require('./bicycle');

router.use("/users",UserRoutes);

router.use("/bicycles",BicycleRoutes);

module.exports = router;
