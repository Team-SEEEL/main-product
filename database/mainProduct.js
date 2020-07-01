const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

// mainProduct Schema

const mainProductSchema = new mongoose.Schema({
  product_id: Number, 
  answers: Number,
  category: String,
  company: String,
  description: String,
  price: Number,
  prime: Boolean,
  ratings: Number,
  title: String,
  // best_seller: Boolean,
  amazon_choice: Boolean
});

const mainProduct = mongoose.model('mainProduct', mainProductSchema);


// photos Schema 

const photosSchema = new mongoose.Schema({
  photo_id: Number,
  product_id: [
    {type: Number, ref: 'mainProduct'}
  ],
  photo_url: String
});

const photos = mongoose.model('photos', photosSchema);

module.exports = {mainProduct, photos};
