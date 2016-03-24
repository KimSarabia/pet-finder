'use strict';

var app = angular.module("petfinder");

app.service('petfinder', function($http){

  this.getAll = function() {
    return $http.get('/pets');
  };

  this.getUpcoming = function(){
    return $http.get('/pets/upcoming');
  };

  this.create = function(pet) {
    return $http.post('/pets', pet);
  };

  this.update = function(petId, updateObj) {
    return $http.put(`/pets/${pet._id}`, updateObj);
  };

  this.toggleAdopt = function(pet){
    return $http.put(`/pets/${pet._id}/adopt`);
  };

  this.addOwner = function(petId, ownerId){
    return $http.put(`/pets/${petId}/addOwner/${ownerId}`);
  };
})
