'use strict';

var express = require('express');
var router = express.Router();

var Owner = require('../models/owner');
var Pet = require('../models/pet');

/* GET home page. */
router.get('/', function(req, res) {
  Pet.find('index', { title: 'Express' });
});

module.exports = router;
