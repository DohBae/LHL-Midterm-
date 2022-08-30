const db = require('../connection');

const addQuiz = (id, creator_id, listed, title, description, thumbnail_url) => {
  return db
  .query(`
  INSERT INTO quiz (id, creator_id, listed, title, description, thumbnail_url)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;
    `, [id, creator_id, listed, title, description, thumbnail_url])
  .then((result) => {
    console.log('Adding new quiz!');
    return result.rows[0];
  })
  .catch((err) => {
    console.log(err.message);
  });
};

const addQuestion = (quiz_id, content) => {
  return db
  .query(`
  INSERT INTO question (quiz_id, content)
  VALUES ($1, $2)
  RETURNING *;
    `, [quiz_id, content])
  .then((result) => {
    console.log('Adding new question!');
    return result.rows[0];
  })
  .catch((err) => {
    console.log(err.message);
  });
};

const getQuestionIDByContent = (content) => {
  return db
  .query(`
  SELECT id FROM question
  WHERE content = $1;
    `, [content])
  .then((result) => {
    console.log('Adding new question!');
    return result.rows[0];
  })
  .catch((err) => {
    console.log(err.message);
  });
}; //add quiz id

const addAnswer = (quiz_id, question_id, content, correct) => {
  return db
  .query(`
  INSERT INTO answer (quiz_id, question_id, content, correct)
  VALUES ($1, $2, $3, $4);
    `, [quiz_id, question_id, content, correct])
  .then((result) => {
    console.log('Adding new answer!');
    return result.rows[0];
  })
  .catch((err) => {
    console.log(err.message);
  });
};

module.exports = { addQuiz, addQuestion, addAnswer, getQuestionIDByContent };
