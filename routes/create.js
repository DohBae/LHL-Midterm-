const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { addQuiz, addQuestion } = require('../db/queries/create');

router.get('/', (req, res) => {
  res.render("make-quiz");
});

router.post('/new', (req, res) => {
  let listed = true;

  if (req.body['public-private'] === 'Private') {
    listed = false;
  }

  const quizTitle = req.body.title;
  const quizDescription = req.body.description;
  const imageURL = req.body['img-url'];
  const questionText = req.body['question-text'];
  const answer1 = req.body['Answer-1'];
  const answer1value = req.body['answer-1-val'];
  const answer2 = req.body['Answer-2'];
  const answer3 = req.body['Answer-3'];
  const answer4 = req.body['Answer-4'];
  const answers = [answer1, answer2, answer3, answer4];

  // I think the quiz_id needs to be generated randomly at time of creation.

  addQuiz(1, listed, quizTitle, quizDescription, imageURL);
  addQuestion(1, questionText);

  for (const ans of answers) {
    addAnswer(ans);
  }


  res.redirect('/');
});

module.exports = router;
