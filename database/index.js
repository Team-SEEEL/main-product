const mongoose = require('mongoose');
const mongoUri = 'mongodb://database/main-product';

const db = mongoose.connect(mongoUri, {useMongoClient:true});

module.exports = db;
