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
        status: 'Failed',
        lastUpdated: "2015-11-17T10:15:00"
      },
      {
        name: "GIFTS Online",
        status: 'Passed',
        lastUpdated: "2015-11-17T10:30:00"
      },
      {
        name: "Reviewer Connect",
        status: 'Passed',
        lastUpdated: "2015-11-17T10:45:00"
      }
    ];
  
    $scope.outcomes = {
      currentFailedSteps: [
        {
          description: "Create and activate an Outcomes-enabled application form.",
          order: 1,
          state: "Fail",
          notes: "Repro Steps: 1. Create an Outcomes Application Form 2. Attempt to Activate it Expected Results: 1. Should activate and display URL Actual Results: 1. Throws System Error #282544 [7:49] FM: Error when Activating Outcomes Application Form"
        }
      ]
    };
  
  });
