(function(window){

window.app = angular.module('App', ['ionic'])


app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('search', {
    url: '/search',
    controller: 'SearchController',
    templateUrl: 'views/search/search.html'
  })
  .state('settings', {
    url:'/settings',
    controller:'SettingsController',
    templateUrl: 'views/settings/settings.html'
  })
  .state('weather', {
    url:'/weather/:city/:lat/:lng',
    controller: 'WeatherController',
    templateUrl: 'views/weather/weather.html'
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
  return Settings;
});

app.factory('Locations', function($ionicPopup) {
  function store() {
    localStorage.setItem('locations', angular.toJson(Locations.data));
  }
  // console.log(Locations.data);
  var Locations = {
     data: [
       {
      // id: 1, // change this later
      city: 'Chicago, IL, USA',
      lat: 41.8781163,
      lng: -87.6297982 },
      {
        // id:2, // change this later
        city: 'Milan, Italy',
        lat: 45.4654219,
        lng: 9.1859243 }
  ], // end of data[]
   getIndex: function(item) {
     var index = -1;
     angular.forEach(Locations.data, function(location, i) {
       if(item.lat = location.lat && item.lng == location.lng){
         index = i;
       }
     }); // end of forEach
     return index;
   }, // end of getIndex
   toggle: function(item){
     console.log(item);
     var index = Locations.getIndex(item);
     if(index >= 0 ) {
       $ionicPopup.confirm({
         title: 'Are you sure',
         template: 'This will remove ' + Locations.data[index].city
       }).then(function(res){
         if (res) {Locations.data.splice(index, 1);}
       });
     } else {
       Locations.data.push(item);
       $ionicPopup.alert({title:'Location saved'});
     }
      store();
   }, // end of toggle
   primary: function(item) {
     var index = Locations.getIndex(item);
     if(index >= 0) {
       Locations.data.splice(index, 1);
       Locations.data.splice(0, 0, item);
     } else {
       Locations.data.unshift(item);
     }
     store();
   } //end of primary
 };// end of Locations object

 try {
   var items = angular.fromJson(localStorage.getItem('locations')) || [];
   Locations.data = items;
 } catch(e) {
   Locations.data = [];
 }
 console.log(Locations.data);
   localStorage.clear();
 return Locations
});// end of Locations factory



app.filter('icons', function(){
  var map = {
    'clear-day': 'ion-ios-sunny',
    'clear-night': 'ion-ios-moon',
    rain: 'ion-ios-rainy',
    snow: 'ion-ios-snowy',
    sleet: 'ion-ios-rainy',
    wind: 'ion-ios-flag',
    fog: 'ion-ios-cloud',
    cloudy: 'ion-ios-cloudy',
    'partly-cloudy-day': 'ion-ios-partlysunny',
    'partly-cloudy-night': 'ion-ios-cloudy-night'
  };
  return function(icon) {
    return map [icon] || '';
  }
});

app.filter('chance', function(){
  return function(chance) {
    if (chance) {
      var value = Math.round(chance * 10);
      return value * 10;
    }
    return 0;
  };
});

app.filter('timezone', function(){
  return function(input, timezone) {
    if(input && timezone){
      var time = moment.tz(input * 1000, timezone);
      return time.format('LT');
    }
    return '';
  }
});


})(window);
