const generateNewNumberArray = (numbersArr, count) => {
  const shuffled = [...numbersArr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const generateNewPicturesArray = (parentArray) => {
  let holderArr = new Set();
  while (holderArr.size < 2) {
    holderArr.add(Math.floor(Math.random() * parentArray.length));
  }
  let [index1, index2] = [...holderArr];

  let array1 = [...parentArray[index1]];
  let array2 = [...parentArray[index2]];

  let selectedFromArray1 = [];
  while (selectedFromArray1.length < 4 && array1.length > 0) {
    let randomIndex = Math.floor(Math.random() * array1.length);
    selectedFromArray1.push(array1.splice(randomIndex, 1)[0]);
  }

  let selectedFromArray2 = array2[Math.floor(Math.random() * array2.length)];
  let finalArray = [...selectedFromArray1, selectedFromArray2];
  finalArray.sort(() => Math.random() - 0.5);

  // console.log(finalArray);
  return finalArray;
};

export { generateNewNumberArray, generateNewPicturesArray };
