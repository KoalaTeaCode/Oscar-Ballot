'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: 'vm',
  });
}])

.controller('View1Ctrl', ['Answers', 'Questions', 'Auth', '$rootScope', function(Answers, Questions, Auth, $rootScope) {
  var vm = this;

  vm.facebookUserId = Auth.facebookUserId;

  this.currentQuestionIndex = 0;
  this.choice = '';
  this.questions = Questions.getQuestions();
  this.currentQuestion = this.questions[this.currentQuestionIndex];
  var answer = Answers.getAnswerForQuestion(this.currentQuestion.id);
  if (answer && answer.choice) this.choice = answer.choice;

  this.answerQuestion = function (choice) {
    var currentQuestion = this.questions[this.currentQuestionIndex];
    Answers.answerQuestion(currentQuestion.id, choice, vm.facebookUserId);
    this.choice = '';
    this.currentQuestionIndex += 1;
    if (this.currentQuestionIndex >= this.questions.length) return;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    var answer = Answers.getAnswerForQuestion(this.currentQuestion.id);
    if (answer && answer.choice) this.choice = answer.choice;
  };


  this.loginWithFacebook = function () {
    Auth.loginWithFacebook();
  }

  $rootScope.$on('facebookUserId-loaded', function (event, facebookUserId) {
    vm.facebookUserId = facebookUserId;
	});

  $rootScope.$on('answers-loaded', function (event, answers) {
    answers.$loaded(function (result) {
      var answer = Answers.getAnswerForQuestion(vm.currentQuestion.id);
      if (answer && answer.choice) vm.choice = answer.choice;
    });
	}, true);


  $rootScope.$on('$viewContentLoaded', function(){
    console.log("FD")
    $.material.init();
  });
}]);
