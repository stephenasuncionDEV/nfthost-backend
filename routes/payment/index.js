const router = require('express').Router();
const controller = require('./controller');
const { authenticateToken } = require('#middlewares/jwt.js');
const { PaymentRequestValidator, AddPaymentValidator, GetPaymentsValidator } = require('#middlewares/validators.js');

router.post('/request', authenticateToken, PaymentRequestValidator, controller.requestPayment);
router.post('/add', authenticateToken, AddPaymentValidator, controller.addPayment);
router.get('/get', authenticateToken, GetPaymentsValidator, controller.getPayments);

module.exports = router;