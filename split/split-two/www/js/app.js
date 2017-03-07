(function(){

window.app = angular.module('starter', ['ionic','firebase', 'starter.controllers'])

app.run(['$ionicPlatform',function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}])

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login', {
    url:'/login',
    templateUrl: 'views/login/login.html',
    controller: 'LoginController',
    resolve:{
        removeAuth: function(Authentication) {
          return Authentication.logout();
        }
      }
  })

  .state('register', {
    url:'/register',
    templateUrl: 'views/register/register.html',
    controller: 'RegisterController',
    resolve:{
        removeAuth: function(Authentication) {
          return Authentication.logout();
        }
      }
  })

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.events', {
      url: '/events',
      views: {
        'menuContent': {
          templateUrl: 'templates/events.html',
          controller: 'EventsController'
        }
      }
    })

  .state('app.single', {
    url: '/events/:eventsId',
    views: {
      'menuContent': {
        templateUrl: 'templates/event.html',
        controller: 'EventController'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/events');
});

})(window)
