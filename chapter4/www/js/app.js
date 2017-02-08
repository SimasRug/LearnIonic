(function(window){

 window.app = angular.module('App', ['ionic']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url: '/home',
    templateUrl: 'views/home/home.html'
  })
  .state('reservation', {
    url:'/reservation',
    controller: 'ReservationController',
    templateUrl:'views/reservation/reservation.html'
  })
  .state('weather', {
    url:'/weather',
    controller: 'WeatherController',
    templateUrl:'views/weather/weather.html'
  })
  .state('restaurants', {
    url:'/restaurants',
    controller: 'RestaurantsController',
    templateUrl:'views/restaurants/restaurants.html'
  })
  .state('tour', {
    url:'/tour',
    templateUrl:'views/tour/tour.html'
  })
  .state('directions', {
    url:'/directions',
    controller: 'DirectionsController',
    templateUrl:'views/directions/directions.html'
  });
  $urlRouterProvider.otherwise('/tour');
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

})(window);
