const db  = require('./index.js');
const {mainProduct} = require('./mainProduct.js');
const {photos} = require('./mainProduct.js')
var faker = require('faker');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// FUNCTION TO SEED MAIN PRODUCT 
let seedMainProduct = function () {
    var promisearr = [];

        for (var i = 0; i < 100; i++) {

            let randomAnswers = faker.commerce.number(); // 3
            let randomCategory = faker.commerce.department(); // Clothing
            let randomCompany = faker.company.companyName(); // Apple Inc.
            let randomDescription = faker.image.abstract(); // image description
            let randomPrice = faker.commerce.price(); // $1.00
            let randomPrime = faker.random.boolean(); // true
            let randomRating = faker.random.number(); // 4
            let randomTitle = faker.commerce.productName(); // Swimming Pool
            let randomBestSeller = faker.random.boolean(); // false
            let randomAmazonChoice = faker.random.boolean() // true 

            let mainproduct = new mainProduct({
                answers: `${randomAnswers}`
                category: `${randomCategory}`,
                company: `${randomCompany}`,
                description: `${randomDescription}`,
                price: `${randomPrice}`,
                prime: `${randomPrime}`,
                ratings: `${randomRating}`,
                title: `${randomTitle}`,
                best_seller: `${randomBestSeller}`,
                amazon_choice: `${randomAmazonChoice}`
            }).save()
            promisearr.push(mainproduct)
        }
    return Promise.all(promisearr).catch(err => console.log(err))
};

// FUNCTION TO SEED PHOTOS
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

// DROP DB IF EXISTS
mainProduct.db.dropDatabase(function(err, results) {
    if(err) {
        console.log(err, 'error from dropdb')
    } else {
        console.log(results, 'results from dropdb')
    }
})

// COMMAND TO SEED MAIN PRODUCTS TABLE
const insertSampleProducts = function() {
    mainProduct.create(seedMainProduct())
        .then(() => db.close())
        .catch(err => console.log(err, 'err from insertSampleProducts'))
};

insertSampleProducts();

// COMMAND TO SEED PHOTOS TABLE
const insertSamplePhotos = function() {
    photos.create(seedPhotos())
        .then(() => db.close())
        .catch(err => console.log(err, 'err from insertSamplePhotos'))
}

insertSamplePhotos()
