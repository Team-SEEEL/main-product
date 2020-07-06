const mongoose = require('mongoose');
const mongoUri = 'mongodb://172.17.0.2/main-product';

const db = mongoose.connect(mongoUri, {useMongoClient:true});

module.exports = db;
