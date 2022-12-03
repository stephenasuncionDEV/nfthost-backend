const router = require("express").Router();
const {
  getFeaturedWebsites,
  addReferral,
  getReferral,
} = require("./controller");
const { AddReferralValidator, GetReferralValidator } = require("./validators");
const { authenticateToken } = require("#middlewares/jwt.js");

router.get("/getFeaturedWebsites", authenticateToken, getFeaturedWebsites);
router.post(
  "/addReferral",
  authenticateToken,
  AddReferralValidator,
  addReferral,
);
router.get(
  "/getReferral",
  authenticateToken,
  GetReferralValidator,
  getReferral,
);

module.exports = router;
