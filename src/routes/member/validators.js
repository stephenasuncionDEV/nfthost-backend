const { check } = require("express-validator");

exports.WalletLoginValidator = [
  check("address", "address is empty").notEmpty(),

  check("wallet", "wallet is empty").notEmpty(),
];

exports.GetMemberByAddressValidator = [
  check("address", "address is empty").notEmpty(),
];

exports.AddUnitValidator = [
  check("address", "address is empty").notEmpty(),

  check("service", "service is empty").notEmpty(),
];

exports.DeductUnitValidator = [
  check("address", "address is empty").notEmpty(),

  check("service", "service is empty").notEmpty(),
];

exports.UpdateEmailValidator = [
  check("memberId", "memberId is empty").notEmpty(),

  check("email", "email is empty").notEmpty(),

  check("email", "email is invalid").isEmail(),
];

exports.LogoutValidator = [
  check("refreshToken", "refreshToken is empty").notEmpty(),
];

exports.RenewTokenValidator = [
  check("refreshToken", "refreshToken is empty").notEmpty(),
];

exports.DeleteValidator = [check("memberId", "memberId is empty").notEmpty()];
