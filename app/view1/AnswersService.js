'use strict';

angular.module('myApp')

.service('Answers', ['$firebaseArray', '$rootScope', '$http', function($firebaseArray, $rootScope, $http) {
  var ref = firebase.database().ref().child("answers");

  var api = {};

  api.answers = [];//$firebaseArray(ref);
  api.ipAddress;

  var json = 'https://ipv4.myexternalip.com/json';
  $http.get(json).then(function(result) {
      api.ipAddress = result.data.ip;
      ref.orderByChild("ipAddress").equalTo(api.ipAddress);
      api.answers = $firebaseArray(ref);
      $rootScope.$emit("answers-loaded", api.answers);
  }, function(e) {
      alert("error");
  });

  api.loadAnswers = function (facebookUserId) {
    ref.orderByChild("facebookUserId").equalTo(facebookUserId);
    api.answers = $firebaseArray(ref);
    $rootScope.$emit("answers-loaded", api.answers);
    return api.answers;
  };

  api.answerQuestion = function (questionId, choice, facebookUserId) {
    let answer = this.getAnswerForQuestion(questionId);
    if (answer) {
      answer.choice = choice;
      answer.facebookUserId = facebookUserId;
      answer.ipAddress = api.ipAddress;
      api.answers.$save(answer);
    } else {
      api.answers.$add({
        questionId: questionId,
        choice: choice,
        facebookUserId: facebookUserId,
        ipAddress: api.ipAddress,
      });
    }
    console.log(api.answers);
  };

  api.getAnswerForQuestion = function (questionId) {
    for (var index in api.answers) {
      var answer = api.answers[index];
      if (answer.questionId === questionId) return answer;
    }
    return null;
  };

  return api;
}]);
