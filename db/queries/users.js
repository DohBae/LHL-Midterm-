const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

const getUserByEmail = (email) => {
  return db.query('SELECT * FROM users WHERE email = $1;', [email])
    .then(data => {
      return data.rows;
    });
};

const addUser = (username, email, password) => {
  return db.query(`INSERT INTO users (username, email, password)
  VALUES ($1, $2, $3)
  RETURNING *;`, [username, email, password])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUsers, getUserByEmail, addUser };
