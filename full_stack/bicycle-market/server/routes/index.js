const router = require('express').Router();
const UserRoutes = require('./users');
const BicycleRoutes = require('./bicycle');



module.exports = router
                        .use("/users",UserRoutes)
                        .use("/bicycles",BicycleRoutes);
