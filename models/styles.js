const mongoose = require('mongoose');

let stylesSchema = mongoose.Schema({
  id: Number,
  product_id: Number,
  name: String,
  sale_price: Number,
  original_price: Number,
  default_style: Number
});

module.exports = mongoose.model('Styles', stylesSchema);