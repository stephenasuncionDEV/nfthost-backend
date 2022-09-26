const { check } = require('express-validator');

exports.AddReferralValidator = [

    check('name', 'name is empty')
    .notEmpty()

]