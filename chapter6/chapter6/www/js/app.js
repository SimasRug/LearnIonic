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


})(window);
