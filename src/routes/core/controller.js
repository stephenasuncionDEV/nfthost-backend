const { validationResult } = require("express-validator");
const { Website } = require("#models/Websites.js");
const { Core } = require("#models/Core.js");

const ObjectId = require("mongoose").Types.ObjectId;

exports.getFeaturedWebsites = async (req, res, next) => {
  try {
    const coreRes = await Core.findOne({ key: "core" });

    const websiteIdArray = coreRes.featuredWebsites.map((websiteId) => {
      return ObjectId(websiteId);
    });

    const websiteRes = await Website.find({
      _id: {
        $in: websiteIdArray,
      },
    });

    res.status(200).json(websiteRes);
  } catch (err) {
    next(err);
  }
};

exports.addReferral = async (req, res, next) => {
  try {
    const errors = validationResult(req).errors;
    if (errors.length > 0) throw new Error(errors[0].msg);

    const { name, service } = req.body;

    const nameTemp = name.trim().toLowerCase();

    const core = await Core.findOne({ key: "core" });

    let newUser = core.referrals.find((user) => user.name === nameTemp);
    if (!newUser) {
      newUser = {
        name: nameTemp,
        value: 0,
        service,
      };
    }

    newUser.value += 1;

    let coreRes = await Core.findOneAndUpdate(
      {
        key: "core",
        "referrals.name": newUser.name,
        "referrals.service": newUser.service,
      },
      {
        $set: {
          "referrals.$.value": newUser.value,
        },
      },
    );

    if (!coreRes) {
      coreRes = await Core.findOneAndUpdate(
        {
          key: "core",
        },
        {
          $push: {
            referrals: newUser,
          },
        },
      );
    }

    res.status(200).json({ message: "Successfully added referral" });
  } catch (err) {
    next(err);
  }
};

exports.getReferral = async (req, res, next) => {
  try {
    const errors = validationResult(req).errors;
    if (errors.length > 0) throw new Error(errors[0].msg);

    const { name, service } = req.query;

    const result = await Core.findOne({ key: "core" });
    const referral = result.referrals.find(
      (referral) => referral.service === service && referral.name === name,
    );

    res.status(200).json(referral);
  } catch (err) {
    next(err);
  }
};
