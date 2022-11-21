let mongoose = require('mongoose');

// create a model class
let productModel = mongoose.Schema({
    _id: Number,
    name: String,
    ptype: String,
    description: String,
    price: Number,
    quantity: Number,
    imageurl: String
},
{
    collection: "product"
});

module.exports = mongoose.model('Product', productModel);