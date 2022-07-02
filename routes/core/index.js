const router = require('express').Router();
const controller = require('./controller');
const { authenticateToken } = require('#middlewares/jwt.js');

router.get('/getFeaturedWebsites', authenticateToken, controller.getFeaturedWebsites);

module.exports = router;