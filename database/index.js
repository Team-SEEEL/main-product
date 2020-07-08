const mongoose = require('mongoose');
// const mongoUri = 'mongodb://172.17.0.2/main-product';
const mongoUri = 'mongodb://localhost/main-product';

mongoose.connect(mongoUri, {useMongoClient:true});
const db = mongoose.connection;


module.exports = db;
