const mongoose = require('mongoose');

let photosSchema = mongoose.Schema({
  id: Number,
  style_id: Number,
  url: String,
  thumbnail_url: String
})

module.exports = mongoose.model('Photos', photosSchema);


