const mongoose = require('mongoose');

const blacklistSchema = mongoose.Schema({
    token: {
        type: String,
        required: true
    }
}, { timestamps: true });


const Blacklist = mongoose.model('blacklist', blacklistSchema);
module.exports = Blacklist;