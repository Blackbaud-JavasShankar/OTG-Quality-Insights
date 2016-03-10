'use strict';

/**
 * @ngdoc function
 * @name otgQualityInsightsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the otgQualityInsightsApp
 */
angular.module('otgQualityInsightsApp')
.controller('MainCtrl', function ($scope) {
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
    name: "Outcomes",
    steps: [
      {
        description: "Create and activate an Outcomes-enabled application form.",
        order: 1,
        pass: false
      },
      {
        description: "Access Outcomes application and submit it.",
        order: 2,
        pass: false
      },
      {
        description: "Consider the submitted application in Pending Applications.",
        order: 3,
        pass: false
      },
      {
        description: "Access the Request Record and approve the grant.",
        order: 4,
        pass: false
      },
      {
        description: "Create and publish a requirement for the grant.",
        order: 5,
        pass: false
      },
      {
        description: "Access and submit the requirement via Graceland.",
        order: 6,
        pass: false
      },
      {
        description: "Generate Progress Updates for the grant.",
        order: 7,
        pass: false
      },
      {
        description: "Submit a Progress Update for the grant.",
        order: 8,
        pass: false
      },
      {
        description: "Verify that the progress update displays in the Funder Dashboard.",
        order: 9,
        pass: false
      }
    ]
  };
  
});
