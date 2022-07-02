const { validationResult } = require('express-validator');
const { Website } = require('#models/Websites.js');
const { Core } = require('#models/Core.js');

const ObjectId = require('mongoose').Types.ObjectId;

exports.getFeaturedWebsites = async (req, res, next) => {
    try {
        const errors = validationResult(req).errors;
        if (errors.length > 0) throw new Error(errors[0].msg);

        const coreRes = await Core.findOne({ key: 'core' });

        const websiteIdArray = coreRes.featuredWebsites.map((websiteId) => {
            return ObjectId(websiteId);
        });

        const websiteRes = await Website.find({
            _id: {
                $in: websiteIdArray
            }
        })

        res.status(200).json(websiteRes);

    } catch (err) {
        next(err);
    }
}