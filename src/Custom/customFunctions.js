const generateNewNumberArray = (numbersArr, count) => {
  const shuffled = [...numbersArr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export { generateNewNumberArray };
