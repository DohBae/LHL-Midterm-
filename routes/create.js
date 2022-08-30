const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { addQuiz, addQuestion, addAnswer } = require('../db/queries/create');
const { generateRandomNumber } = require('./helperFunctions');

router.get('/', (req, res) => {
  res.render("make-quiz");
});

router.post('/new', (req, res) => {
  let listed = true;

  if (req.body['public-private'] === 'Private') {
    listed = false;
  }
// add quiz to db
  const quiz_id = generateRandomNumber();
  const creator_id = 1;
  const quizTitle = req.body.title;
  const quizDescription = req.body.description;
  const imageURL = req.body['img-url'];

// add question to db
  const questionText = req.body['question-text'];

  const answer1 = req.body['Answer-1'];
  const answer2 = req.body['Answer-2'];
  const answer3 = req.body['Answer-3'];
  const answer4 = req.body['Answer-4'];

  let answer1value = false;
  if (req.body['answer-1-val'] === 'Correct') {
    answer1value = true;
  }

  let answer2value = false;
  if (req.body['answer-2-val'] === 'Correct') {
    answer1value = true;
  }

  let answer3value = false;
  if (req.body['answer-3-val'] === 'Correct') {
    answer1value = true;
  }

  let answer4value = false;
  if (req.body['answer-4-val'] === 'Correct') {
    answer1value = true;
  }


  addQuiz(quiz_id, creator_id, listed, quizTitle, quizDescription, imageURL)
    .then(() => {
      addQuestion(quiz_id, questionText);
    })
    .then(() => {
      addAnswer(1, answer1, answer1value);
      addAnswer(1, answer2, answer2value);
      addAnswer(1, answer3, answer3value);
      addAnswer(1, answer4, answer4value);
    });

  res.redirect('/');
});

module.exports = router;
