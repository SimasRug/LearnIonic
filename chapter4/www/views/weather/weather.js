(function(){

  app.controller('WeatherController', ['$scope', '$http', '$ionicLoading', function($scope, $http, $ionicLoading) {

    var directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    $ionicLoading.show();
    $http.get('http://api.openweathermap.org/data/2.5/weather?q=Milan,it&appid=342f888a6ea404f39c6ab0a446b3f63a')
    .success(function(weather) {
      $scope.weather = {
        current: weather.weather[0].main,
        currentTemp: Math.ceil(weather.main.temp - 273.15), // could make a function for this
        humidity: weather.main.humidity,
        maxTemp: Math.ceil(weather.main.temp_max - 273.15),
        minTemp: Math.ceil(weather.main.temp_min - 273.15),
        windSpeed: weather.wind.speed,
        windDirection: $scope.getDirection(weather.wind.deg)
      }
      $ionicLoading.hide();
    }).error(function(err){
        $ionic.show({
          template: 'Could not load, please try again',
          duration: 3000
        });
    });

    $scope.getDirection = function(degree) {
      if (degree > 338) {
        degree = 360 - degree;
      }
      var index = Math.floor((degree + 22)/45);
      return directions[index];
    };

    $scope.toCel = function(kelvin) {
      return Math.ceil(kelvin - 273.15);
    }

  }]);

})();
