angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {



})

.controller('EventsController', function($scope) {
  $scope.events = [
    { title: 'Event 1', id: 1 },
    { title: 'Event 2', id: 2 },
    { title: 'Event 3', id: 3 }
  ];
})

.controller('EventController', function($scope, $stateParams) {
  $scope.events = [
    { title: 'Event 1', id: 1 },
    { title: 'Event 2', id: 2 },
    { title: 'Event 3', id: 3 }
  ];
});
