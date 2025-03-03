// * Animals pictures
import lionPic from '/lion.png';
import catPic from '/cat.png';
import snakePic from '/snake.png';
import elephantPic from '/elephant.png';
import hipoPic from '/hipo.png';

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
  // Animals Pics
  [
    {
      word: 'أسد',
      url: lionPic,
    },
    {
      word: 'تعبان',
      url: snakePic,
    },
    {
      word: 'فيل',
      url: elephantPic,
    },
    {
      word: 'سيد قشطة',
      url: hipoPic,
    },
    {
      word: 'قطة',
      url: catPic,
    },
  ],
  // Machines Pics
  [
    {
      word: 'عربية',
      url: carPic,
    },
    {
      word: 'قطار',
      url: trainPic,
    },
    {
      word: 'موتوسيكل',
      url: motorbikePic,
    },
    {
      word: 'طيارة',
      url: planePic,
    },
    {
      word: 'سفينة',
      url: shipPic,
    },
  ],
  // House Tools Pics
  [
    {
      word: 'سخان',
      url: waterHeaterPic,
    },
    {
      word: 'بوتجاز',
      url: gasStovePic,
    },
    {
      word: 'تلاجة',
      url: fridgePic,
    },
    {
      word: 'تكييف',
      url: airConditionerPic,
    },
    {
      word: 'غسالة',
      url: washingMachinePic,
    },
  ],
];

export { numbersArray, numbersWordsArray, picturesArray };
