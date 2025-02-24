const generateNewNumberArray = (numbersArr, count) => {
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(numbersArr[Math.floor(Math.random() * numbersArr.length)]);
  }
  // console.log(arr, count);
  return arr;
};

export { generateNewNumberArray };
