var albumBucketName = 'amazon-main-product-bucket';
const AWS = require('aws-sdk');
var async = require('async');

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-west-1'; // Region

// Create a new service object
var s3 = new AWS.S3({
  accessKeyId: 'AKIAILFDGQECFUN6P7JA',
	secretAccessKey: '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',
	Bucket: 'amazon-main-product-bucket'
});


// Create signed URL for image
  // need to iterate through keys 
var presignedGETURL = s3.getSignedUrl('getObject', {
  Bucket: 'amazon-main-product-bucket',
  Key: 'main-product-1/photo_1.jpg', //filename
  Expires: 5000000000000 //time to expire in seconds
});

console.log(presignedGETURL, 'line 21')

// s3.listBuckets(function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data.Buckets);
//   }
// });

module.exports = s3, presignedGETURL;