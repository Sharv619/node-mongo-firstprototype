const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    targetAudience: {
        type: String,
        required: true
    },
    issueCause: {
        type: String,
        required: true
    },
    expectedOutcomes: {
        type: String,
        required: true 
    },
    donationGoals: {
        type: Number,
    } 
});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;