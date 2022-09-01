const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { addUser } = require('../db/queries/users');

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  addUser(username, email, password)
    .then(() => {
      res.redirect('/');
    })

});

module.exports = router;
