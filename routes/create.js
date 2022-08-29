const express = require('express');
const router  = express.Router();
const db = require('../db/connection');

router.get('/', (req, res) => {
  res.render("make-quiz");
});

router.post('/new', (req, res) => {
  console.log(req.body);
  return req.body;
});

module.exports = router;
