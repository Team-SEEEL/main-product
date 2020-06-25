const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/main-product';

const db = mongoose.connect(mongoUri, {useMongoClient:true});

module.exports = db;
