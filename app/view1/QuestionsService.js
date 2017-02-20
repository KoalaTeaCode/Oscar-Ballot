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
        'Casey Affleck',
        'Andrew Garfield',
        'Ryan Gosling',
        'Viggo Mortensen',
        'Denzel Washington',
      ],
      id: 2,
    },
    {
      question: 'ACTRESS IN A LEADING ROLE',
      choices: [
        'Isabelle Huppert',
        'Ruth Negga',
        'Natalie Portman',
        'Emma Stone',
        'Meryl Streep',
      ],
      id: 3,
    },
    {
      question: 'ACTOR IN A SUPPORTING ROLE',
      choices: [
        'Mahershala Ali',
        'Jeff Bridges',
        'Lucas Hedges',
        'Dev Patel',
        'Michael Shannon',
      ],
      id: 4,
    },
    {
      question: 'ACTRESS IN A SUPPORTING ROLE',
      choices: [
        'Viola Davis',
        'Naomie Harris',
        'Nicole Kidman',
        'Octavia Spencer',
        'Michelle Williams',
      ],
      id: 5,
    },
    {
      question: 'ANIMATED FEATURE FILM',
      choices: [
        'Kubo',
        'Moana',
        'My Life Zucchini',
        'The Red Turtle',
        'Zootopia',
      ],
      id: 6,
    },
    {
      question: 'CINEMATOGRAPHY',
      choices: [
        'Arrival',
        'La La Land',
        'Lion',
        'Moonlight',
        'Silence',
      ],
      id: 7,
    },
    {
      question: 'COSTUME DESIGN',
      choices: [
        'Allied',
        'Fantastic Beasts and Where to Find Them',
        'Florence Foster Jenkins',
        'Jackie',
        'La La Land',
      ],
      id: 8,
    },
    {
      question: 'DIRECTING',
      choices: [
        'Arrival',
        'Hacksaw Ridge',
        'La La Land',
        'Manchester by the Sea',
        'Moonlight',
      ],
      id: 9,
    },
    {
      question: 'DOCUMENTARY (FEATURE)',
      choices: [
        'Fire at Sea',
        'I Am Not Your Negro',
        'Life, Animated',
        'O.J.: Made in America',
        '13th',
      ],
      id: 10,
    },
    {
      question: 'DOCUMENTARY (SHORT SUBJECT)',
      choices: [
        'Extremis',
        '4.1 Miles',
        'Joe\'s Violin',
        'Watani: My Homeland',
        'The White Helmets',
      ],
      id: 11,
    },
    {
      question: 'FILM EDITING',
      choices: [
        'Arrival',
        'Hacksaw Ridge',
        'Hell or High Water',
        'La La Land',
        'Moonlight',
      ],
      id: 12,
    },
    {
      question: 'FOREIGN LANGUAGE FILM',
      choices: [
        'Land of Mine',
        'A Man Called Ove',
        'The Salesman',
        'Tanna',
        'Toni Erdmann',
      ],
      id: 13,
    },
    {
      question: 'MAKEUP AND HAIRSTYLING',
      choices: [
        'A Man Called Ove',
        'Star Trek Beyond',
        'Suicide Squad',
      ],
      id: 14,
    },
    {
      question: 'MUSIC (ORIGINAL SCORE)',
      choices: [
        'Jackie',
        'La La Land',
        'Lion',
        'Moonlight',
        'Passangers',
      ],
      id: 15,
    },
    {
      question: 'MUSIC (ORIGINAL SONG)',
      choices: [
        'La La Land - Audition',
        'Trolls - Can\'t Stop The Feeling',
        'La La Land - City of Stars',
        'The Empty Chair - Jim: The James Foley',
        'Moana - How Far I\'ll Go',
      ],
      id: 16,
    },
    {
      question: 'PRODUCTION DESIGN',
      choices: [
        'Arrival',
        'Fantastic Beasts and Where to Find Them',
        'Hail, Ceasar!',
        'La La Land',
        'Passangers',
      ],
      id: 17,
    },
    {
      question: 'SHORT FILM (ANIMATED)',
      choices: [
        'Blind Vaysha',
        'Borrowed Time',
        'Pear Cider and Cigarettes',
        'Pearl',
        'Piper',
      ],
      id: 17,
    },
    {
      question: 'SHORT FILM (LIVE ACTION)',
      choices: [
        'Ennemis Interieurs',
        'La Femme et le TGV',
        'Silent Nights',
        'Sing',
        'Timecode',
      ],
      id: 18,
    },
    {
      question: 'SOUND EDITING',
      choices: [
        'Arrival',
        'Deepwater Horizon',
        'Hacksaw Ridge',
        'La La Land',
        'Sully',
      ],
      id: 19,
    },
    {
      question: 'SOUND MIXING',
      choices: [
        'Arrival',
        'Hacksaw Ridge',
        'La La LAnd',
        'Rogue One: A Star Wars Story',
        '13 Hours: The Secret Soldiers of Benghazi',
      ],
      id: 20,
    },
    {
      question: 'VISUAL EFFECTS',
      choices: [
        'Deepwater Horizon',
        'Doctor Strange',
        'The Jungle Book',
        'Kubo and the Two Strings',
        'Rogue One: A Star Wars Story',
      ],
      id: 21,
    },
    {
      question: 'WRITING (ADAPTED SCREENPLAY)',
      choices: [
        'Arrival',
        'Fences',
        'Hidden Figures',
        'Lion',
        'Moonlight',
      ],
      id: 22,
    },
    {
      question: 'WRITING (ORIGINAL SCREENPLAY)',
      choices: [
        'Hell or High Water',
        'La La LAnd',
        'The Lobster',
        'Manchester by the Sea',
        '20th Century Women',
      ],
      id: 22,
    },
  ];

  api.getQuestions = function () {
    return api.questions;
  };

  return api;
}]);
