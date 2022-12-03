const {
  generateAccessToken,
  generateRefreshToken,
} = require("#middlewares/jwt.js");
const { validationResult } = require("express-validator");
const { Member } = require("#models/Members.js");
const { Payment } = require("#models/Payments.js");
const { Website } = require("#models/Websites.js");
const { Token } = require("#models/Tokens.js");
const jwt = require("jsonwebtoken");

exports.walletLogin = async (req, res, next) => {
  try {
    const errors = validationResult(req).array();
    if (errors.length > 0)
      throw new Error(errors.map((err) => err.msg).join(", "));

    const { address, wallet } = req.body;

    const userCount = await Member.count({ address });

    let newMember = {
      address,
      wallet,
    };

    if (!userCount) {
      const member = new Member(newMember);
      await member.save();
    }

    const memberData = { address, wallet };
    const accessToken = generateAccessToken(memberData);
    const refreshToken = generateRefreshToken(memberData);

    const tokenCount = await Token.findOne({ address });

    const newToken = new Token({
      address,
      refreshToken,
    });

    if (!tokenCount) await newToken.save();
    else
      await Token.updateOne(
        { address },
        {
          $set: {
            refreshToken,
          },
        },
      );

    res.status(200).json({ accessToken, refreshToken });
  } catch (err) {
    next(err);
  }
};

exports.getMemberByAddress = async (req, res, next) => {
  try {
    const errors = validationResult(req).array();
    if (errors.length > 0)
      throw new Error(errors.map((err) => err.msg).join(", "));

    const { address } = req.query;

    const member = await Member.findOne({ address });

    res.status(200).json(member);
  } catch (err) {
    next(err);
  }
};

exports.addUnit = async (req, res, next) => {
  try {
    const errors = validationResult(req).array();
    if (errors.length > 0)
      throw new Error(errors.map((err) => err.msg).join(", "));

    const { address, service } = req.body;

    const result = await Member.findOneAndUpdate(
      { address },
      {
        $inc: {
          [`services.${service}.units`]: 1,
        },
      },
      {
        new: true,
      },
    );

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

exports.deductUnit = async (req, res, next) => {
  try {
    const errors = validationResult(req).array();
    if (errors.length > 0)
      throw new Error(errors.map((err) => err.msg).join(", "));

    const { address, service } = req.body;

    const result = await Member.findOneAndUpdate(
      { address },
      {
        $inc: {
          [`services.${service}.units`]: -1,
        },
      },
      {
        new: true,
      },
    );

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

exports.updateEmail = async (req, res, next) => {
  try {
    const errors = validationResult(req).array();
    if (errors.length > 0)
      throw new Error(errors.map((err) => err.msg).join(", "));

    const { memberId, email } = req.body;

    const result = await Member.findOneAndUpdate(
      { _id: memberId },
      {
        $set: {
          email,
        },
      },
      {
        new: true,
      },
    );

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

exports.logout = async (req, res, next) => {
  try {
    const errors = validationResult(req).array();
    if (errors.length > 0)
      throw new Error(errors.map((err) => err.msg).join(", "));

    const { refreshToken } = req.body;

    const result = await Token.deleteOne({ refreshToken });

    res.status(204).json(result);
  } catch (err) {
    next(err);
  }
};

exports.renewToken = async (req, res, next) => {
  try {
    const errors = validationResult(req).array();
    if (errors.length > 0)
      throw new Error(errors.map((err) => err.msg).join(", "));

    const { refreshToken } = req.body;

    const tokenCount = await Token.count({ refreshToken });

    if (!tokenCount)
      return res.status(403).json({ message: "Cannot fetch refresh token" });

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, data) => {
      if (err)
        return res.status(403).json({ message: "Invalid refresh token" });

      const accessToken = generateAccessToken({
        address: data.address,
        wallet: data.wallet,
      });

      res.json({ accessToken: accessToken });
    });
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const errors = validationResult(req).array();
    if (errors.length > 0)
      throw new Error(errors.map((err) => err.msg).join(", "));

    const { memberId } = req.body;

    await Payment.deleteMany({ memberId });
    await Website.deleteMany({ memberId });
    const result = await Member.deleteOne({ _id: memberId });

    if (!result) throw new Error("Cannot delete user at the moment");

    res.status(204).json({ message: "Successfully deleted user" });
  } catch (err) {
    next(err);
  }
};
