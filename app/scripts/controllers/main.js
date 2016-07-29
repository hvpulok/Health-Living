'use strict';

/**
 * @ngdoc function
 * @name healthyLivingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the healthyLivingApp
 */
angular.module('healthyLivingApp')
    .controller('MainCtrl', function($scope) {
        var baseURL = 'http://lorempixel.com/960/450/';
        $scope.setInterval = 5000;

        // //definition of slides model
        $scope.slides = [{
            id: 0,
            title: '7 ways to stay Fit',
            image: baseURL + 'sports/',
            text: 'Play a sport for 30 minutes a day!'
        }, {
            id: 1,
            title: 'Healthy Fit',
            image: baseURL + 'food/',
            text: 'Food that you should be eating!'
        }, {
            id: 2,
            title: 'Relaxing Holidays',
            image: baseURL + 'nature/',
            text: '10 locations for nature lovers!'
        }];

        // end of controller
    });