(function(window){

window.app = angular.module('starter', ['ionic', 'firebase']);

app.run(['$rootScope', '$location', function($rootScope, $location){
  $rootScope.$on('$routeChangeError', function(event, next, previous, error) {
    if( error = 'AUTH_REQUIRED') {
      $rootScope.message = 'You must be loged in';
      $location.path('/login');
      console.log($rootScope.message);
    }
  });
}]);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('login', {
      url:'/login',
      controller: 'LoginController',
      templateUrl:'views/login/login.html',
      resolve:{
          removeAuth: function(Authentication) {
            return Authentication.logout();
          }
        }
    })
    .state('register', {
      url:'/register',
      controller: 'RegisterController',
      templateUrl:'views/register/register.html'
    })
    .state('home', {
      url:'/home',
      controller: 'HomeController',
      templateUrl:'views/home/home.html',
      resolve: {
        currentAuth: function(Authentication){
          return Authentication.requireAuth();
        }
      }
    });
      $urlRouterProvider.otherwise('/home');
});
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
})(window)
