const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { getAttemptById, getAllAttemptsById } = require('../db/queries/attempt');
const { getUserById } = require('../db/queries/users')

router.get('/:id/', async (req, res) => {
  console.log("Posting results!");
  let id = req.params.id;
  let templateVars = {};
  //const user = await getUserById(req.session.user_id);

   getAttemptById(id)
    .then((val) => {
      console.log('get attempt by id: ', val);
      templateVars = {
        correct_responses: val.correct_responses,
        total_responses: val.total_responses,
        quiz_title: val.title,
        username: val.username
      }
    })
      .then(() => {
        res.render('attempt', templateVars);
      })

});

router.get('/', (req, res) => {
  console.log("Posting all your results!");
  let id = 1;
  let templateVars = {};
  getAllAttemptsById(id)
    .then((val) => {

      templateVars = {
        results: val
      }

    })
      .then(() => {
        res.render('myresults', templateVars);
      })

});

module.exports = router;
