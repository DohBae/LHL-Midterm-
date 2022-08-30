const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { getAttemptById } = require('../db/queries/attempt');

router.get('/:id/', (req, res) => {
  console.log("Posting results!");
  let id = req.params.id;
  let templateVars = {};
  getAttemptById(id)
    .then((val) => {
      // console.log('get attempt by id: ', val);
      templateVars = {
        correct_responses: val.correct_responses,
        total_responses: val.total_responses
      }
    })
      .then(() => {
        console.log("This is template vars: ", templateVars);
        res.render('attempt', templateVars);
      })

});

router.get('/', (req, res) => {
  res.render('attempt');
})

module.exports = router;
