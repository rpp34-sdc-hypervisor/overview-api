const express = require('express');
const router = express.Router();
const _ = require("lodash");
const Products = require('../models/products');
const ProductIdStyles = require('../models/productIdStyles');

router.get('/', async (req, res) => {
  try {
    const products = await Products.find({}, {_id: 0, features: 0}).limit(5).sort({ id: 1 });
    res.json(products);
  } catch (err) {
    res.json({ message: err });
  }
});


// params.id is going to be the id, so the product data returned will of the one id
// need to also return features based on lookup of product_id

router.get('/:id', async (req, res) => {
  try {
    let paramId = parseInt(req.params.id)
    const productId = await Products.find({ 'id': paramId }, {_id: 0});
    res.json(productId);
  } catch (err) {
    res.json({message: err});
  }
})


router.get('/:id/styles', async (req, res) => {
  try {
    let paramId = parseInt(req.params.id)
    const stylesId = await ProductIdStyles.find({ '_id': paramId }, {_id: 0});
    res.json(stylesId);
  } catch (err) {
    res.json({message: err})
  }
})



module.exports = router;


