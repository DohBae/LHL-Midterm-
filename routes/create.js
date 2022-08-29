const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

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
  const answer2 = req.body['Answer-2'];
  const answer3 = req.body['Answer-3'];
  const answer4 = req.body['Answer-4'];

  addQuiz(creator_id, listed, quizTitle, quizDescription, thumbnail_url)

  // return query like in light-bnb

  res.redirect('/');
});

module.exports = router;
