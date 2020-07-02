const db  = require('./index.js');
const {mainProduct} = require('./mainProduct.js');
const {photos} = require('./mainProduct.js')
var faker = require('faker');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// FUNCTION TO SEED MAIN PRODUCT 
let seedMainProduct = function () {
    var promisearr = [];

        for (var i = 0; i < 10; i++) {

            let randomAnswers = faker.random.number({
                'min' : 10,
                'max' : 1200
            }); // 3
            let randomCategory = faker.commerce.department(); // Clothing
            let randomCompany = faker.company.companyName(); // Apple Inc.
            let randomDescription = faker.lorem.paragraph(); // image description
            let randomPrice = faker.commerce.price(); // $1.00
            let randomPrime = faker.random.boolean(); // true
            let randomRating = faker.random.number({
                'min' : 1,
                'max' : 5
                }
            ); // 4
            let randomTitle = faker.commerce.productName(); // Swimming Pool

            let mainproduct = new mainProduct({
                product_id: `${i}`,
                answers: `${randomAnswers}`,
                category: `${randomCategory}`,
                company: `${randomCompany}`,
                description: `${randomDescription}`,
                price: `${randomPrice}`,
                prime: `${randomPrime}`,
                ratings: `${randomRating}`,
                title: `${randomTitle}`
            }).save()
            promisearr.push(mainproduct)
        }
    return Promise.all(promisearr).catch(err => console.log(err))
};

// FUNCTION TO SEED PHOTOS
let seedPhotos = function() {
    var promisearr = [];

    // FUNCTION TO MATCH PHOTO ID TO PRODUCT ID
    let matchID = function(number) {
    if (number === 0) {
        return 0
    }
    let dividedNumber = number / 10;
    let intendedNumber = Math.floor(dividedNumber);
    return intendedNumber;
    }

    for (var j = 0; j < 10; j++) {
        let productID = j
        
        for (var k = 1; k < 10; k++) {
            let photoProductID = k + 1;
            let photoID = k;
            let photoURL = `https://amazon-main-product-bucket.s3-us-west-1.amazonaws.com/main-product-${productID}/photo_${photoID}.jpg`
    
            let photostable = new photos({
                photo_id: k,
                product_id: productID,
                photo_url: photoURL
            }).save()
            promisearr.push(photostable)
        }
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
    seedMainProduct()
        .then(() => db.close())
        .catch(err => console.log(err, 'err from insertSampleProducts'))
};

insertSampleProducts();

// COMMAND TO SEED PHOTOS TABLE
const insertSamplePhotos = function() {
    seedPhotos()
        .then(() => db.close())
        .catch(err => console.log(err, 'err from insertSamplePhotos'))
}

insertSamplePhotos()
