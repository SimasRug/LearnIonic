(function(){

app.controller('DetailController',[ '$scope', '$stateParams', '$state', 'Currencies',
  function($scope, $stateParams, $state, Currencies) {
    // console.log(Currencies);
    angular.forEach(Currencies, function(currency) {
      if (currency.code === $stateParams.currency) {
        $scope.currency = currency;
      };
    });

    if (angular.isUndefined($scope.currency.ticker)) {
      $state.go('tabs.rates');
    };

}]);

})();
