const db  = require('./index.js');
const {mainProduct} = require('./mainProduct.js');
const {photos} = require('./mainProduct.js')
var faker = require('faker');
const mongoose = require('mongoose');
var async = require('async');
var Schema = mongoose.Schema;

// MAIN PRODUCT FAKE DATA



// PHOTOS FAKE DATA

var randomPhotoUrl = faker.image.imageUrl(); // https://aws.photo.com

// seed main product table

let seedMainProduct = function () {
    var promisearr = [];

        for (var i = 0; i < 100; i++) {

            let randomCategory = faker.commerce.department(); // Clothing
            let randomCompany = faker.company.companyName(); // Apple Inc.
            let randomDescription = faker.image.abstract(); // image description
            let randomPrice = faker.commerce.price(); // $1.00
            let randomPrime = faker.random.boolean(); // true
            let randomRating = faker.random.number(); // 4
            let randomTitle = faker.commerce.productName(); // Swimming Pool
            let randomBestSeller = faker.random.boolean(); // false

            let mainproduct = new mainProduct({
                category: `${randomCategory}`,
                company: `${randomCompany}`,
                description: `${randomDescription}`,
                price: `${randomPrice}`,
                prime: `${randomPrime}`,
                ratings: `${randomRating}`,
                title: `${randomTitle}`,
                best_seller: `${randomBestSeller}`
            }).save()
            promisearr.push(mainproduct)
        }
    return Promise.all(promisearr).catch(err => console.log(err))
};

let seedPhotos = function() {
    var promisearr = [];

    for (var j = 0; j < 100; j++) {
        let randomPhotoUrl = faker.image.imageUrl(); // https://www.aws.photo.com

        let photostable = new photos({
            photo_url: `${randomPhotoUrl}`
        }).save()
        promisearr.push(photostable)
    }
    return Promise.all(promisearr).catch(err => console.log(err, 'error from seedPhotos'))
}

mainProduct.db.dropDatabase(function(err, results) {
    if(err) {
        console.log(err, 'error from dropdb')
    } else {
        console.log(results, 'results from dropdb')
    }
})

const insertSampleProducts = function() {
  mainProduct.create(seedMainProduct())
    .then(() => db.close())
    .catch(err => console.log(err, 'err from insertSampleProducts'))
};

insertSampleProducts();

const insertSamplePhotos = function() {
    photos.insert(seedPhotos())
        .then(() => db.close())
        .catch(err => console.log(err, 'err from insertSamplePhotos'))
}

insertSamplePhotos()
// seed photos table