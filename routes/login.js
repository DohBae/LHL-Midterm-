const express = require('express');
const router = express.Router();
const db = require('../db/connection');
const { getUserByEmail } = require('../db/queries/users');

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  getUserByEmail(email)
    .then((result) => {
      const user = result[0];
      if (user.password === password) {
        req.session.loginTime = new Date();
        req.session.user_id = user.id;
        res.redirect('/');
      } else {
        res.redirect('/login');
      }
    })
    .catch((error) => {
      console.error(error);
      res.redirect('/login');
    })



});

module.exports = router;
