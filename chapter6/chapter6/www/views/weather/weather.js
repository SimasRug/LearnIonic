(function(){

app.controller('WeatherController',['$scope', '$http', '$stateParams', 'Settings', function($scope, $http, $stateParams, Settings){

  $scope.params = $stateParams;
  $scope.settings = Settings;

 $http.get('https://api.darksky.net/forecast/a9ceab460b68862a8c4f41b9108d2090/' + $stateParams.lat + ',' + $stateParams.lng/*, {params: {units: Settings.units}} */)
  .success(function(forecast){
    $scope.forecast = forecast;
    console.log( $scope.forecast.currently);
  });



  var barHeight = document.getElementsByTagName('ion-header-bar')[0].clientHeight;

  $scope.getWidth = function() {
    return window.innerWidth + 'px';
  };
  $scope.getTotalHeight = function() {
    return parseInt(parseInt($scope.getHeight())*3) + 'px';
  };
  $scope.getHeight = function() {
    return parseInt(window.innerHeight - barHeight) + 'px';
  };

}]);

})()
