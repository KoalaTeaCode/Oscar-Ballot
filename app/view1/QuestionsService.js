'use strict';

angular.module('myApp')

.service('Questions', [function() {
  var api = {};

  api.questions = [
    {
      question: 'Best Picture',
      choices: [
        'Arrival',
        'Fences',
        'Hashsaw Ridge',
        'Hell or High Water',
        'Hidden Figures',
        'La La Land',
        'Lion',
        'Manchester by the Sea',
        'Moonlight'
      ],
      id: 1,
    },
    {
      question: 'ACTOR IN A LEADING ROLE',
      choices: [
        'Arrival',
        'Fences',
        'Hashsaw Ridge',
        'Hell or High Water',
        'Hidden Figures',
        'La La Land',
        'Lion',
        'Manchester by the Sea',
        'Moonlight'
      ],
      id: 2,
    },
  ];

  api.getQuestions = function () {
    return api.questions;
  };

  return api;
}]);
