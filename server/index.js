const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const {mainProduct} = require('../database/mainProduct.js');
const {photos} = require('../database/mainProduct.js');

const app = express();
const PORT = 5000;

app.set('port', (process.env.PORT || 5000));

// const s3 = require('./s3_photoViewer')
// const presignedGETURL = require('./s3_photoViewer')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(__dirname + '/../client/dist'));

// Create params for S3.deleteBucket
var bucketParams = {
  Bucket : 'amazon-main-product-bucket'
};

// GET main product data
app.get('/products/api/mainProduct', function(req, res) {
  mainProduct.find()
    .then((data) => {
      console.log(data, "logging mainProduct data");
      res.json(data);
  }).catch((err) => console.log(err, 'err from app.get/products/api/mainProduct'));
});

// GET main product data for 1 PRODUCT
app.get('/products/api/mainProduct/:productId', function(req, res) {
  let { productId } = req.params;
  mainProduct.find({ product_id: productId })
    .then((data) => {
      console.log(data, "logging mainProduct data");
      res.json(data);
  }).catch((err) => console.log(err, 'err from app.get/products/api/mainProduct'));
});

// GET ALL photos data
app.get('/products/api/photos', function(req, res) {
  console.log(req.params, 'line 123')
  photos.find()
    .then((data) => {
      console.log(data, "logging mainProduct data");
      res.json(data);
  }).catch((err) => console.log(err, 'err from app.get/products/api/mainProduct'));
});

// GET photos data for 1 PRODUCT
app.get('/products/api/photos/:productId', function(req, res) {
  let { productId } = req.params;
  console.log(req.params, 'line 123')
  photos.find({ product_id: productId } )
    .then((data) => {
      // console.log(data, "logging mainProduct data");
      res.json(data);
  }).catch((err) => console.log(err, 'err from app.get/products/api/mainProduct'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
