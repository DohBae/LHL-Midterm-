const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { getQuizInfo, getQuizQuestion, getQuizAnswer } = require('../db/queries/quizzes')


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
        title: val.title,
        description: val.description
      }
      getQuizQuestion(val.id)
        .then((result) => {
          console.log('RESULT: ', result);
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

module.exports = router;
