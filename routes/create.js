const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { addQuiz, addQuestion, addAnswer } = require('../db/queries/create');
const { generateRandomNumber } = require('./helperFunctions');

router.get('/', (req, res) => {
  res.render("make-quiz");
});

router.post('/new', (req, res) => {
  // quiz variables
  let listed = true;
  if (req.body['public-private'] === 'Private') {
    listed = false;
  }
  const quiz_id = generateRandomNumber();
  const creator_id = 1;
  const quizTitle = req.body.title;
  const quizDescription = req.body.description;
  const imageURL = req.body['img-url'];

  // question variables
  const questionText = req.body['question-text'];

  // answer variables
  const answer1 = req.body['Answer-1'];
  const answer2 = req.body['Answer-2'];
  const answer3 = req.body['Answer-3'];
  const answer4 = req.body['Answer-4'];

  console.log(req.body['answer-1-val']);
  console.log(req.body['answer-2-val']);
  console.log(req.body['answer-3-val']);
  console.log(req.body['answer-4-val']);


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

// because these functions return promises (found in db/queries/create), they have to be run async
  addQuiz(quiz_id, creator_id, listed, quizTitle, quizDescription, imageURL)
    .then(() => {
      addQuestion(quiz_id, questionText);
    })
    .then(() => {
      addAnswer(quiz_id, 1, answer1, answer1value);
      addAnswer(quiz_id, 1, answer2, answer2value);
      addAnswer(quiz_id, 1, answer3, answer3value);
      addAnswer(quiz_id, 1, answer4, answer4value);
    });

  res.redirect('/');
});

module.exports = router;
