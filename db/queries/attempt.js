const db = require('../connection');

const getAttemptById = (id) => {
  return db
  .query(`
  SELECT * FROM attempt
  JOIN quiz ON attempt.quiz_id = quiz.id
  JOIN users ON attempt.user_id = users.id
  WHERE attempt.id = $1;
    `, [id])
  .then((result) => {
    console.log('Retrieving results page');
    return result.rows[0];
  })
  .catch((err) => {
    console.log(err.message);
  });
};

module.exports = { getAttemptById }
