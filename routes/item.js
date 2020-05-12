const express = require('express');
const ItemController = require('../controllers/item');


var api = express.Router();


api.get('/getItems', ItemController.getItems);
api.get('/getItemDetails', ItemController.getItemDetails);


module.exports = api;