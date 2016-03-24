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
  owners: [{type: mongoose.Schema.Types.ObjectId, ref: "Owner"}],
  createdAt: { type: Date, default: Date.now },
  adopted: { type: Boolean, default: false }
});

module.exports = Pet;
