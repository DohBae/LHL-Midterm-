const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { addQuiz, addQuestion, addAnswer, getQuestionIDByContent } = require('../db/queries/create');
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
  const questions = req.body['question-text'];

  // answer variables
  const answers = req.body['answer'];
  const correctValues = req.body['answer-val'];

// because these functions return promises (found in db/queries/create), they have to be run async
  addQuiz(quiz_id, creator_id, listed, quizTitle, quizDescription, imageURL)
    .then(() => {
      for (const question of questions) {
        addQuestion(quiz_id, question);
      }
      return questions;
    })
    .then(() => {

      let correct = false;

      for (let i = 0; i < answers.length; i++) {
        if (correctValues[i] === "Correct") {
          correct = true;
        }
        addAnswer(quiz_id, ?????, answers[i], correct);
      }

    });

  res.redirect('/');
});

module.exports = router;
