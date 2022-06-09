const express = require('express');
const router = express.Router();
const _ = require("lodash");
const Products = require('../models/products');
const Features = require('../models/features');

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
    const paramId = parseInt(req.params.id)
    const productId = await Products.find({ 'id': paramId }, {_id: 0});
    res.json(productId);
  } catch (err) {
    res.json({message: err});
  }
})



  // Promise.all([featuresId])
  //   .then(data => {
  //     return data[0];
  //   })
  //   .then(newArray => {
  //     res.json(newArray);
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   }
// )});



// router.get('/:id', (req, res) => {
//   const paramId = parseInt(req.params.id)
//   const productId = Products.find({ 'id': paramId });
//   const featuresId = FeaturesById.find({ '_id': paramId });


//   Promise.all([productId, featuresId])
//     .then(data => {
//       let product = data[0];
//       let oldFeaturesArray = data[1];
//       console.log(oldFeaturesArray);
//       let newFeaturesArray = [];
//       for (let i = 0; i < oldFeaturesArray.length; i++) {
//         let eachFeature = oldFeaturesArray[i];
//         let newFeatureObj = {
//           'feature': eachFeature.feature,
//           'value': eachFeature.value
//         }
//         newFeaturesArray.push(newFeatureObj);
//       }
//       let source = {
//         'features': newFeaturesArray
//       }
//       let target = product[0];
//       return [target, source];
//     })
//     .then(array => {
//       let firstObject = array[0];
//       let secondObject = array[1];
//       let result = Object.assign(firstObject, secondObject);
//       return result;
//     })
//     .then(newArray => {
//       console.log('new combo array: ', newArray);

//       res.json(newArray);
//     })
//     .catch((err) => {
//       console.log(err)
//     }
// )});



module.exports = router;



// router.get('/:id', async (req, res) => {
//   let paramId = parseInt(req.params.id)
//   try {
//     const productId = await Products.find({ 'id': paramId });
//     // console.log(typeof productId);
//     const featuresId = await Features.find({ 'product_id': paramId });
//     // console.log(featuresId);
//     // productId['features'] = [ {

//     // }]
//     res.json(productId);
//   } catch(err) {
//     res.json({message: err});
//   }
// });
