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

const addNewAttempt = (user_id, quiz_id, correct_responses, total_responses) => {
  return db
  .query(`
  INSERT INTO attempt (user_id, quiz_id, correct_responses, total_responses)
  VALUES ($1, $2, $3, $4)
  RETURNING *;`, [user_id, quiz_id, correct_responses, total_responses])
  .then((result) => {
    console.log('Adding attempt to db');
    return result.rows[0];
  })
  .catch((err) => {
    console.log(err.message);
  });
};

module.exports = { getAttemptById, addNewAttempt }
