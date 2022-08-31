const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { getQuizzes } = require('../db/queries/my-quizzes')

// const creator_id = 4;
// const quizTitle = req.body.title;
// const quizDescription = req.body.description;
// const imageURL = req.body['img-url'];

router.get('/', async(req, res) => {
  const creatorQuizzes = await getQuizzes(4)
  const templateVars = { quizzes: creatorQuizzes }
  res.render('my-quizzes', templateVars);
});


module.exports = router;
