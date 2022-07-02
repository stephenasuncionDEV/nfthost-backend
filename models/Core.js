const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CoreSchema = new Schema({
    featuredWebsites: {
        type: Array,
        default: Array(5)
    }
}, { timestamps: true });

exports.Core = mongoose.model('Core', CoreSchema);