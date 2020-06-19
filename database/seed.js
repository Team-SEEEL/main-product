const db  = require('./index.js');
const mainProduct = require('./mainProduct.js');
const photos = require('./mainProduct.js')
var faker = require('faker');
const mongoose = require('mongoose');
var async = require('async');
var Schema = mongoose.Schema;

// MAIN PRODUCT FAKE DATA

let randomCategory = faker.commerce.department(); // Clothing
let randomCompany = faker.company.companyName(); // Apple Inc.
let randomDescription = faker.image.abstract(); // image description
let randomPrice = faker.commerce.price(); // $1.00
let randomPrime = faker.random.boolean(); // true
let randomRating = faker.random.number(); // 4
let randomTitle = faker.commerce.productName(); // Swimming Pool
let randomBestSeller = faker.random.boolean(); // false


// PHOTOS FAKE DATA

var randomPhotoUrl = faker.image.imageUrl(); // https://aws.photo.com

// seed main product table

let seedMainProduct = function () {
    return new Promise (function (resolve, reject) {

        for (var i = 0; i < 100; i++) {
            
            function Product(category, company, description, price, prime, rating, title, bestseller) {
                this.category = randomCategory;
                this.company = randomCompany;
                this.description = randomDescription;
                this.price = randomPrice;
                this.prime = randomPrime;
                this.rating = randomRating;
                this.title = randomTitle;
                this.bestseller = randomBestSeller;
            }

            const products = new Product(randomCategory, randomCompany, randomDescription, randomPrice, randomPrice, randomRating, randomTitle, randomBestSeller)

            let unit = new mainProduct({
                category: `${products.randomCategory}`,
                company: `${products.randomCompany}`,
                description: `${products.randomDescription}`,
                price: `${products.randomPrice}`,
                prime: `${products.randomPrime}`,
                ratings: `${products.randomRating}`,
                title: `${products.randomTitle}`,
                best_seller: `${products.randomBestSeller}`
            }).save(function (err) {
                if(err) {
                    console.log(err, 'err from .save')
                    reject
                } else {
                    resolve();
                }
            })
        }

    });
};




const insertSampleProducts = function() {
  mainProduct.create(seedMainProduct())
    .then(() => db.close())
    .catch(err => console.log(err, 'err from insertSampleProducts'))
};

insertSampleProducts();



// seed photos table