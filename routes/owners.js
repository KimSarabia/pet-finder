'use strict';

var express = require('express');
var router = express.Router();

var Owner = require('../models/owner');
var Pet = require('../models/pet');

/* GET users listing. */
router.get('/', function(req, res, next) {
  Owner.find({}, function(err,owners) {
    if(err){
      return res.status(400).send(err);
    }
  });
});

module.exports = router;
