const db = require('../connection');

const addQuiz = (creator_id, listed, title, description, thumbnail_url) => {

  return pool
  .query(`
    INSERT INTO quiz (creator_id, listed, description, thumbnail_url)
    VALUES ($1, $2, $3, $4);
    `, [creator_id, listed, description, thumbnail_url])
  .then((result) => {
    console.log('Adding new quiz!');
    return result.rows[0];
  })
  .catch((err) => {
    console.log(err.message);
  });
};

module.exports = { addQuiz };
