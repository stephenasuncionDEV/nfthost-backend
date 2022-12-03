const { check } = require("express-validator");

exports.CreateWebsiteValidator = [
  check("route", "route is empty").notEmpty(),

  check("components.title", "components.title is empty").notEmpty(),

  check(
    "components.unrevealedImage",
    "components.unrevealedImage is empty",
  ).notEmpty(),

  check("components.description", "components.description is empty").notEmpty(),

  check("components.embed", "components.embed is empty").notEmpty(),
];

exports.DeleteWebsiteValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),
];

exports.GetWebsiteByRouteValidator = [
  check("route", "route is empty").notEmpty(),
];

exports.GetWebsiteByDomainValidator = [
  check("domain", "domain is empty").notEmpty(),
];

exports.GetWebsitesValidator = [
  check("memberId", "memberId is empty").notEmpty(),
];

exports.UpdateDataValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("data", "data is empty").notEmpty(),
];

exports.UpdateIsPremiumValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("isPremium", "isPremium is empty").notEmpty(),
];

exports.UpdateIsExpiredValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("isExpired", "isExpired is empty").notEmpty(),
];

exports.UpdateIsPublishedValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("isPublished", "isPublished is empty").notEmpty(),
];

exports.UpdatePremiumStartDateValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("premiumStartDate", "premiumStartDate is empty").notEmpty(),
];

exports.UpdateRevealDateValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("revealDate", "revealDate is empty").notEmpty(),
];

exports.UpdateRouteValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("route", "route is empty").notEmpty(),
];

exports.UpdateTitleValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("title", "title is empty").notEmpty(),
];

exports.UpdateDescriptionValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("description", "description is empty").notEmpty(),
];

exports.UpdateLogoValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("logo", "logo is empty").notEmpty(),
];

exports.UpdateScriptValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),
];

exports.UpdateEmbedValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("embed", "embed is empty").notEmpty(),
];

exports.AddAddonValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("addon", "addon is empty").notEmpty(),
];

exports.DeleteAddonValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("addon", "addon is empty").notEmpty(),
];

exports.UpdateTemplateValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("template", "template is empty").notEmpty(),
];

exports.DeleteTemplateValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("template", "template is empty").notEmpty(),
];

exports.UpdateRobotValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("robot", "robot is empty").notEmpty(),
];

exports.UpdateFaviconValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("favicon", "favicon is empty").notEmpty(),
];

exports.UpdateLanguageValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("language", "language is empty").notEmpty(),
];

exports.UpdateExternalLinkValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("social", "social is empty").notEmpty(),

  // check('link', 'link is empty')
  // .notEmpty()
];

exports.UpdateDomainValidator = [
  check("websiteId", "websiteId is empty").notEmpty(),

  check("domain", "domain is empty").notEmpty(),
];

exports.VerifyDomainValidator = [check("domain", "domain is empty").notEmpty()];

exports.UpdateSubscriptionValidator = [
  check("memberId", "memberId is empty").notEmpty(),

  check("subscriptionId", "subscriptionId is empty").notEmpty(),

  check("isPremium", "isPremium is empty").notEmpty(),

  check("isExpired", "isExpired is empty").notEmpty(),

  check("isPublished", "isPublished is empty").notEmpty(),
];
