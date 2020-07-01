const express = require('express');
const bodyParser = require('body-parser');

const {mainProduct} = require('../database/mainProduct.js');
const {photos} = require('../database/mainProduct.js');

const app = express();
const PORT = 3000;

const s3 = require('./s3_photoViewer')
const presignedGETURL = require('./s3_photoViewer')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

// Create params for S3.deleteBucket
var bucketParams = {
  Bucket : 'amazon-main-product-bucket'
};


// POST S3 images to db
app.post('/api/photos/:prodid', function(req, res) {
  const productId = req.params.prodid;

  s3.listObjects(bucketParams, (err, data) => {
    if(err) console.log('error', err);
    else {
      // console.log(data);
      let obj = data.Contents;

      // res.send(data);
      let photoUrls = obj.map(item => [item.Key]);
      const test = photoUrls[0];
      const baseUrl = 'https://amazon-main-product-bucket.s3-us-west-1.amazonaws.com'
      const urlsToSend = [];

      photoUrls.forEach(url => {
        const newPhoto = {};
        newPhoto.photo_url = `${baseUrl}/${url}`
        newPhoto.product_id = productId;
        console.log(newPhoto)
        urlsToSend.push(newPhoto);
      });

      photos.insertMany(urlsToSend, (err, docs) => {
        if(err) console.log(err, 'logging error line 53');
        else{
          console.log(docs, 'successful insertMany line 55');
          res.json(docs);
        }
      })
  
    
    }
  })
  // console.log(test);
  // Call S3 to obtain a list of the objects in the bucket
  // s3.listObjects(bucketParams, function(err, data) {
  //     if (err) {
  //       console.log("Error", err);
  //     } else {
  //       // console.log("Success", data);
  //       // create list of keys from data -> for url 
  //       let obj = data.Contents;
  //       // console.log(obj, 'line 31')
  //       // map through objects -> list of URLs
  //       let photoUrls = obj.map(item => [item.Key]) 
  //       console.log(photoUrls, 'line 35')
  //       // console.log(photoUrls, 'line 39')
  //       res.send(photoUrls);
  //     }); 
  //   }
  // });
  // console.log(s3Objects, 'line 41')
  // console.log(s3Objects, 'line 44')
  
});

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
