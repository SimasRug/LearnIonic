(function() {

  app.controller('ReservationController', [ '$scope', function($scope) {

    $scope.reservation = {
      checkin : new Date(),
      checkout : new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
      room: 123,
      rate: 212,
      wifi: 1234
    };

  }]);

})();
