const { validationResult } = require('express-validator');
const { Website } = require('#models/Websites.js');
const { Core } = require('#models/Core.js');

exports.getFeaturedWebsites = async (req, res, next) => {
    try {
        const errors = validationResult(req).errors;
        if (errors.length > 0) throw new Error(errors[0].msg);

        // const coreRes = await Core.f

        // const result = await Website.aggregate([{
        //     $sample: {
        //         size: 5
        //     }
        // }]);

        console.log('test')

        res.status(200).json({});

    } catch (err) {
        next(err);
    }
}