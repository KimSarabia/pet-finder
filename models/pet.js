'use strict';

var mongoose = require('mongoose');
var moment = require('moment');
var Pet;
var Pet = mongoose.model('Pet',{
  price: Number,
  petNumber: Number,
  petAge: Number,
  petName: String,
  petSpecies:String,
  petBreed: String,
  photoUrl: String,
  owners: [{type: mongoose.Schema.Types.ObjectId, ref: "Owner"}]
});

module.exports = Pet;
