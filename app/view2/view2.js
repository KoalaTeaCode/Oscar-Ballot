'use strict';

angular.module('myApp.view2', ['ngRoute', 'chart.js'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl',
    controllerAs: 'vm',
  });
}])
.config(['ChartJsProvider', function (ChartJsProvider) {
  // Configure all charts
  ChartJsProvider.setOptions({
    chartColors: ['#FF5252', '#FF8A80'],
    responsive: true
  });
  // Configure all line charts
  ChartJsProvider.setOptions('bar', {
    showLines: false
  });
}])

.controller('View2Ctrl', ['Answers', 'Questions', '$scope', function(Answers, Questions, $scope) {
  var vm = this;

  this.answerShown = false;
  this.currentQuestionIndex = 0;
  this.questions = Questions.getQuestions();
  this.currentQuestion = this.questions[this.currentQuestionIndex];

  this.showAnswer = function () {
    this.currentAnswer = Answers.getAnswerForQuestion(this.currentQuestion.id);
    this.currentAnswerStats = Answers.getAnswerStatsForQuestion(this.currentQuestion.id);
    displayChart(this.currentAnswerStats);
    this.answerShown = true;
  };

  function displayChart(currentAnswerStats) {
    var choices = [];
    var values = [];
    var skipKeys = ['questionId', '$id', '$priority'];

    for (var key in currentAnswerStats) {
      if (!currentAnswerStats.hasOwnProperty(key) || skipKeys.indexOf(key) !== -1) continue;
      choices.push(key);
      values.push(currentAnswerStats[key]);
    }

    $scope.labels = choices;//["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A'];
    $scope.data = [
      values,
      // [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
  }

  this.next = function () {
    this.answerShown = false;
    this.currentQuestionIndex += 1;
    if (this.currentQuestionIndex >= this.questions.length) return;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
  }
}]);
