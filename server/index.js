const express = require('express');
const bodyParser = require('body-parser');

const {mainProduct} = require('../database/mainProduct.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/api/mainProduct', function(req, res) {
  mainProduct.find()
    .then((data) => {
      console.log(data, "logging mainProduct data");
      res.json(data);
  }).catch((err) => console.log(err, 'err from app.get/api/mainProduct'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
