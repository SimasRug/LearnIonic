//var base = 'http://localhost:3000';
var base = 'https://ionic-book-store.herokuapp.com';

angular.module('BookStoreApp.factory', [])
.factory('Loader', ['$ionicLoading', '$timeout', function($ionicLoading, $timeout){

  var LOADERAPI = {
    showLoading: function(text) {
      text = text || 'Loading...';
      $ionicLoading.show({
        template: text
      });
    },
    hideLoading: function() {
      $ionicLoading.hide();
    },
    toggleLoadingWithMessage: function(text, timeout) {
      $rootScope.showLoading(text);

      $timeout(function() {
        rootScope.hideLoading();
      }, timeout || 3000 );
    }
  }
  return LOADERAPI;
}])
.factory('LSFactory',[function(){
  var LSAPI = {
    clear: function(){
      return localStorage.clear();
    },
    get: function(key){
      return JSON.parse(localStorage.getItem(key));
    },
    set: function(key, data){
      return localStorage.setItem(key, JSON.stringify(data));
    },
    delete: function(key) {
      return localStorage.removeItem(key);
    },
    getAll: function(){
      var books = [];
      var items = Object.keys(localStorage);

      for(  var i=0; i < items.length; i++) {
        if (items[i] !== 'user' || items[i] != 'token') {
          books.push(JSON.parse(localStorage[items[i]]));
        }
      }
      return books;
    }
  };
  return LSAPI;
}]);
