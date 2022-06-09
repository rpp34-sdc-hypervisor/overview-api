const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoute = require('./routes/products.js');
const photoRoute = require('./routes/photos.js');
const featureRoute = require('./routes/features.js');
const styleRoute = require('./routes/styles.js');
const skuRoute = require('./routes/skus.js');



let dbLink = 'mongodb://localhost:27017/sdc';


mongoose.connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err.message));


const app = express();
const PORT = 3013;

app.use(bodyParser.json());

app.use('/products', productRoute);
app.use('/photos', photoRoute);
app.use('/features', featureRoute);
app.use('/styles', styleRoute);
app.use('/skus', skuRoute);


app.get('/', (req, res) => {
  res.send('Hello from root directory');
});



app.listen(PORT, () => {
  console.log(`API.js running on port: http://localhost:${PORT}`)
});

