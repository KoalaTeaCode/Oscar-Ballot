'use strict';

angular.module('myApp')

.service('Answers', ['$firebaseArray', function($firebaseArray) {
  var ref = firebase.database().ref().child("answers");

  var api = {};

  api.answers = $firebaseArray(ref);

  api.answerQuestion = function (questionId, choice) {
    // api.answers.push({
    //   questionId: questionId,
    //   choice: choice,
    // });
    let answer = this.getAnswerForQuestion(questionId);
    if (answer) {
      answer.choice = choice;
      api.answers.$save(answer);
    } else {
      api.answers.$add({
        questionId: questionId,
        choice: choice,
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
