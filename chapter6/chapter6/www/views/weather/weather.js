(function(){

app.controller('WeatherController',['$scope', '$http', '$stateParams', 'Settings', '$ionicActionSheet' , function($scope, $http, $stateParams, Settings, $ionicActionSheet){

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

  $scope.showOptions = function() {
    var sheet = $ionicActionSheet.show({
      buttons: [
        {text: 'Toggle Favorite'},
        {text: 'Set as Primary'},
        {text: 'Sunrise and Sunset ca'}
      ],
    });
  };

}]);

})()
