'use strict';

var app = angular.module("petfinder");

app.service('petService', function($http){
  this.curPet = [];
  this.curPetList = [];
  this.numPets=0;

  this.getAll = () => {
     $http.get('/pets').then(res=> {
       this.allPets = res.data;
     }, err => {
       if (err) {
         console.log(err);
       }
     });
  };

  this.getById = (id) => {
      $http.get(`/pets/${id}`).then(res => {
        this.curPet = res.data;
      }, err => {
          if(err) {
          console.log(err);
        }
      });
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

  this.deletePet = function(pet){

  };
  this.addOwner = function(petId, ownerId){
    return $http.put(`/pets/${petId}/addOwner/${ownerId}`);
  };


})

app.service('ownerService', function($http) {
    this.getAll = function() {
        console.log("getAll");
        return $http.get('/owners');
    };

    this.getById = function(id) {
        return $http.get(`/owners/${id}`);
    };

    this.getByName = function(name) {
        return $http.get(`/owners/owner/${name}`);
    };

    this.create = function(user) {
        return $http.post('/users', user);
    };

    this.delete = function(user) {
        return $http.delete(`/users/${user.id}`);
    };

    this.update = function(editUser) {
        return $http.put('/users', editUser);
    };

});
