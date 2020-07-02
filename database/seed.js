const db  = require('./index.js');
const {mainProduct} = require('./mainProduct.js');
const {photos} = require('./mainProduct.js')
var faker = require('faker');
const mongoose = require('mongoose');
const { debounce } = require('underscore');

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
                title: `${randomTitle}`,
                best_seller: `${randomBestSeller}`
            }).save();
            promisearr.push(mainproduct)
        }
        return Promise.all(promisearr).catch(err => console.log(err))
};

// seed photos table

let seedPhotos = function() {
    var promisearr = [];

        for (var j = 0; j < 100; j++) {
            let randomPhotoUrl = faker.image.imageUrl(); // https://aws.photo.com
        
            let photostable = new photos({
                photo_url: `${randomPhotoUrl}`
            }).save()
            promisearr.push(photostable)
        }
    return Promise.all(promisearr).catch(err => console.log(err))
};

mainProduct.db.dropDatabase(function (err, results) {
    if (err) {
    } else {
      console.log(results);
    }
  });

console.log(seedMainProduct(), 'line 60')

const insertSampleProducts = function() {
  mainProduct.create(seedMainProduct())
    // .then(() => db.close())
    .then(() => db.close())
    .catch(err => console.log(err, 'err from insertSampleProducts'))
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

const insertSamplePhotos = function() {
    console.log(seedPhotos, 'line 101')
    db.photos.insert(Promise.resolve(seedPhotos()))
      .then(() => db.close())
      .catch(err => console.log(err, 'err from insertSamplePhotos'))
};
  
insertSamplePhotos();

