'use strict';

/**
 * @ngdoc function
 * @name otgQualityInsightsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the otgQualityInsightsApp
 */
angular.module('otgQualityInsightsApp')
.controller('MainCtrl', function ($scope, bbModal, bbToast) {
  
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
    
    // send each failed test to the modal, so we can render a notes field for each one
    var failedSteps = [];
    
    $scope.outcomes.steps.forEach( function(step) {
      if (step.state == "Pass") {
        passCount++;
      } else if (step.state == "Fail") {
        failedSteps.push(step);
      }
    });

    bbModal.open({
      controller: 'ModalCtrl as modalCtrl',
      templateUrl: 'demo/modal/modalform.html',
      resolve: {
        testCount: testCount,
        passCount: passCount,
        failedSteps: function() {
          return failedSteps;
        }
      }
    })
    .result.then( function(steps) {
      // loop through the failed steps that were just updated in the modal
      steps.forEach(function (step) {
        // filter for the original step matching on description
        $scope.outcomes.steps.filter(function(failedStep) {
          if (step.description == failedStep.description) {
            // update the original step data
            failedStep.notes = step.notes;
          }
        });
      });
      bbToast.open({message: "Reporting data saved."});
    });
  };
  
  $scope.outcomes = {
    name: "Outcomes",
    steps: [
      {
        description: "Create and activate an Outcomes-enabled application form.",
        order: 1,
        state: "",
        notes: ""
      },
      {
        description: "Access Outcomes application and submit it.",
        order: 2,
        state: "",
        notes: ""
      },
      {
        description: "Consider the submitted application in Pending Applications.",
        order: 3,
        state: "",
        notes: ""
      },
      {
        description: "Access the Request Record and approve the grant.",
        order: 4,
        state: "",
        notes: ""
      },
      {
        description: "Create and publish a requirement for the grant.",
        order: 5,
        state: "",
        notes: ""
      },
      {
        description: "Access and submit the requirement via Graceland.",
        order: 6,
        state: "",
        notes: ""
      },
      {
        description: "Generate Progress Updates for the grant.",
        order: 7,
        state: "",
        notes: ""
      },
      {
        description: "Submit a Progress Update for the grant.",
        order: 8,
        state: ""
      },
      {
        description: "Verify that the progress update displays in the Funder Dashboard.",
        order: 9,
        state: "",
        notes: ""
      }
    ]
  };
  
})
.controller('ModalCtrl', function (testCount, passCount, failedSteps, $uibModalInstance) {
  var self = this;

  self.testCount = testCount;
  self.passCount = passCount;
  self.failedSteps = failedSteps;
  //set the bootstrap alert message
  self.alertStatus = '';

  self.allPassed = function () {
    if (passCount / testCount == 1) {
      self.alertStatus = 'success';
      return true;
    } else {
      self.alertStatus = 'danger';
      return false;
    }
  };
  
  self.save = function() {
    $uibModalInstance.close(self.failedSteps);
  };
});
