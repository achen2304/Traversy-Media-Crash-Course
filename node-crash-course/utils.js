const RandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

function CtoF(celsius) {
  return (celsius * 9) / 5 + 32;
}

module.exports = {
  RandomNumber,
  CtoF,
};
