'use strict';

var app = angular.module("petfinder");

app.controller("dashCtrl", function($scope, $state, petService, ownerService) {
    console.log("controller works");
});

app.controller("ownersCtrl", function($scope, $state, petService, ownerService) {
    console.log("ownersCtrl works");
});

app.controller("petsCtrl", function($scope, $state, petService, ownerService) {
    console.log("petsCtrl works");

});
