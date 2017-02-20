'use strict';

angular.module('myApp')

.service('Answers', ['$firebaseArray', '$rootScope', '$http', function($firebaseArray, $rootScope, $http) {
  var ref = firebase.database().ref().child("answers");
  var answersStatsRef = firebase.database().ref().child("answers-aggregated");
  var firebaseStats;
  var answerStatsHashed = {};

  var api = {};

  api.answers = [];//$firebaseArray(ref);
  api.ipAddress;

  var json = 'https://ipv4.myexternalip.com/json';
  $http.get(json).then(function(result) {
      api.ipAddress = result.data.ip;
      var query = ref.orderByChild("ipAddress").equalTo(api.ipAddress);
      api.answers = $firebaseArray(query);
      $rootScope.$emit("answers-loaded", api.answers);
  }, function(e) {
      alert("error");
  });

  function loadStats () {
    firebaseStats = $firebaseArray(answersStatsRef);
    firebaseStats.$loaded(function (firebaseStats) {
      for (var index in firebaseStats) {
        var stat = firebaseStats[index];
        answerStatsHashed[stat.questionId] = stat;
      }
    });
  }
  loadStats();

  function updateStats(questionId, choice, oldChoice) {
    // @TODO; Hacky sync
    for (var index in firebaseStats) {
      var stat = firebaseStats[index];
      answerStatsHashed[stat.questionId] = stat;
    }

    var stat = answerStatsHashed[questionId];
    if (!stat) {
      var statObject = {
        questionId: questionId,
      };
      statObject[choice] = 1;
      firebaseStats.$add(statObject);
      loadStats();
    } else {
      if (!stat[choice]) stat[choice] = 0;
      if (oldChoice !== choice) stat[choice] += 1;
      if (stat[oldChoice] && oldChoice !== choice) stat[oldChoice] -= 1;
      firebaseStats.$save(stat);
    }
  };

  api.loadAnswers = function (facebookUserId) {
    for (var index in api.answers) {
      let answer = api.answers[index];
      answer.facebookUserId = facebookUserId;
      api.answers.$save(answer);
    }
    var query = ref.orderByChild("facebookUserId").equalTo(facebookUserId);
    api.answers = $firebaseArray(query);
    $rootScope.$emit("answers-loaded", api.answers);
    return api.answers;
  };

  api.answerQuestion = function (questionId, choice, facebookUserId) {
    let answer = this.getAnswerForQuestion(questionId);
    let oldChoice;
    if (answer) {
      oldChoice = angular.copy(answer.choice);
      answer.choice = choice;
      if (facebookUserId) answer.facebookUserId = facebookUserId;
      answer.ipAddress = api.ipAddress;
      api.answers.$save(answer);
    } else {
      let answer = {
        questionId: questionId,
        choice: choice,
        // facebookUserId: facebookUserId,
        ipAddress: api.ipAddress,
      };
      if (facebookUserId) answer.facebookUserId = facebookUserId;
      api.answers.$add(answer);
    }
    updateStats(questionId, choice, oldChoice);
  };

  api.getAnswerForQuestion = function (questionId) {
    for (var index in api.answers) {
      var answer = api.answers[index];
      if (answer.questionId === questionId) return answer;
    }
    return null;
  };

  api.getAnswerStatsForQuestion = function (questionId) {
    for (var index in firebaseStats) {
      var answer = firebaseStats[index];
      if (answer.questionId === questionId) return answer;
    }
    return null;
  };

  return api;
}]);
