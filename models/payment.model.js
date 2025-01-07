const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    orderId: {
        type: String,
        required: true,
    },
    paymentId: {
        type: String,
        required: true,
    },
    signature: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
    },
    currency: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'failed', 'success'],
        required: true
    }

}, { timestamps: true });

const Payment = mongoose.model('payment', paymentSchema);
module.exports = Payment;