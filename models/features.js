const mongoose = require('mongoose');

let featuresSchema = mongoose.Schema({
  id: Number,
  product_id: Number,
  feature: String,
  value: String
});

module.exports =  mongoose.model('Features', featuresSchema);



