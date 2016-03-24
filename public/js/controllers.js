'use strict';

var app = angular.module("petfinder");

app.controller("dashCtrl", function($scope, $state, PetService, OwnerService) {
    console.log("dashCtrl works");
    angular.element('#price').trigger('change');
    angular.element('#petAge').trigger('change');
    angular.element('#petName').trigger('change');
    angular.element('#petSpecies').trigger('change');
    angular.element('#petBreed').trigger('change');
    angular.element('#photoUrl').trigger('change');
    PetService.getAll();
    $scope.modShow = false;
    $scope.allShow = true;

    $scope.$watch(function() {
        return PetService.allPets;
    }, function(curVal, preVal) {
        console.log(curVal);
        $scope.allPets = curVal;
    });

    $scope.deletePet = function(input) {
      console.log(input.pet);
      PetService.deletePet(input.pet);
      PetService.getAll();
    }

    $scope.modifyPet = function(input){
      $scope.modshow = true;
      $scope.allShow = false;
      console.log(input);
      $scope.update = input.pet;
    }

    $scope.deletePet = function(input) {
        console.log(input.pet);
        PetService.deletePet(input.pet);
        PetService.getAll();
    }

    $scope.modifyQ = function(input) {
        $scope.modShow = true;
        $scope.allShow = false;
        console.log(input);
        $scope.update = input.quest;

    }

    $scope.updateQ = function(input) {
        console.log(input);
        console.log(input.update.id);
        flashService.update(input.update);
        flashService.getAll();
    }

    $scope.quitUpdate = function() {
        $scope.addShow = false;
        $scope.modShow = false;
        $scope.allShow = true;
    }

    $scope.addNewQuest = function() {
        $scope.addShow = true;
        $scope.modShow = false;
        $scope.allShow = false;
        console.log($scope.newQ);
    }

    $scope.addNewQ = function(input) {
        flashService.create(input);
        flashService.getAll();
    }

    $scope.quitAdd = function() {
        $scope.addShow = false;
        $scope.modShow = false;
        $scope.allShow = true;
        $scope.newQ = {};
    }

});



app.controller("ownersCtrl", function($scope, $state, petService, ownerService) {
    console.log("ownersCtrl works");
});

app.controller("petsCtrl", function($scope, $state, petService, ownerService) {
    console.log("petsCtrl works");
        PetService.getUpcoming()
        .then(function(res){
          $scope.pets = res.data.map(function(pet){
            pet.time = new Date(pet.time);
            return pet;
          });
          debugger;
        }, function(err){
          console.error('err:' err);
        });

        $scope.getPets = function($this) {
          console.log($this.item);
          $scope.petShow
        }

        $scope.$watch(function() {
          return PetService.curPetList;
      }, function(curVal, preVal) {

          $scope.numPets = PetService.numPets;
          $scope.petsList = curVal;
          $scope.pet = curVal[0];
      });
    });
