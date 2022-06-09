const express = require('express');
const router = express.Router();
const Features = require('../models/features');

router.get('/', async (req, res) => {
  try {
    const features = await Features.find().limit(5).sort({id: 1});
    res.json(features);
  } catch(err) {
    res.json({message: err});
  }
});

// params.id is going to be the product_id, so all features data returned will related to the one product_id

// router.get('/:id', async (req, res) => {
//   let paramId = parseInt(req.params.id);
//   try {
//     const featuresById = await FeaturesById.find({'_id': paramId });
//     res.json(featuresById);
//   } catch(err) {
//     res.json({message: err});
//   }
// });


module.exports = router;


