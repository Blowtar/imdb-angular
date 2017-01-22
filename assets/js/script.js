'use strict';

angular.module('movieApp', []).controller('MovieController', function($scope, $http) {
  
  $scope.$watch('search', function() {
    fetch();
  });

  // Default search result
  $scope.search = "Sherlock Holmes";

  function fetch() {
    
    $http.get("https://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full").then(function(response) {
        $scope.details = response.data;
    });

    $http.get("https://www.omdbapi.com/?s=" + $scope.search).then(function(response) {
        $scope.related = response.data;
    });
    
  }

  $scope.update = function(movie) {
    $scope.search = movie.Title;
  };

  $scope.select = function() {
    this.setSelectionRange(0, this.value.length);
  }
    
});