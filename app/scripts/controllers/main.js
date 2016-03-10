'use strict';

/**
 * @ngdoc function
 * @name otgQualityInsightsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the otgQualityInsightsApp
 */
angular.module('otgQualityInsightsApp')
.controller('MainCtrl', function ($scope, bbModal) {
  
  // all our products for which we run smoke tests
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
  
  // batch updates
  $scope.selectedItems = [];
  $scope.changeState = function(selectedItems, state) {
    selectedItems.forEach( function(item) {
      item.state = state;
    });
  };
  
  //form submission modal
  $scope.submit = function() {
    //get the count of passing/failed tests
    var testCount = $scope.outcomes.steps.length;
    var passCount = 0;
    var failCount = 0;
    
    $scope.outcomes.steps.forEach( function(step) {
      if (step.state == "Pass") {
        passCount++;
      } else if (step.state == "Fail") {
        failCount++;
      }
    });

    bbModal.open({
      controller: 'ModalCtrl as modalCtrl',
      templateUrl: 'demo/modal/modalform.html',
      resolve: {
        testCount: testCount,
        passCount: passCount,
        failCount: failCount 
      }
    });
  };
  
  $scope.outcomes = {
    name: "Outcomes",
    steps: [
      {
        description: "Create and activate an Outcomes-enabled application form.",
        order: 1,
        state: ""
      },
      {
        description: "Access Outcomes application and submit it.",
        order: 2,
        state: ""
      },
      {
        description: "Consider the submitted application in Pending Applications.",
        order: 3,
        state: ""
      },
      {
        description: "Access the Request Record and approve the grant.",
        order: 4,
        state: ""
      },
      {
        description: "Create and publish a requirement for the grant.",
        order: 5,
        state: ""
      },
      {
        description: "Access and submit the requirement via Graceland.",
        order: 6,
        state: ""
      },
      {
        description: "Generate Progress Updates for the grant.",
        order: 7,
        state: ""
      },
      {
        description: "Submit a Progress Update for the grant.",
        order: 8,
        state: ""
      },
      {
        description: "Verify that the progress update displays in the Funder Dashboard.",
        order: 9,
        state: ""
      }
    ]
  };
  
})
.controller('ModalCtrl', function (testCount, passCount, failCount) {
  var self = this;

  self.testCount = testCount;
  self.passCount = passCount;
  self.failCount = failCount;

  self.allPassed = function () {
    if (passCount / testCount == 1) {
      return true;
    } else {
      return false;
    }
  };
});
