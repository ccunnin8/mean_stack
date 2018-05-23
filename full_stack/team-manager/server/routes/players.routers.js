const router = require("express").Router();
const controller = require("../controllers/main.js");

router
    .get("/",controller.index)
    .post("/",controller.add_player)
    .delete("/:id",controller.delete_player)
    .put("/:id",controller.update_player);

module.exports = router;
