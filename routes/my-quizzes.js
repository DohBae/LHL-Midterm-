const express = require('express');
const router  = express.Router();
const db = require('../db/connection');
const { myQuizzesRoutes } = require('../db/queries/my-quizzes')

const creator_id = 4;
const quizTitle = req.body.title;
const quizDescription = req.body.description;
const imageURL = req.body['img-url'];

router.get('/', (req, res) => {
  res.render('my-quizzes');
});

router.get()

module.exports = router;
