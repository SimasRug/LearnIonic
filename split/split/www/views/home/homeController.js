(function(){
  app.controller('HomeController',['$scope', 'Authentication','$rootScope', '$ionicSideMenuDelegate', function($scope, Authentication, $rootScope, $ionicSideMenuDelegate){

    console.log($rootScope.currentUser);
    $scope.logout = function(){
      Authentication.logout();
    }
    $scope.toggleLeftSideMenu = function() {
      $ionicSideMenuDelegate.toggleLeft();
   };
  }]);
})()
