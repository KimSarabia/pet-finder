'use strict';

var app = angular.module("petfinder",["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state("home",{
    url:"/",
    templateUrl:"/partials/home.html",
    controller:"homeCtrl"
  })
  .state("dashboard",{
    url:"/dashboard",
    templateUrl:"/partials/dashboard.html",
    controller:"dashCtrl"
  })
.state("owners",{
    url:"/owners",
    templateUrl:"/partials/owners.html",
    controller:"ownersCtrl"
  })
.state("pets",{
    url:"/pets",
    templateUrl:"/partials/pets.html",
    controller:"petsCtrl"
  })


$urlRouterProvider.otherwise("/");

});
