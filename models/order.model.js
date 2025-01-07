const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
    }],
    buyer: [{
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }],
    payment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'payment',
        required: true
    }

}, { timestamps: true });

const Order = mongoose.model('order', orderSchema);
module.exports = Order;