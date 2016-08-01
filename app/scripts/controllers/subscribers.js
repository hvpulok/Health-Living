'use strict';

/**
 * @ngdoc function
 * @name healthyLivingApp.controller:SubscribersCtrl
 * @description
 * # SubscribersCtrl
 * Controller of the healthyLivingApp
 */
angular.module('healthyLivingApp')
  .controller('SubscribersCtrl', function($scope, $http, $uibModal) {
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

    $scope.showModal = function() {
      $scope.newUser = {};
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'views/add_user.html',
        controller: 'AddNewUserCtrl',
        // size: 'lg',
        resolve: {
          newUser: function(){
            return $scope.newUser;
          }
        }
      });

      modalInstance.result.then(function(newUser){
        $scope.newUser = newUser;
        $scope.subscribers.push({
          no: $scope.subscribers.length+1,
          name: $scope.newUser.name,
          userType: $scope.newUser.userType,
          loyalty: $scope.newUser.loyalty,
          joinDate: $scope.newUser.joinDate.toDateString()
        });
      });
    };

  }) // end of SubscribersCtrl control function

.controller('AddNewUserCtrl', function($scope, $uibModalInstance, newUser) {
  $scope.newUser = newUser;
  $scope.saveNewUser = function() {
    $uibModalInstance.close(newUser);
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});