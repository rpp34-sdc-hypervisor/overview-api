const express = require('express');
const router = express.Router();
const Photos = require('../models/photos');

router.get('/', async (req, res) => {
  try {
    const photos = await Photos.find().limit(5);
    res.json(photos);
  } catch(err) {
    res.json({message: err});
  }
});

// params.id is going to be the style_id, so all photos data returned will related to the one style_id

router.get('/:id', async (req, res) => {
  let paramId = parseInt(req.params.id);
  try {
    const photosId = await Photos.find({ 'style_id': paramId });
    res.json(photosId);
  } catch(err) {
    res.json({message: err});
  }
});

module.exports = router;


