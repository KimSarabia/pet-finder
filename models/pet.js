'use strict';

var mongoose = require('mongoose');
var moment = require('moment');
var Pet;

var petSchema = new mongoose.Schema({
  price: Number,
  petNumber: Number,
  petAge: Number,
  petName: String,
  petSpecies:String,
  petBreed: String,
  photoUrl: String,
  owners: [{type: mongoose.Schema.Types.ObjectId, ref: "Owner"}]
});

Pet = mongoose.model('pet', petSchema);

module.exports = Pet;
