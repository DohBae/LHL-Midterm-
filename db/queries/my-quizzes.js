const db = require('../connection');

const addQuiz = (id, creator_id, title, description, thumbnail_url) => {
  return db
  .query(`
  SELECT title, description, thumbnail_url
  FROM quiz
  WHERE id = 4

  `)
}

module.exports = { };
