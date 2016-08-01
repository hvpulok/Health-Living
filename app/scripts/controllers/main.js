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

        // definition of 3 content model
        var content_baseURL = 'http://lorempixel.com/200/200/';
        $scope.content = [{
            img: content_baseURL + 'people',
            title: 'About Us',
            summary: 'We are good, we are the best out there'
        }, {
            img: content_baseURL + 'business',
            title: 'Our Services',
            summary: 'We offer advice on staying Healthy, what to eat...what are the best excercises for you etc.'
        }, {
            img: content_baseURL + 'transport',
            title: 'Contact Us',
            summary: '#111, Good Health Blvd, Happy Place, Antarctica, Zip-432167'
        }];

        // end of controller
    });