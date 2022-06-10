const mongoose = require('mongoose');

let productIdStylesSchema = mongoose.Schema({
  _id: Number,
  product_id: Number,
  results: Array
});

module.exports = mongoose.model('ProductIdStyles', productIdStylesSchema);