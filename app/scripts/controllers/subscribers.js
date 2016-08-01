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
  });