const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { addQuiz, addQuestion } = require('../db/queries/create');
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
  const quizTitle = req.body.title;
  const quizDescription = req.body.description;
  const imageURL = req.body['img-url'];
  addQuiz(quiz_id, listed, quizTitle, quizDescription, imageURL);

// add question to db
  // const questionText = req.body['question-text'];
  // addQuestion(1, questionText);

  // const answer1 = req.body['Answer-1'];
  // const answer1value = req.body['answer-1-val'];
  // const answer2 = req.body['Answer-2'];
  // const answer2value = req.body['answer-2-val'];
  // const answer3 = req.body['Answer-3'];
  // const answer3value = req.body['answer-3-val'];
  // const answer4 = req.body['Answer-4'];
  // const answer4value = req.body['answer-4-val'];
  // const answers = [answer1, answer2, answer3, answer4];

  // for (const ans of answers) {
  //   addAnswer(ans);
  // }

  res.redirect('/');
});

module.exports = router;
