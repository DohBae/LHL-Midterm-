const generateRandomNumber = function() {
  let number = Math.floor(Math.random() * 9000000000) + 1000000000;

  return number;
};

module.exports = { generateRandomNumber };
