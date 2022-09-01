const generateRandomNumber = function() {
  let number = Math.floor(Math.random() * 9000000) + 1000000;

  return number;
};

const correctAnswerTotal = function(object) {
  let count = 0;
  for (key in object) {
    if (object[key] === 'true') {
      count ++
    }
  }
  return count;
};

const questionsTotal = function(object) {
  let count = 0;
  for (key in object) {
    count ++
  }
  return count;
};

module.exports = { generateRandomNumber, correctAnswerTotal, questionsTotal };
