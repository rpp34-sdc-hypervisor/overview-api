const express = require('express');
const bodyParser = require('body-parser');
const productRoute = require('./routes/products.js');
const photoRoute = require('./routes/photos.js');
const featureRoute = require('./routes/features.js');
const styleRoute = require('./routes/styles.js');
const skuRoute = require('./routes/skus.js');

const app = express();

app.use(bodyParser.json());

app.use('/products', productRoute);
app.use('/photos', photoRoute);
app.use('/features', featureRoute);
app.use('/styles', styleRoute);
app.use('/skus', skuRoute);


app.get('/', (req, res) => {
  res.send('Hello from root directory');
});


module.exports = app;
