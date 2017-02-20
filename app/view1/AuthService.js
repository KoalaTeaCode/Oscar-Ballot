'use strict';

angular.module('myApp')

.service('Auth', ['$firebaseAuth', 'Answers', '$rootScope', function($firebaseAuth, Answers, $rootScope) {
  var api = {};

  var auth = $firebaseAuth();

  api.facebookUserId = sessionStorage.facebookUserId;

  if (api.facebookUserId) {
    $rootScope.$emit("facebookUserId-loaded", api.facebookUserId);
    Answers.loadAnswers(api.facebookUserId);
  }

  api.loginWithFacebook = function () {
    auth.$signInWithPopup("facebook").then(function(firebaseUser) {
      api.facebookUserId = firebaseUser.user.uid;
      $rootScope.$emit("facebookUserId-loaded", api.facebookUserId);
      Answers.loadAnswers(api.facebookUserId);
      sessionStorage.facebookUserId = api.facebookUserId;
    }).catch(function(error) {
      console.log("Authentication failed:", error);
    });
  }

  return api;
}]);
