const { check } = require("express-validator");

exports.RequestSubscriptionValidator = [
  check("service", "service is empty").notEmpty(),

  check("billingDetails", "billingDetails is empty").notEmpty(),

  check("customerId", "customerId is empty").notEmpty(),

  check("metadata", "metadata is empty").notEmpty(),
];

exports.RequestPaymentValidator = [
  check("billingDetails", "billingDetails is empty").notEmpty(),

  check("amount", "amount is empty").notEmpty(),

  check("customerId", "customerId is empty").notEmpty(),

  check("metadata", "metadata is empty").notEmpty(),
];

exports.AddPaymentValidator = [
  check("memberId", "memberId is empty").notEmpty(),

  check("hash", "hash is empty").notEmpty(),

  check("service", "service is empty").notEmpty(),

  check("price", "price is empty").notEmpty(),
];

exports.GetPaymentsValidator = [
  check("memberId", "memberId is empty").notEmpty(),

  check("pageNumber", "pageNumber is empty").notEmpty(),
];

exports.CancelSubscriptionValidator = [
  check("subscriptionId", "subscriptionId is empty").notEmpty(),
];

exports.GetSubscriptionsValidator = [
  check("customerId", "customerId is empty").notEmpty(),
];

exports.GetSubscriptionValidator = [
  check("subscriptionId", "subscriptionId is empty").notEmpty(),
];
