(function(){
  app.factory('Authentication', ['$location','$rootScope', '$firebaseObject', '$firebaseAuth', function( $location, $rootScope, $firebaseObject, $firebaseAuth){
    //  $rootScope.message = 'should be overiten';
     var ref = firebase.database().ref();
     var auth = $firebaseAuth();
     var provider = new firebase.auth.GoogleAuthProvider();
     var myObject;

     myObject = {
       login: function(user) {
         auth.$signInWithEmailAndPassword(user.email, user.password)
           .then(function(user) {
             $rootScope.message = 'Seccesfull login';
             $location.path('/home');
           })
           .catch(function (error) {
             $rootScope.message = error.message;
           });
       },
       register:function(user) {
          auth.$createUserWithEmailAndPassword(
            // passing values got from the input fields
            user.email,
            user.password
          ).then(function(regUser) {
            $rootScope.message = 'Registration Successfull'
            // calls a promisse in a success case
            var regRef = ref.child('users') // this is used for basiclly adding more info about the user to the DB for certain uses in the app
            .child(regUser.uid).set({ // the value in child can be anythig from the user object its personal prefrence
              date: firebase.database.ServerValue.TIMESTAMP,
              regUser: regUser.uid,
              username: user.username,
              email: user.email
              //this data is passed through controller then passed in the function above thats how it gets here
            });
            //myObject.login(user); // when called after regitration it redirects to login page
          }).catch(function(error) {
            // for catching errors
              $rootScope.message = error.message;
          });
        }
     }
     return myObject;
  }]);
})()
