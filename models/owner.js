'use strict';

var mongoose = require('mongoose');

var Owner = mongoose.model('Owner', {
  name: String,
  phone: Number,
  email: String,
  createdAt: {type:Date, default: Date.now}
});

module.exports = Owner;
