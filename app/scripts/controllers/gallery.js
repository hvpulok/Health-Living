'use strict';

/**
 * @ngdoc function
 * @name healthyLivingApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the healthyLivingApp
 */
angular.module('healthyLivingApp')
  .controller('GalleryCtrl', function ($scope) {

    var pictures = $scope.pictures = [];
    var baseURL = "http://lorempixel.com/300/180/";
    var titles = ["Healthy Food", "Healthy at Work", "City Life", "Staying Fit", "Looking Good", "Night Life"]
    var keywords = ["food", "business", "city", "sports", "fashion", "nightlife"];
    var dummyText = "Commodo ex voluptate quis aliqua. Dolor non deserunt veniam mollit labore commodo laborum proident consequat. Irure occaecat ex eiusmod eu consectetur. Elit voluptate nulla pariatur sunt qui aliquip.";

    $scope.addPics = function(i){
      pictures.push({
        url: baseURL+ keywords[i],
        title: titles[i],
        summary: dummyText
      });
    };

    for (var i=0; i<=5; i++){
        $scope.addPics(i);
    }

  $scope.rate = 7;
  $scope.max = 10;
  $scope.isReadonly = false;

//  end of controller function
  });
