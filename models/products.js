const mongoose = require('mongoose');

let productsSchema = mongoose.Schema({
  _id: Number,
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: Array
});


let Products = mongoose.model('Products', productsSchema);

module.exports = Products;


