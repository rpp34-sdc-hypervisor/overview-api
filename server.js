const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoute = require('./routes/products.js');
const DB = require('./config.js')

const awsLink = 'mongodb://localhost:8000/sdc';

const app = express();
const PORT = 3013;


/* comment out here for testing 1 of 2 */

mongoose.connect(DB || awsLink, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB", awsLink))
  .catch((err) => console.log('mongoose connection err:', process.env.MDB, awsLink, err));

/* comment out here for testing 1 of 2 */



app.use(bodyParser.json());


app.get(`/loaderio-720e9ca446233aaf6af728dab75d3b61`,  (req, res) => {
  const text = `loaderio-720e9ca446233aaf6af728dab75d3b61`;
  res.send(text);
})

app.use('/products', productRoute);



app.get('/', (req, res) => {
  res.send('Hello from root directory');
});


/* comment out here for testing 2 of 2 */

app.listen(PORT, () => {
  console.log(`API.js running on port ${PORT}, ${DB}, ${awsLink}`)
});

/* comment out here for testing 2 of 2 */

module.exports = app;
