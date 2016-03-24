'use strict';

var express = require('express');
var router = express.Router();

var Pet = require('../models/pet');

router.get('/', function(req, res, next) {
  Pet.find({},function(err, pets){
    if(err) return res.status(400).send(err);
    res.send(pets);
  });
});

router.post('/', function(req,res) {
  var pet = new Pet(req.body);
  pet.save(function(err, savedPet){
    res.status(err ? 400 : 200).send(err || savedPet);
  });
});

// router.put()
module.exports = router;
