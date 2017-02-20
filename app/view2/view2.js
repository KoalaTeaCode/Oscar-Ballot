'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    controllerAs: 'vm',
  });
}])

.controller('View2Ctrl', ['Answers', 'Questions', function(Answers, Questions) {
  var vm = this;

  this.answerShown = false;
  this.currentQuestionIndex = 0;
  this.questions = Questions.getQuestions();
  this.currentQuestion = this.questions[this.currentQuestionIndex];

  this.showAnswer = function () {
    console.log(this.currentQuestion);
    this.currentAnswer = Answers.getAnswerForQuestion(this.currentQuestion.id);
    console.log(this.currentAnswer);
    this.answerShown = true;
  };

  this.next = function () {
    this.answerShown = false;
    this.currentQuestionIndex += 1;
    if (this.currentQuestionIndex >= this.questions.length) return;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }
}]);
