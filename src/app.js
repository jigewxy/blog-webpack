//var angular = require('./plugins/angular.min.js');
require('bootstrap/dist/css/bootstrap.min.css');
require('bootstrap/dist/js/bootstrap.min.js');
require('bootstrap');
require('./plugins/angular.min.js');
//require('./plugins/bootstrap.min.js');

var app = angular.module('myApp',[require('angular-route')]);

app.config(['$locationProvider', function($locationProvider){
  $locationProvider.hashPrefix('');
}]);

app.config(function($routeProvider){
    $routeProvider
    .when("/resume", {
      templateUrl: "view/resume.html",
      controller: "resumeCtrl"
    })
    .when("/daily",{
       templateUrl:"view/day.html",
       //controller: "webDevCtrl"
    })
    .when("/weekly", {
        templateUrl:"view/week.html",
       // controller: "embedCtrl"
    })
});

require('./controller/resume.ctrl.js');
