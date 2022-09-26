const { validationResult } = require('express-validator');
const { Website } = require('#models/Websites.js');
const { Member } = require('#models/Members.js');
const { VerifyDns } = require('#middlewares/tools.js');

exports.createWebsite = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { memberId, components, meta, route } = req.body;

        const count = await Website.count({ route });

        if (count > 0) throw new Error('Subdomain already exists');

        let newWebsite = {
            route,
            components,
            meta
        }

        if (memberId) {
            newWebsite.memberId = memberId;
            const user = await Member.findOne({ _id: memberId });
            if (user.services.website.units === 1) {
                const webArr = await Website.find({ memberId });
                if (webArr.length > 0) {
                    newWebsite.isPremium = true;
                    newWebsite.subscriptionId = webArr[0].subscriptionId;
                    newWebsite.premiumStartDate = webArr[0].premiumStartDate;
                } else {
                    await Member.findOneAndUpdate({ _id: memberId }, {
                        $set: {
                            'services.website.units': 0
                        }
                    })
                }
            }
        }

        const website = new Website(newWebsite);
        const result = await website.save();

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.deleteWebsite = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId } = req.body;

        const result = await Website.deleteOne({ _id: websiteId });

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.getWebsiteByRoute = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));
        
        const { route } = req.query;

        const result = await Website.findOne({ route });

        if (!result) throw new Error('Minting website not found');

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.getWebsiteByDomain = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));
        
        const { domain } = req.query;

        let result;

        if (domain.indexOf('www.') === -1) { // If alias
            
        }
        else { // If cname
            
        }

        res.status(200).json(result);

        //const tempDomain = domain.toLowerCase();

        // const expression = { $regex: new RegExp('^' + tempDomain + '$', 'i') };

        // // Check if websiteId is a custom domain
        // count = await Website.count({ [`custom.domain`]: expression });
        // if (count > 0) {
        //     const result = await Website.findOne({ [`custom.domain`]: expression });
        //     res.status(200).json(result);
        //     return;
        // }

        // Check if websiteId is a custom alias
        // count = await Website.count({ [`custom.alias`]: expression });
        // if (count > 0) {
        //     const result = await Website.findOne({ [`custom.alias`]: expression });
        //     res.status(200).json(result);
        //     return;
        // }

    } catch (err) {
        next(err);
    }
}

exports.getWebsites = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { memberId } = req.query;

        const result = await Website.find({ memberId });

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updateData = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, data } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $set: {
                data
            }
        }, {
            new: true
        })

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updateIsPremium = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, isPremium } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $set: {
                isPremium
            }
        }, {
            new: true
        })

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updateSubscription = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, isPremium, premiumStartDate } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $set: {
                isPremium,
                premiumStartDate
            }
        }, {
            new: true
        })

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updateIsExpired = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, isExpired } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $set: {
                isExpired
            }
        }, {
            new: true
        })

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updateIsPublished = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, isPublished } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $set: {
                isPublished
            }
        }, {
            new: true
        })

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updatePremiumStartDate = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, premiumStartDate } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $set: {
                premiumStartDate
            }
        }, {
            new: true
        })

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updateRevealDate = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, revealDate } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $set: {
                revealDate
            }
        }, {
            new: true
        })

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updateRoute = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, route } = req.body;

        const count = await Website.count({ route });

        if (count > 0) throw new Error('Subdomain already exists');

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $set: {
                route
            }
        }, {
            new: true
        })

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updateTitle = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, title } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $set: {
                'components.title': title
            }
        }, {
            new: true
        })

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updateDescription = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, description } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $set: {
                'components.description': description
            }
        }, {
            new: true
        })

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updateLogo = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, logo } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $set: {
                'components.unrevealedImage': logo
            }
        }, {
            new: true
        })

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updateScript = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, script } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $set: {
                'components.script': script
            }
        }, {
            new: true
        })

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updateEmbed = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, embed } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $set: {
                'components.embed': embed
            }
        }, {
            new: true
        })

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.addAddon = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, addon } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $push: { 
                'components.addons': addon
            }
        }, {
            new: true
        });

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.deleteAddon = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, addon } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $pull: { 
                'components.addons': addon
            }
        }, {
            new: true
        });

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updateTemplate = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, template } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $set: { 
                'components.template': template
            }
        }, {
            new: true
        });

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updateRobot = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, robot } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $set: {
                'meta.robot': robot
            }
        }, {
            new: true
        })

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updateFavicon = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, favicon } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $set: {
                'meta.favicon': favicon
            }
        }, {
            new: true
        })

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updateLanguage = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, language } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $set: {
                'meta.language': language
            }
        }, {
            new: true
        })

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updateExternalLink = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, social, link } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $set: { 
                [`externalLinks.${social}`]: link
            }
        }, {
            new: true
        });

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updateDomain = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { websiteId, domain } = req.body;

        const result = await Website.findOneAndUpdate({ _id: websiteId }, {
            $set: {
                'custom.domain': domain
            }
        }, {
            new: true
        })

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.verifyDomain = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { domain } = req.body;

        const result = await VerifyDns(domain);

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}

exports.updateSubscription = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));

        const { 
            memberId, 
            subscriptionId, 
            isPremium, 
            isExpired, 
            premiumStartDate,
            premiumEndDate,
            isPublished
        } = req.body;

        let userWebsites = await Website.find({ memberId });
        const userWebsitesIdArr = userWebsites.map((web) => web._id);

        await Website.updateMany({ 
            _id: {
                $in: userWebsitesIdArr
            }
        }, {
            $set: {
                subscriptionId,
                isPremium,
                isExpired,
                isPublished,
                premiumStartDate,
                premiumEndDate: premiumEndDate
            }
        });

        if (isExpired) {
            await Member.findOneAndUpdate({ _id: memberId }, {
                $set: {
                    'services.website.units': 0
                }
            })
        }

        userWebsites = await Website.find({ memberId });

        res.status(200).json(userWebsites);

    } catch (err) {
        next(err);
    }
}

exports.getWebsitesWithSubdomain = async (req, res, next) => {
    try {
        const errors = validationResult(req).array();
        if (errors.length > 0) throw new Error(errors.map(err => err.msg).join(', '));
        
        const result = await Website.find({ route: {
            $exists: true,
            $ne: ''
        } });

        res.status(200).json(result);

    } catch (err) {
        next(err);
    }
}