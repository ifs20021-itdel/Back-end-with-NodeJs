const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
             
        },
    },
    {
        timeseries: true
    }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;