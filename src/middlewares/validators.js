const { check } = require("express-validator");

exports.WalletLoginValidator = [

    // Address Validator
    check('address', 'address is empty')
    .notEmpty(),

    // Wallet Validator
    check('wallet', 'wallet is empty')
    .notEmpty(),
    
];

exports.GetMemberByAddressValidator = [

    // Address Validator
    check('address', 'address is empty')
    .notEmpty(),
    
];

exports.AddCountValidator = [

    // Address Validator
    check('address', 'address is empty')
    .notEmpty(),

    // Service Validator
    check('service', 'service is empty')
    .notEmpty(),
    
    // Value Validator
    check('value', 'value is empty')
    .notEmpty(),

];

exports.AddFreeValidator = [

    // Address Validator
    check('address', 'address is empty')
    .notEmpty(),

    // Service Validator
    check('service', 'service is empty')
    .notEmpty(),
    
    // Value Validator
    check('value', 'value is empty')
    .notEmpty(),

];

exports.DeductFreeValidator = [

    // Address Validator
    check('address', 'address is empty')
    .notEmpty(),

    // Service Validator
    check('service', 'service is empty')
    .notEmpty(),
    
    // Value Validator
    check('value', 'value is empty')
    .notEmpty(),

];

exports.DeductCountValidator = [

    // Address Validator
    check('address', 'address is empty')
    .notEmpty(),

    // Service Validator
    check('service', 'service is empty')
    .notEmpty(),
    
    // Value Validator
    check('value', 'value is empty')
    .notEmpty(),

]

exports.UpdateEmailValidator = [

    // websiteId Validator
    check('memberId', 'memberId is empty')
    .notEmpty(),

    // email Validator
    check('email', 'email is empty')
    .notEmpty(),

    check('email', 'email is invalid')
    .isEmail(),
]

exports.LogoutValidator = [

    // refreshToken Validator
    check('refreshToken', 'refreshToken is empty')
    .notEmpty(),

]

exports.RenewTokenValidator = [

    // refreshToken Validator
    check('refreshToken', 'refreshToken is empty')
    .notEmpty(),

]

exports.AddReferralValidator = [

    check('name', 'name is empty')
    .notEmpty()

]