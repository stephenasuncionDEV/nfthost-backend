const router = require('express').Router();
const controller = require('./controller');
const { authenticateToken, authenticateThirdPartyToken } = require('#middlewares/jwt.js');
const { 
    CreateWebsiteValidator, 
    GetWebsiteValidator,
    GetWebsitesValidator,
    UpdateWebsiteValidator,
    DeleteWebsiteValidator,
    UpdateExpirationValidator,
    UpdateStyleValidator,
    UpdateRevealDateValidator,
    UpdateCustomValidator,
    UpdateAnalyticsValidator,
    UpdateComponentsValidator,
    DeleteAddonValidator,
    UpdateSubscriptionValidator,
    RenewSubscriptionValidator,
    VerifyDomainValidator,
    GetWebsiteByDomainValidator,
    UpdateExternalLinkValidator,
    DeleteTemplateValidator
} = require('#middlewares/validators.js');

router.post('/create', authenticateThirdPartyToken, CreateWebsiteValidator, controller.createWebsite);
router.get('/get', authenticateThirdPartyToken, GetWebsiteValidator, controller.getWebsite);
router.get('/getByDomain', authenticateThirdPartyToken, GetWebsiteByDomainValidator, controller.getWebsiteByDomain);
router.get('/getMany', authenticateToken, GetWebsitesValidator, controller.getWebsites);
router.put('/update', authenticateToken, UpdateWebsiteValidator, controller.updateWebsite);
router.delete('/delete', authenticateToken, DeleteWebsiteValidator, controller.deleteWebsite);
router.patch('/updateExpiration', authenticateThirdPartyToken, UpdateExpirationValidator, controller.updateExpiration);
router.patch('/updateStyle', authenticateToken, UpdateStyleValidator, controller.updateStyle);
router.patch('/updateRevealDate', authenticateToken, UpdateRevealDateValidator, controller.updateRevealDate);
router.patch('/updateCustom', authenticateToken, UpdateCustomValidator, controller.updateCustom);
router.patch('/updateAnalytics', authenticateThirdPartyToken, UpdateAnalyticsValidator, controller.updateAnalytics);
router.patch('/updateComponents', authenticateToken, UpdateComponentsValidator, controller.updateComponents);
router.patch('/updateSubscription', authenticateToken, UpdateSubscriptionValidator, controller.updateSubscription);
router.patch('/renewSubscription', authenticateToken, RenewSubscriptionValidator, controller.renewSubscription);
router.patch('/updateTemplate', authenticateToken, DeleteTemplateValidator, controller.updateTemplate);
router.patch('/updateAddon', authenticateToken, DeleteAddonValidator, controller.updateAddon);
router.delete('/deleteTemplate', authenticateToken, DeleteTemplateValidator, controller.deleteTemplate);
router.delete('/deleteAddon', authenticateToken, DeleteAddonValidator, controller.deleteAddon);
router.post('/verifyDomain', authenticateToken, VerifyDomainValidator, controller.verifyDomain);
router.patch('/updateExternalLink', authenticateToken, UpdateExternalLinkValidator, controller.updateExternalLink);

module.exports = router;