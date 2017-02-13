(function(window){

window.app = angular.module('App', ['ionic'])


app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('search', {
    url: '/search',
    controller: 'SearchController',
    templateUrl: 'views/search/search.html'
  });
  $urlRouterProvider.otherwise('/search')
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.controller('LeftMenuController',['$scope', 'Locations', function($scope, Locations){
  $scope.locations = Locations.data;
}]);


app.factory('Settings', function() {
  var Settings = {
    units: 'us',
    days: 8
  }
  return Settins;
});

app.factory('Locations', function() {
  var Locations = {
    data: [{
      city: 'Chicago, IL, USA',
      lat: 41.8781163,
      lng: -87.6297982 },
      {
        city: 'Milan, Italy',
        lat: 45.4654219,
        lng: 9.1859243 }], // end of data[]
   getIndex: function(item) {
     var index = -1;
     angular.forEach(Locations.data, function(location, i) {
       if(item.lat = location.lat && item.lng == location.lng){
         index = i;
       }
     }); // end of forEach
   }, // end of getIndex
   toggle: function(item){
     var index = Locations.getIndex(item);
     if(index >= 0 ) {
       Locations.data.splice(index, 1);
     } else {
       Locations.data.push(item);
     }
   }, // end of toggle
   primary: function(item) {
     var index = Locations.getIndex(item);
     if(index >= 0) {
       Locations.data.splice(index, 1);
       Locations.data.splice(0, 0, item);
     } else {
       Locations.data.unshift(item);
     }
   } //end of primary
 };// end of Locations object
 return Locations
});// end of Locations factory


})(window);
