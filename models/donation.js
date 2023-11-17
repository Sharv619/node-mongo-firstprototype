const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    donationAmount: {
        type: Number,
        required: true
    }
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;