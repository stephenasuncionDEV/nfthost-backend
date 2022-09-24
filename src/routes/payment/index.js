const router = require('express').Router();
const controller = require('./controller');
const { 
    RequestSubscriptionValidator,
    RequestPaymentValidator,
    AddPaymentValidator, 
    GetPaymentsValidator 
} = require('./validators.js');
const { authenticateToken } = require('#middlewares/jwt.js');

router.post('/requestSubscription', authenticateToken, RequestSubscriptionValidator, controller.requestSubscription);
router.post('/request', authenticateToken, RequestPaymentValidator, controller.requestPayment);
router.post('/add', authenticateToken, AddPaymentValidator, controller.addPayment);
router.get('/get', authenticateToken, GetPaymentsValidator, controller.getPayments);

module.exports = router;