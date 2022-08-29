const db = require('../connection');

const getAllQuizzes = () => {
  return db.query('SELECT * FROM quiz;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getAllQuizzes };
