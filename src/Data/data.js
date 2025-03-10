// * Animals pictures
import lionPic from '/lion.png';
import catPic from '/cat.png';
import snakePic from '/snake.png';
import elephantPic from '/elephant.png';
import dogPic from '/dog.png';

// ! Machines pictures
import shipPic from '/ship.png';
import carPic from '/car.png';
import planePic from '/plane.png';
import trainPic from '/train.png';
import motorbikePic from '/motorbike.png';

// ? House Machines pictures
import airConditionerPic from '/airConditioner.png';
import fridgePic from '/fridge.png';
import gasStovePic from '/gasStove.png';
import washingMachinePic from '/washingMachine.png';
import waterHeaterPic from '/waterHeater.png';

// Numbers object for numbers game
const numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const numbersWordsArray = [
  'صفر',
  'واحد',
  'اتنين',
  'تلاتة',
  'اربعة',
  'خمسة',
  'ستة',
  'سبعة',
  'تمانية',
  'تسعة',
];

const picturesArray = [
  //* Animals Pics
  [
    { picture: lionPic, word: 'اسد أسد' },
    { picture: snakePic, word: 'ثعبان تعبان' },
    { picture: elephantPic, word: 'فيل' },
    { picture: dogPic, word: 'كلب' },
    { picture: catPic, word: 'قطه قطة' },
  ],
  //? Machines Pics
  [
    { picture: carPic, word: 'سيارة عربيه سياره' },
    { picture: trainPic, word: 'قطار' },
    { picture: motorbikePic, word: 'موتوسيكل' },
    { picture: planePic, word: 'طياره طائره' },
    { picture: shipPic, word: 'سفينه مركب' },
  ],
  //! House Tools Pics
  [
    { picture: waterHeaterPic, word: 'سخان' },
    { picture: gasStovePic, word: 'بوتاجاز' },
    { picture: fridgePic, word: 'تلاجه ثلاجه' },
    { picture: airConditionerPic, word: 'تكييف' },
    { picture: washingMachinePic, word: 'غسالة غساله' },
  ],
];

export { numbersArray, numbersWordsArray, picturesArray };
