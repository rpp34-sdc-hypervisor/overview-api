const mongoose = require('mongoose');

let skuSchema = mongoose.Schema({
  id: Number,
  style_id: Number,
  size: String,
  quantity: Number
})

module.exports = mongoose.model('SKU', skuSchema);
