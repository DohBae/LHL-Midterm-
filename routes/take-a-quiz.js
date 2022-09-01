const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { getQuizInfo, getQuizQuestion, getQuizAnswer } = require('../db/queries/quizzes');
const { addNewAttempt } = require('../db/queries/attempt');
const { correctAnswerTotal, questionsTotal } = require('./helperFunctions');


router.get('/', (req, res) => {
  res.render('take-a-quiz');
});

router.get('/:id/', (req, res) => {
  let id = req.params.id;
  let templateVars = {};
  getQuizInfo(id)
    .then((result) => {
      let val = result[0];
      templateVars = {
        id: val.id,
        title: val.title,
        description: val.description
      }
      getQuizQuestion(val.id)
        .then((result) => {
          templateVars['questions'] = result;

          getQuizAnswer(result[0].quiz_id)
            .then((result) => {
              templateVars['answers'] = result;
            })
            .then(() => {
              res.render('take-a-quiz', templateVars);
            });
        })
    })
});

router.post('/:id/', (req, res) => {
  console.log('REQ: ', req.body);
  const user_id = req.session.user_id ? req.session.user_id : 1;
  const quiz_id = req.params.id;
  const correct_responses = correctAnswerTotal(req.body);
  const total_responses = questionsTotal(req.body);

  addNewAttempt(user_id, quiz_id, correct_responses, total_responses)
    .then((attempt) => {
      const attemptID = attempt.id;
      res.cookie('quiz-result', { correct_responses, total_responses, user_id })

      res.redirect(`/result/${attemptID}`);
    })
});

module.exports = router;
