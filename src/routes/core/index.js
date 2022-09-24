const router = require('express').Router();
const {
    getFeaturedWebsites,
    addReferral
} = require('./controller');
const { 
    AddReferralValidator
} = require('./validators');
const { authenticateToken } = require('#middlewares/jwt.js');

router.get('/getFeaturedWebsites', authenticateToken, getFeaturedWebsites);
router.post('/addReferral', authenticateToken, AddReferralValidator, addReferral);

module.exports = router;