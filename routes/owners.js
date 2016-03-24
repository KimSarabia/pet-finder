'use strict';

var express = require('express');
var router = express.Router();

var Owner = require('../models/owner');
var Pet = require('../models/pet');

/* GET users listing. */

router.get('/', function(req, res, next) {
  Owner.find({}, function(err, lients){
    res.status(err ? 400 : 200).send(err || owners);
  });
});

router.post('/', function(req,res){
  Owner.create(req.body, function(err,owner){
    res.status(err ? 400 : 200).send(err || client);
  });
});



module.exports = router;
