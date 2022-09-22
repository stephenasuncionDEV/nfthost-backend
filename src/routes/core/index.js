const router = require('express').Router();
const { authenticateToken } = require('#middlewares/jwt.js');
const {
    getFeaturedWebsites,
    addReferral
} = require('./controller');
const { 
    AddReferralValidator
} = require('#middlewares/validators.js');

router.get('/getFeaturedWebsites', authenticateToken, getFeaturedWebsites);
router.post('/addReferral', authenticateToken, AddReferralValidator, addReferral);

module.exports = router;