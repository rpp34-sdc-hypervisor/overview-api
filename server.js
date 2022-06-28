const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoute = require('./routes/products.js');
require('dotenv').config();

const dbLink = process.env.MDB;
const awsLink = 'mongodb://localhost:8000/sdc';

const app = express();
const PORT = 3013;


/* comment out here for testing 1 of 2 */

mongoose.connect(process.env.MDB || awsLink, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB", awsLink))
  .catch((err) => console.log('mongoose connection err:', err));

/* comment out here for testing 1 of 2 */



app.use(bodyParser.json());

app.use('/products', productRoute);


app.get('/', (req, res) => {
  res.send('Hello from root directory');
});


/* comment out here for testing 2 of 2 */

app.listen(PORT, () => {
  console.log(`API.js running on port ${PORT}`)
});

/* comment out here for testing 2 of 2 */

module.exports = app;
