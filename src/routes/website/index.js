const router = require('express').Router();
const controller = require('./controller');
const { authenticateToken, authenticateThirdPartyToken } = require('#middlewares/jwt.js');
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
    UpdateExternalLinksValidator,
    UpdateDomainValidator,
    VerifyDomainValidator
} = require('./validators');

router.post('/create', authenticateThirdPartyToken, CreateWebsiteValidator, controller.createWebsite);
router.delete('/delete', authenticateToken, DeleteWebsiteValidator, controller.deleteWebsite);
router.get('/getWebsiteByRoute', authenticateThirdPartyToken, GetWebsiteByRouteValidator, controller.getWebsiteByRoute);
router.get('/getWebsiteByDomain', authenticateThirdPartyToken, GetWebsiteByDomainValidator, controller.getWebsiteByDomain);
router.get('/getWebsites', authenticateToken, GetWebsitesValidator, controller.getWebsites);
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
router.patch('/updateExternalLinks', authenticateToken, UpdateExternalLinksValidator, controller.updateExternalLinks);
router.patch('/updateDomain', authenticateToken, UpdateDomainValidator, controller.updateDomain);
router.patch('/verifyDomain', authenticateToken, VerifyDomainValidator, controller.verifyDomain);

module.exports = router;