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
    res.json(productId[0]);
  } catch (err) {
    res.json({message: err});
  }
})


router.get('/:id/styles', async (req, res) => {
  try {
    let paramId = parseInt(req.params.id)
    const stylesId = await ProductIdStyles.find({ '_id': paramId }, {_id: 0});
    let stylesObj = stylesId[0];
    let returnObj = {};
    returnObj['product_id'] = stylesObj.product_id;

    let resultsArr = stylesObj.results;

    let newResultsArr = resultsArr.map((eachStyleObj) => {
      let newStyleObj = {};
      newStyleObj['style_id'] = eachStyleObj.style_id;
      newStyleObj['name'] = eachStyleObj.name;
      newStyleObj['original_price'] = eachStyleObj.original_price;
      if (eachStyleObj.sale_price === 'null') {
        newStyleObj['sale_price'] =  '0';
      } else {
        newStyleObj['sale_price'] = eachStyleObj.sale_price;
      }
      newStyleObj['photos'] = eachStyleObj.photos;
      newStyleObj['skus'] = eachStyleObj.skus;

      return newStyleObj;
    });

    returnObj['results'] = newResultsArr;

    res.json(returnObj);
  } catch (err) {
    res.json({message: err})
  }
})



module.exports = router;


