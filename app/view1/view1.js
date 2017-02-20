'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: 'vm',
  });
}])

.controller('View1Ctrl', ['Answers', 'Questions', '$firebaseAuth', function(Answers, Questions, $firebaseAuth) {
  var vm = this;

  this.currentQuestionIndex = 0;
  this.choice = '';
  this.questions = Questions.getQuestions();
  this.currentQuestion = this.questions[this.currentQuestionIndex];
  var answer = Answers.getAnswerForQuestion(this.currentQuestion.id);
  if (answer && answer.choice) this.choice = answer.choice;

  this.answerQuestion = function (choice) {
    var currentQuestion = this.questions[this.currentQuestionIndex];
    Answers.answerQuestion(currentQuestion.id, choice);
    this.choice = '';
    this.currentQuestionIndex += 1;
    if (this.currentQuestionIndex >= this.questions.length) return;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    var answer = Answers.getAnswerForQuestion(this.currentQuestion.id);
    if (answer && answer.choice) this.choice = answer.choice;
  };

  var auth = $firebaseAuth();

  // login with Facebook
  auth.$signInWithPopup("facebook").then(function(firebaseUser) {
    console.log("Signed in as:", firebaseUser.uid);
  }).catch(function(error) {
    console.log("Authentication failed:", error);
  });
}]);
