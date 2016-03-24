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

router.put('/:id/adopt', function(req,res){
  Pet.findById(req.params.id, function(err,pet){
    if(err) return res.status(400).send(err);
    pet.adopted = !pet.adopted;
    pet.save(function(err, savedPet){
      res.status(err ? 400 : 200).send(err || savedPet);
    });
  });
});

router.get('/upcoming', function(req, res){
  var anHourAgo = moment().subtract(1, 'hour').toDate();
  var endOfToday = moment().endOf('day').toDate();

  Pet.find({
    time: {
      '$gte': anHourAgo,
      '$lte': endOfToday
    },
    adopted: false
  }, function(err,pets){
    if(err) return res.status(400).send(err);
    res.send(pets);
  });
});

router.get('/', function(req,res,next){

  Pet
  .find({})
  .sort('time')
  .exec(function(err,pets){
    if(err) return res.status(400).send(err);
    res.send(pets);
  });
});

router.put('/:petId/addOwner/:ownerId', function(req,res){
  Pet.findById(req.params.petId, function(err,pet){
    if(err || !pet) return res.status(400).send(err || 'Pet not found.');

  Client.findById(req.params.ownerId, function(err,owner){
    if(err || !owner) return res.status(400).send(err || 'Owner not found');

    pet.owners.push(owner._id);

      pet.save(function(err, savedPet){
        res.status(err ? 400 : 200).send(err || savedPet);
      });
    });
  });
});

router.get('/:id', function(req,res){
  Pet.findById(req.params.id)
  .populate('owners')
  .exec(function(err,pet){
    if(err || !pet) return res.status(400).send(err || 'Pet not found');
    res.send(pet);
  })
})
module.exports = router;
