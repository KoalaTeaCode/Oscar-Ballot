'use strict';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDYsN4xZZeqfQNIiNQCKC6K_7LRuyiMghU",
  authDomain: "kibbl-32715.firebaseapp.com",
  databaseURL: "https://kibbl-32715.firebaseio.com",
  storageBucket: "kibbl-32715.appspot.com",
  messagingSenderId: "761441700161"
};
firebase.initializeApp(config);

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  // 'ui.bootstrap',
  'firebase',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
