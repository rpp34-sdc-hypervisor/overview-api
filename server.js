const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoute = require('./routes/products.js');

const app = express();
const PORT = 3013;

let dbLink = 'mongodb://localhost:27017/sdc';

/* comment out here for testing 1 of 2 */

mongoose.connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err.message));

/* comment out here for testing 1 of 2 */



app.use(bodyParser.json());

app.use('/products', productRoute);


app.get('/', (req, res) => {
  res.send('Hello from root directory');
});


/* comment out here for testing 2 of 2 */

app.listen(PORT, () => {
  console.log(`API.js running on port: http://localhost:${PORT}`)
});

/* comment out here for testing 2 of 2 */

module.exports = app;
