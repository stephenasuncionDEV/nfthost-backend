const router = require("express").Router();
const core = require("./core");
const payment = require("./payment");
const member = require("./member");
const website = require("./website");

router.use("/core", core);
router.use("/payment", payment);
router.use("/member", member);
router.use("/website", website);

module.exports = router;
