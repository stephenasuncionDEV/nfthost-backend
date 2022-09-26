const router = require('express').Router();
const controller = require('./controller');
const {
    CreateWebsiteValidator,
    DeleteWebsiteValidator,
    GetWebsiteByRouteValidator,
    GetWebsiteByDomainValidator,
    GetWebsitesValidator,
    UpdateDataValidator,
    UpdateIsPremiumValidator,
    UpdateIsExpiredValidator,
    UpdateIsPublishedValidator,
    UpdatePremiumStartDateValidator,
    UpdateRevealDateValidator,
    UpdateRouteValidator,
    UpdateTitleValidator,
    UpdateDescriptionValidator,
    UpdateLogoValidator,
    UpdateScriptValidator,
    UpdateEmbedValidator,
    AddAddonValidator,
    DeleteAddonValidator,
    UpdateTemplateValidator,
    UpdateRobotValidator,
    UpdateFaviconValidator,
    UpdateLanguageValidator,
    UpdateExternalLinkValidator,
    UpdateDomainValidator,
    VerifyDomainValidator,
    UpdateSubscriptionValidator
} = require('./validators');
const { 
    authenticateToken, 
    authenticateThirdPartyToken 
} = require('#middlewares/jwt.js');

router.post('/create', authenticateThirdPartyToken, CreateWebsiteValidator, controller.createWebsite);
router.delete('/delete', authenticateToken, DeleteWebsiteValidator, controller.deleteWebsite);
router.get('/getWebsiteByRoute', authenticateThirdPartyToken, GetWebsiteByRouteValidator, controller.getWebsiteByRoute);
router.get('/getWebsiteByDomain', authenticateThirdPartyToken, GetWebsiteByDomainValidator, controller.getWebsiteByDomain);
router.get('/getWebsites', authenticateToken, GetWebsitesValidator, controller.getWebsites);
router.get('/getMappedSubdomains', authenticateThirdPartyToken, controller.getMappedSubdomains);
router.patch('/updateData', authenticateToken, UpdateDataValidator, controller.updateData);
router.patch('/updateIsPremium', authenticateToken, UpdateIsPremiumValidator, controller.updateIsPremium);
router.patch('/updateIsExpired', authenticateToken, UpdateIsExpiredValidator, controller.updateIsExpired);
router.patch('/updateIsPublished', authenticateToken, UpdateIsPublishedValidator, controller.updateIsPublished);
router.patch('/updatePremiumStartDate', authenticateToken, UpdatePremiumStartDateValidator, controller.updatePremiumStartDate);
router.patch('/updateRevealDate', authenticateToken, UpdateRevealDateValidator, controller.updateRevealDate);
router.patch('/updateRoute', authenticateToken, UpdateRouteValidator, controller.updateRoute);
router.patch('/updateTitle', authenticateToken, UpdateTitleValidator, controller.updateTitle);
router.patch('/updateDescription', authenticateToken, UpdateDescriptionValidator, controller.updateDescription);
router.patch('/updateLogo', authenticateToken, UpdateLogoValidator, controller.updateLogo);
router.patch('/updateScript', authenticateToken, UpdateScriptValidator, controller.updateScript);
router.patch('/updateEmbed', authenticateToken, UpdateEmbedValidator, controller.updateEmbed);
router.patch('/addAddon', authenticateToken, AddAddonValidator, controller.addAddon);
router.patch('/deleteAddon', authenticateToken, DeleteAddonValidator, controller.deleteAddon);
router.patch('/updateTemplate', authenticateToken, UpdateTemplateValidator, controller.updateTemplate);
router.patch('/updateRobot', authenticateToken, UpdateRobotValidator, controller.updateRobot);
router.patch('/updateFavicon', authenticateToken, UpdateFaviconValidator, controller.updateFavicon);
router.patch('/updateLanguage', authenticateToken, UpdateLanguageValidator, controller.updateLanguage);
router.patch('/updateExternalLink', authenticateToken, UpdateExternalLinkValidator, controller.updateExternalLink);
router.patch('/updateDomain', authenticateToken, UpdateDomainValidator, controller.updateDomain);
router.patch('/verifyDomain', authenticateToken, VerifyDomainValidator, controller.verifyDomain);
router.patch('/updateSubscription', authenticateToken, UpdateSubscriptionValidator, controller.updateSubscription);

module.exports = router;