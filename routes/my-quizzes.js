const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { getQuizzes } = require('../db/queries/my-quizzes')

router.get('/', async (req, res) => {
  const user_id = req.session.user_id ? req.session.user_id : 1;
  const creatorQuizzes = await getQuizzes(user_id);
  const templateVars = { quizzes: creatorQuizzes };
  res.render('my-quizzes', templateVars);
});

module.exports = router;
