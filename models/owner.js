'use strict';

var mongoose = require('mongoose');
var moment = require('moment');
var Owner;

var ownerSchema = mongoose.Schema({
  name: String,
  phone: Number,
  email: String,
  dob: Date,
  petNum: Number
});

ownerSchema.statics.create = function(personObj, callback){
  var owner = new Owner(personObj);
  owner.save(callback);
}

ownerSchema.statics.showAll = function(req, callback){
  Owner.find({}).exec(callback);
}

Owner = mongoose.model('owner', ownerSchema);

module.exports = Owner;
