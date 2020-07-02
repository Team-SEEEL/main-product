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

// // UPDATE S3 images to db
// app.put('/api/photos', function(req, res) {

//   // const photoId = req.params.prodid;

//   s3.listObjects(bucketParams, (err, data) => {
//     if(err) console.log('error', err);
//     else {
//       // console.log(data);
//       let obj = data.Contents;
//       console.log(obj, 'line 33')
//       // res.send(data);
//       let photoUrls = obj.map(item => [item.Key]);
//       const test = photoUrls[0];
//       const baseUrl = 'https://amazon-main-product-bucket.s3-us-west-1.amazonaws.com'
//       const urlsToSend = [];

//       photoUrls.forEach(url => {
//         const newPhoto = {};
//         newPhoto.photo_url = `${baseUrl}/${url}`
//         // newPhoto.photo_id = photoId;
//         // console.log(newPhoto, 'line 43')
//         urlsToSend.push(newPhoto);
//       });

//       console.log(urlsToSend, 'line 47')

//       for (var i = 0; i < 100; i++) {
//         let index = i;
//         photos.findOneAndUpdate({ photo_id: `${index}` }, { photo_url: urlsToSend[index + 1].photo_url }, (err, docs) => {
//           if(err) console.log(err, 'logging error line 53');
//           else{
//             console.log(docs, 'successful findOneAndUpdate line 55');
//             res.status(200, 'successful findOneAndUpdate');
//           }
//         })
//       }
//     }
//   })
// });


// // POST S3 images to db
// app.post('/api/photos/:prodid', function(req, res) {
//   const productId = req.params.prodid;

//   s3.listObjects(bucketParams, (err, data) => {
//     if(err) console.log('error', err);
//     else {
//       // console.log(data);
//       let obj = data.Contents;

//       // res.send(data);
//       let photoUrls = obj.map(item => [item.Key]);
//       const test = photoUrls[0];
//       const baseUrl = 'https://amazon-main-product-bucket.s3-us-west-1.amazonaws.com'
//       const urlsToSend = [];

//       photoUrls.forEach(url => {
//         const newPhoto = {};
//         newPhoto.photo_url = `${baseUrl}/${url}`
//         newPhoto.product_id = productId;
//         console.log(newPhoto)
//         urlsToSend.push(newPhoto);
//       });

//       photos.insertMany(urlsToSend, (err, docs) => {
//         if(err) console.log(err, 'logging error line 53');
//         else{
//           console.log(docs, 'successful insertMany line 55');
//           res.json(docs);
//         }
//       })
  
    
//     }
//   })
  
// });

// GET main product data
app.get('/api/mainProduct', function(req, res) {
  mainProduct.find()
    .then((data) => {
      console.log(data, "logging mainProduct data");
      res.json(data);
  }).catch((err) => console.log(err, 'err from app.get/api/mainProduct'));
});

// GET main product data for 1 PRODUCT
app.get('/api/mainProduct/:productId', function(req, res) {
  let { productId } = req.params;
  mainProduct.find({ product_id: productId })
    .then((data) => {
      console.log(data, "logging mainProduct data");
      res.json(data);
  }).catch((err) => console.log(err, 'err from app.get/api/mainProduct'));
});

// GET ALL photos data
app.get('/api/photos', function(req, res) {
  console.log(req.params, 'line 123')
  photos.find()
    .then((data) => {
      console.log(data, "logging mainProduct data");
      res.json(data);
  }).catch((err) => console.log(err, 'err from app.get/api/mainProduct'));
});

// GET photos data for 1 PRODUCT
app.get('/api/photos/:productId', function(req, res) {
  let { productId } = req.params;
  console.log(req.params, 'line 123')
  photos.find({ product_id: productId } )
    .then((data) => {
      // console.log(data, "logging mainProduct data");
      res.json(data);
  }).catch((err) => console.log(err, 'err from app.get/api/mainProduct'));
});

// // GET photos url
// app.get('/api/photosurls', function(req, res) {
//   photos.find({}).select('photo_url')
//     .then((data) => {
//       console.log(data, "logging mainProduct data");
//       res.json(data);
//   }).catch((err) => console.log(err, 'err from app.get/api/mainProduct'));
// });

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
