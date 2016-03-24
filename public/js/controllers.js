'use strict';

var app = angular.module("petfinder");

app.controller("dashCtrl", function($scope, $state, PetService, OwnerService) {
    console.log("dash works");

    PetService.getUpcoming()
    .then(function(res){
      $scope.pets = res.data.map(function(pet){
        pet.time = new Date(pet.time);
        return pet;
      });
      debugger;
    }, function(err){
      console.error('err:' err);
    })
});

app.controller("ownersCtrl", function($scope, $state, petService, ownerService) {
    console.log("ownersCtrl works");
});

app.controller("petsCtrl", function($scope, $state, petService, ownerService) {
    console.log("petsCtrl works");

});
