const db = require('../connection');

const getAllQuizzes = () => {
  return db.query('SELECT * FROM quiz;')
    .then(data => {
      return data.rows;
    });
};

const getAllPublicQuizzes = () => {
  return db.query('SELECT * FROM quiz WHERE listed = TRUE;')
    .then(data => {
      return data.rows;
    });
};

const getQuizInfo = (id) => {
  return db.query(`SELECT * FROM quiz
  WHERE quiz.id = $1;`, [id])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getAllQuizzes, getAllPublicQuizzes, getQuizInfo };
