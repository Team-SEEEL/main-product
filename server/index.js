const express = require('express');
const bodyParser = require('body-parser');

const {mainProduct} = require('../database/mainProduct.js');
const {photos} = require('../database/mainProduct.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

// GET main product data
app.get('/api/mainProduct', function(req, res) {
  mainProduct.find()
    .then((data) => {
      console.log(data, "logging mainProduct data");
      res.json(data);
  }).catch((err) => console.log(err, 'err from app.get/api/mainProduct'));
});

// GET photos data
app.get('/api/photos', function(req, res) {
  photos.find()
    .then((data) => {
      console.log(data, "logging mainProduct data");
      res.json(data);
  }).catch((err) => console.log(err, 'err from app.get/api/mainProduct'));
});

// GET photos url
app.get('/api/photosurls', function(req, res) {
  photos.find({}).select('photo_url')
    .then((data) => {
      console.log(data, "logging mainProduct data");
      res.json(data);
  }).catch((err) => console.log(err, 'err from app.get/api/mainProduct'));
});

// GET product rating
app.get('/api/ratings', function(req, res) {
  mainProduct.find({}).select('ratings')
    .then((data) => {
      console.log(data, "logging mainProduct data");
      res.json(data);
  }).catch((err) => console.log(err, 'err from app.get/api/mainProduct'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
