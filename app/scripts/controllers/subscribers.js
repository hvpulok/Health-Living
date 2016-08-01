'use strict';

/**
 * @ngdoc function
 * @name healthyLivingApp.controller:SubscribersCtrl
 * @description
 * # SubscribersCtrl
 * Controller of the healthyLivingApp
 */
angular.module('healthyLivingApp')
  .controller('SubscribersCtrl', function($scope, $http) {
    $http.get('http://localhost:9000/subscribers.json').success(function(data) {
      $scope.subscribers = data;
    });

    $scope.gridOptions ={
      data : 'subscribers',
      columnDefs: [
          { name:'No.', field: 'no' },
          { name:'Name', field: 'name', enableCellEdit: true  },
          { name:'Loyalty Score', field: 'loyalty', enableCellEdit: true, type: 'number' },
          { name:'Date of Joining', field: 'joinDate', enableCellEdit: true, type: 'date' },
          { name:'User Type', field: 'userType', enableCellEdit: true}
        ]
    };


  });