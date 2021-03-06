(function(){

app.controller('RatesController',['$scope', '$http', 'Currencies','$ionicPopover',
 function($scope, $http, Currencies, $ionicPopover){

  $scope.currencies = Currencies;

  $ionicPopover.fromTemplateUrl('views/rates/help-popover.html', {
    scope: $scope})
    .then(function(popover) {
      $scope.popover = popover;
    })
    $scope.openHelp = function($event) {
      $scope.popover.show($event);
    };
    $scope.$on('$destroy', function() {
      $scope.popover.remove()
    });



  $scope.load = function(){
    $http.get('https://api.bitcoinaverage.com/ticker/all')
    .success(function(tickers){
      angular.forEach($scope.currencies, function(currency){
         currency.ticker = tickers[currency.code];
         currency.ticker.timestamp = new Date(currency.ticker.timestamp);
      });
    }).finally(function(){
      $scope.$broadcast('scroll.refreshComplete');
    });
  };

  $scope.load();

}])

})();
