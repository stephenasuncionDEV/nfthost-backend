const { check } = require("express-validator");

exports.AddReferralValidator = [
  check("name", "name is empty").notEmpty(),

  check("service", "service is empty").notEmpty(),
];

exports.GetReferralValidator = [
  check("name", "name is empty").notEmpty(),

  check("service", "service is empty").notEmpty(),
];
