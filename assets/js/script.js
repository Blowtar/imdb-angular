'use strict';

var movieReviewApi = angular.module('movieApp', []);

movieReviewApi.controller('MovieController', function($scope, $http) {
  
  $scope.$watch('search', function() {
    fetch();
  });

  // Default search result
  $scope.search = "Frozen";

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
    $scope.search = movie.Details;
    $scope.search = movie.Poster
  };

  $scope.select = function() {
    this.setSelectionRange(0, this.value.length);
  }
  
  // Review Function
  $scope.todoList = [{todoText:'Harry Potter and the Gobshite of Fire was amazing...', done:false}];

  $scope.todoAdd = function() {
      $scope.todoList.push({todoText:$scope.todoInput, done:false});
      $scope.todoInput = "";
  };

  $scope.remove = function() {
      var oldList = $scope.todoList;
      $scope.todoList = [];
      angular.forEach(oldList, function(x) {
          if (!x.done) $scope.todoList.push(x);
      });
  };
  
});