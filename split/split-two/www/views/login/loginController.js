(function(){
  app.controller('LoginController',['$scope', 'Authentication', function($scope, Authentication){
     $scope.userData = {
       email: 'test@mail.com',
       password: 'test123'
     }

    $scope.login = function(){
      console.log($scope.userData);
    Authentication.login($scope.userData);
    }
  }]);
})()
