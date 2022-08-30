const db = require('../connection');

const getAttemptById = (id) => {
  return db
  .query(`
  SELECT * FROM attempt
  WHERE id = $1;
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
