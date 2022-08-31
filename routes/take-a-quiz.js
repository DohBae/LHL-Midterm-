const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { getQuizInfo } = require('../db/queries/quizzes')

router.get('/', (req, res) => {
  res.render('take-a-quiz');
});

router.get('/:id/', (req, res) => {
  let id = req.params.id;
  let templateVars = {};
  getQuizInfo(id)
    .then((result) => {
      let val = result[0];
      console.log('get quz: ', val);
      templateVars = {
        title: val.title,
        description: val.description,
        // quiz_title: val.title,
        // username: val.username
      }
    })
      .then(() => {
        res.render('take-a-quiz', templateVars);
      })

});

module.exports = router;
