'use strict';

/**
 * @ngdoc overview
 * @name healthyLivingApp
 * @description
 * # healthyLivingApp
 *
 * Main module of the application.
 */
angular
    .module('healthyLivingApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/articles', {
              templateUrl: 'views/articles.html',
              controller: 'ArticlesCtrl',
              controllerAs: 'articles'
            })
            .when('/gallery', {
              templateUrl: 'views/gallery.html',
              controller: 'GalleryCtrl',
              controllerAs: 'gallery'
            })
            .otherwise({
                redirectTo: '/'
            });
    });