'use strict';

/**
 * @ngdoc overview
 * @name otgQualityInsightsApp
 * @description
 * # otgQualityInsightsApp
 *
 * Main module of the application.
 */
angular
.module('otgQualityInsightsApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'sky'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
