const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { addQuiz, addQuestion, addAnswer } = require('../db/queries/create');
const { generateRandomNumber } = require('./helperFunctions');

router.get('/', (req, res) => {
  const templateVars = {
    emptyTitle: false,
    noQuestions: false,
    insufficientAnswers: false
  }
  res.render("make-quiz", templateVars);
});

router.post('/', (req, res) => {
  // setting all errors to false
  let templateVars = {
    emptyTitle: false,
    noQuestions: false,
    insufficientAnswers: false
  }

  // quiz variables
  let listed = true;
  if (req.body['public-private'] === 'Private') {
    listed = false;
  }
  const quiz_id = generateRandomNumber();
  const creator_id = 1;

  if (!req.body.title) {
    templateVars.emptyTitle = true;
    return res.render("make-quiz", templateVars);
  }
  const quizTitle = req.body.title;

  let quizDescription = `This quiz doesn't have a description`;
  if (req.body.description) {
    quizDescription = req.body.description;
  }

  let imageURL = 'https://blog.hubspot.com/hubfs/google-quiz.jpg';
  if (req.body['img-url']) {
    imageURL = req.body['img-url'];
  }

  // question variables
  if (!req.body['question-text']) {
    templateVars.noQuestions = true;
    return res.render("make-quiz", templateVars);
  }

  let questions;

  if (typeof req.body['question-text'] === 'string') {
    questions = [req.body['question-text']];
  } else {
    questions = req.body['question-text'];
  }

  // answer variables
  const answers = req.body['answer'];

  for (const each of answers) {
    if (each === '') {
      templateVars.insufficientAnswers = true;
      return res.render("make-quiz", templateVars);
    }
  }

  const correctValues = req.body['answer-val'];

// because these functions return promises (found in db/queries/create), they have to be run async
  addQuiz(quiz_id, creator_id, listed, quizTitle, quizDescription, imageURL)
    .then(() => {
      const questionArray = [];

      if (questions.length >= 1) {
        for (const question of questions) {
          questionArray.push(addQuestion(quiz_id, question));
        }

        return Promise.all(questionArray);
      }

    })
    .then((ids) => {
      const questionIDArray = [];
      for (const each of ids) {
        questionIDArray.push(each.id);
      }

      let startValue = 0;
      let endValue = 3;

      for (let q = 0; q < questionIDArray.length; q++) {
        for (let i = startValue; i <= endValue; i++) {

          let correct = false;
          if (correctValues[i] === 'Correct') {
            correct = true;
          }

          addAnswer(quiz_id, questionIDArray[q], answers[i], correct);
        }
        startValue = startValue + 4;
        endValue = endValue + 4;
      } // this just assigns for answers at a time to each question

    })
    .catch((error) => {
      console.log(error);
    });

  res.redirect('/');
});

module.exports = router;
