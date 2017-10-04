/*require('bootstrap/dist/css/bootstrap.min.css');
require('font-awesome/css/font-awesome.min.css');
require('./style/main.css');
require('bootstrap/dist/js/bootstrap.min.js');
require('./plugins/angular.min.js'); */


import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './style/main.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import angular from './wrapper/angular-wrapper.js';
import ResumeCtrl from './controller/resume.ctrl.js';
//import angular from './plugins/angular.min.js';
//import ngRoute from 'angular-route';

const app = angular.module('myApp',['ngRoute'])
                   .controller('resumeCtrl', ResumeCtrl);


app.config(['$locationProvider', function($locationProvider){
  $locationProvider.hashPrefix('');
}]);

app.config(function($routeProvider){
    $routeProvider
    .when("/resume", {
      templateUrl: "view/resume.html",
      controller: "resumeCtrl",
      controllerAs: "resumeCtrl"
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

