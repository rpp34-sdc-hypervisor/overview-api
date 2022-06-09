const express = require('express');
const router = express.Router();
const Skus = require('../models/skus');

router.get('/', async (req, res) => {
  try {
    const skus = await Skus.find().limit(5);
    res.json(skus);
  } catch(err) {
    res.json({message: err});
  }
});

// params.id is going to be the style_id, so all skus data returned will related to the one style_id

router.get('/:id', async (req, res) => {
  let paramId = parseInt(req.params.id)
  try {
    const skusId = await Skus.find({ 'style_id': paramId });
    res.json(skusId);
  } catch(err) {
    res.json({message: err});
  }
});

module.exports = router;


