(function(){

app.controller('WeatherController',['$scope', '$http', '$stateParams', 'Settings', '$ionicActionSheet', 'Locations' , '$ionicModal', function($scope, $http, $stateParams, Settings, $ionicActionSheet, Locations, $ionicModal){

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
        {text: 'Sunrise Sunset Chart'}
      ],
      cancelText: 'Cancel',
      buttonClicked: function(index) {
        if(index === 0) {
          Locations.toggle($stateParams);
          console.log(index);
          console.log($stateParams);
        }
        if (index === 1) {
          Locations.primary($stateParams);
        }
        if (index === 2 ) {
          $scope.showModal();
        }
        return true;
      }
    });
  };

  $scope.showModal = function() {
    if ($scope.modal) {
      $scope.modal.show();
    } else {
      $ionicModal.fromTemplateUrl('views/weather/modal-chart.html',{
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
        var days = [];
        var day = Date.now();
        for(var i = 0; i < 365; i++) {
          day += 1000 * 60 * 60 * 24;
          days.push(SunCalc.getTimes(day, $scope.params.lat, $scope.params.lng));
        }
        $scope.chart = days;
        $scope.modal.show();
      });
    }
  };

  $scope.hideModal = function () {
    $scope.modal.hide();
  };
  $scope.$on('$destroy', function(){
    $scope.modal.remove();
  });

}]);

})()
