const router = require('express').Router();
const controller = require('./controller');
const { 
    WalletLoginValidator, 
    GetMemberByAddressValidator,
    AddUnitValidator,
    DeductUnitValidator,
    UpdateEmailValidator,
    LogoutValidator,
    RenewTokenValidator
} = require('./validators');
const { authenticateToken } = require('#middlewares/jwt.js');

router.post('/walletLogin', WalletLoginValidator, controller.walletLogin);
router.get('/getByAddress', authenticateToken, GetMemberByAddressValidator, controller.getMemberByAddress);
router.patch('/addUnit', authenticateToken, AddUnitValidator, controller.addUnit);
router.patch('/deductUnit', authenticateToken, DeductUnitValidator, controller.deductUnit);
router.patch('/updateEmail', authenticateToken, UpdateEmailValidator, controller.updateEmail);
router.delete('/logout', LogoutValidator, controller.logout);
router.post('/renewToken', RenewTokenValidator, controller.renewToken);

module.exports = router;