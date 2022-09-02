const db = require('../connection');

const getQuizzes = (creator_id) => {
  return db
  .query(`
  SELECT *
  FROM quiz
  WHERE creator_id = $1;
  `, [creator_id])
  .then((result) => {
    return result.rows;
  })
  .catch((err) => {
    console.log(err.message);
  })

}

module.exports = { getQuizzes };
