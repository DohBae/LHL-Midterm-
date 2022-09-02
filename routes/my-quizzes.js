const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { getQuizzes } = require('../db/queries/my-quizzes')

router.get('/', async (req, res) => {
  let id = req.session.user_id;
  const creatorQuizzes = await getQuizzes(id)
  const templateVars = { quizzes: creatorQuizzes }
  res.render('my-quizzes', templateVars);
});

module.exports = router;
