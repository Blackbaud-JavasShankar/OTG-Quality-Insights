'use strict';

/**
 * @ngdoc function
 * @name otgQualityInsightsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the otgQualityInsightsApp
 */
angular.module('otgQualityInsightsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.products = [
      {
        name: "Outcomes",
        lastUpdated: "2015-11-17T10:15:00"
      },
      {
        name: "GIFTS Online",
        lastUpdated: "2015-11-17T10:30:00"
      },
      {
        name: "Reviewer Connect",
        lastUpdated: "2015-11-17T10:45:00"
      }
    ];
  
    $scope.outcomes = {
      currentFailedSteps: [
        {
          description: "Create and activate an Outcomes-enabled application form.",
          order: 1,
          state: "Fail",
          notes: "This didn't work for some dumb reason."
        },
        {
          description: "Access Outcomes application and submit it.",
          order: 2,
          state: "Fail",
          notes: "This is also not working."
        },
        {
          description: "Consider the submitted application in Pending Applications.",
          order: 3,
          state: "Fail",
          notes: "This is totally busted."
        }
      ]
    };
  
  });
