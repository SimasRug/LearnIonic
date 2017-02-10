(function(window){

window.app = angular.module('App', ['ionic','highcharts-ng']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('tabs', {
      url: '/tabs',
      abstract: true,
      templateUrl:'views/tabs/tabs.html'
    })
    .state('tabs.rates', {
      url: '/rates',
      views: {
        'rates-tab': {
          templateUrl: 'views/rates/rates.html',
          controller: "RatesController",        }
      }
    })
    .state('tabs.detail', {
      url: '/detail/:currency',
      views: {
        'rates-tab': {
          templateUrl: 'views/detail/detail.html',
          controller: "DetailController",        }
      }
    })
    .state('tabs.history', {
      url: '/history/:currency',
      views: {
        'history-tab': {
          templateUrl: 'views/history/history.html',
          controller: 'HistoryController'
        }
      }
    })
    .state('tabs.currencies', {
      url: '/currencies',
      views: {
        'currencies-tab': {
          templateUrl: 'views/currencies/currencies.html'
        }
      }
    });
     $urlRouterProvider.otherwise('/tabs/rates');

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

app.config(['$ionicConfigProvider', function($ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom'); // other values: top
    $ionicConfigProvider.navBar.alignTitle('center');
}]);


app.factory('Currencies', function() {

  return [
     { code: 'AUD', text: 'Australian Dollar', selected: true },
     { code: 'BRL', text: 'Brazilian Real', selected: true},
     { code: 'CAD', text: 'Canadian Dollar', selected: true },
     //{ code: 'CHF', text: 'Swiss Franc', selected: true},
     { code: 'CNY', text: 'Chinese Yuan', selected: true},
     { code: 'EUR', text: 'Euro', selected: true },
     { code: 'GBP', text: 'British Pound Sterling', selected: true },
     { code: 'IDR', text: 'Indonesian Rupiah', selected: true},
     { code: 'ILS', text: 'Israeli New Sheqel', selected: true},
     { code: 'KRW', text: 'Korean Won', selected: true },
     { code: 'MXN', text: 'Mexican Peso', selected: true },
    //  { code: 'NOK', text: 'Norwegian Krone', selected: true},
     { code: 'MYR', text: 'Malaysian Ringgit', selected: true},
     { code: 'NGN', text: 'Nigerian Naira', selected: true},
     { code: 'NZD', text: 'New Zealand Dollar', selected: true},
     { code: 'PLN', text: 'Polish Zloty', selected: true},
    //  { code: 'RON', text: 'Romanian Leu', selected: true},
     { code: 'RUB', text: 'Russian Ruble', selected: true },
     { code: 'SEK', text: 'Swedish Krona', selected: true},
     { code: 'SGD', text: 'Singapore Dollar', selected: true},
     { code: 'TRY', text: 'Turkish Lyra', selected: true },
     { code: 'USD', text: 'United States Dollar', selected: true },
     { code: 'ZAR', text: 'South African Rand', selected: true}
  ];
});

})(window);
