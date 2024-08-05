const router = require("express").Router();

const userController = require("../controllers/userController");

router
  .route("/user/create")
  .post((req, res) => userController.create(req, res));

router.route("/user").get((req, res) => userController.getAll(req, res));

module.exports = router;
