const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { getQuizzes } = require('../db/queries/my-quizzes')

router.get('/', async(req, res) => {
  const creatorQuizzes = await getQuizzes(4)
  const templateVars = { quizzes: creatorQuizzes }
  res.render('my-quizzes', templateVars);
});

module.exports = router;
