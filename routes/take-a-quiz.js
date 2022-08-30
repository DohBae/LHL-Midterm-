const express = require('express');
const router  = express.Router();
const db = require('../db/connection');


router.get('/views/take-a-quiz', (req, res) => {
  console.log("it works")
});

module.exports = router;
