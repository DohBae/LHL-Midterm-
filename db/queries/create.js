const db = require('../connection');

const addQuiz = (creator_id, listed, title, description, thumbnail_url) => {
  console.log('Add quiz');
  return db
  .query(`
  INSERT INTO quiz (creator_id, listed, title, description, thumbnail_url)
  VALUES ($1, $2, $3, $4, $5);
    `, [creator_id, listed, title, description, thumbnail_url])
  .then((result) => {
    console.log('Adding new quiz!');
    return result.rows[0];
  })
  .catch((err) => {
    console.log(err.message);
  });
};

module.exports = { addQuiz };
