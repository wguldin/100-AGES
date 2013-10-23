'use strict';

/* Controllers */

function SplashCtrl($scope, $http) {
  $http.get('person.json').success(function(data) {
    $scope.person = data;
  });

}

function DetailCtrl($scope, $routeParams, $http) {
  $http.get('person.json').success(function(data) {
	angular.forEach(data, function(person) {
          if (person.id == $routeParams.personId) 
            $scope.person = person; 
        });
  });

  $scope.searching = false;

  $scope.$watch('searching', function (searching) {
    $scope.searchFade = searching ? 'in' : '';
    $scope.indexFade = searching ? '' : 'in';
  });
  
  $scope.playing = false;

  // Update the *Fade scope attributes whenever the `playing` scope attribute changes
  $scope.$watch('playing', function (playing) {
        $scope.playerFade = playing ? 'in' : '';
        $scope.person_photoFade = playing ? '' : 'in';
        $scope.playButtonFade = playing ? '' : 'in';
  });

}

function NavCtrl($scope, $routeParams, $http) {
  $http.get('person.json').success(function(data) {
        $scope.persons = data;
  });

  $scope.searching = false;

  $scope.$watch('searching', function (searching) {
    $scope.searchFade = searching ? 'in' : '';
    $scope.indexFade = searching ? '' : 'in';
  });

}

function NavListCtrl($scope, $filter, $routeParams, $http) {
  $http.get('person.json').success(function(data) {
  $scope.persons = [];
  angular.forEach(data, function(person) {
          if (person.type == $routeParams.personType) 
            $scope.persons.push(person);
        });
  });

}

function TypeaheadCtrl ($scope, $http, $location, $log, $timeout) {
  $http.get('person_search.json').success(function(data) {
      $scope.people = data;
  });

  $scope.onSelect = function($item, $model, $label){
    $scope.$item = $item;
    $scope.$model = $model;
    $scope.$label = $label;
    $log.info($scope.$item);
    $log.info($scope.$model);
    $log.info($scope.$label);
    $location.path('/' + $scope.$item.id);
  }
}
