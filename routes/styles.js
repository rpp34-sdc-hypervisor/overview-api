const express = require('express');
const router = express.Router();
const Styles = require('../models/styles');

router.get('/', async (req, res) => {
  try {
    const styles = await Styles.find().limit(5);
    res.json(styles);
  } catch(err) {
    res.json({message: err});
  }
});

// params.id is going to be the product_id, so all styles data returned will related to the one product_id

router.get('/:id', async (req, res) => {
  let paramId = parseInt(req.params.id);
  try {
    const stylesId = await Styles.find({ 'product_id': paramId });
    res.json(stylesId);
  } catch(err) {
    res.json({message: err});
  }
});


module.exports = router;


