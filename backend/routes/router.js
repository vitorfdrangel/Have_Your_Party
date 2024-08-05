const router = require("express").Router();

// Services router
const servicesRouter = require("./services");

router.use("/", servicesRouter);

// Party routes
const partyRouter = require("./parties");

router.use("/", partyRouter);

// User router
const userRouter = require("./users");

router.use("/", userRouter);

module.exports = router;
