const generateNewNumber = (numbersArr) => {
  const randomNumber =
    numbersArr[Math.floor(Math.random() * numbersArr.length)];
  return randomNumber;
};

export { generateNewNumber };
