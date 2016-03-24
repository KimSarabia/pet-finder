'use strict';

var express = require('express');
var router = express.Router();

var Owner = require('../models/owner');
var Pet = require('../models/pet');

router.get('/', function(req, res, next) {
  Owner.find({}, function(err, owners){
    res.status(err ? 400 : 200).send(err || owners);
  });
});

router.post('/', function(req,res){
  Owner.create(req.body, function(err,owner){
    res.status(err ? 400 : 200).send(err || owner);
  });
});

router.put('/:petId/addOwners',function(req,res){
  Pet.findById(req.params.petId, function(err,pet){
    if(err || !pet) return res.status(400).send(err || 'Pet not found.');
    Owner.find({_id: {$in: req.body.ownerIds } }, function(err, owners){
      if(err) return res.status(400).send(err);

      var ownerIds = owners.map(owner => owner._id);
      pet.owners = pet.owners.concat(ownerIds);

      pet.save(function(err, savedPet) {
        res.status(err ? 400 : 200).send(err || savedPet);
      });
    });
  });
});
module.exports = router;
