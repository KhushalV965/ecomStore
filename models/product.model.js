const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    images: [{
        type: String,
    }],
    brand: {
        type: String,
        required: true
    }

}, { timestamps: true });

const Product = mongoose.model('product', productSchema);
module.exports = Product;