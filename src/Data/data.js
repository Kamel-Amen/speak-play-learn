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

//* Numbers array [game 1]
const numbersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//* Numbers words array [game 1]
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

//* Pictures array [game 1]
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

//* Levels array [game 1]
const levelsArray = [
  {
    title: 'المستوي الأول',
    numbersCount: 3,
    timeLeft: 15,
  },
  {
    title: 'المستوي الثاني',
    numbersCount: 4,
    timeLeft: 13,
  },
  {
    title: 'المستوي الثالث',
    numbersCount: 5,
    timeLeft: 11,
  },
  {
    title: 'المستوي الرابع',
    numbersCount: 6,
    timeLeft: 9,
  },
  {
    title: 'المستوي الخامس',
    numbersCount: 7,
    timeLeft: 7,
  },
  {
    title: 'المستوي السادس',
    numbersCount: 8,
    timeLeft: 5,
  },
];

//? Colors array [game 2]
const colorsArray = ['#007BFF', '#FFD700', '#8000FF'];

//? Shapes array [game 2]
const shapesArray = [
  {
    name: 'car',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M14 5a1 1 0 0 1 .694 .28l.087 .095l3.699 4.625h.52a3 3 0 0 1 2.995 2.824l.005 .176v4a1 1 0 0 1 -1 1h-1.171a3.001 3.001 0 0 1 -5.658 0h-4.342a3.001 3.001 0 0 1 -5.658 0h-1.171a1 1 0 0 1 -1 -1v-6l.007 -.117l.008 -.056l.017 -.078l.012 -.036l.014 -.05l2.014 -5.034a1 1 0 0 1 .928 -.629zm-7 11a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m10 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m-6 -9h-5.324l-1.2 3h6.524zm2.52 0h-.52v3h2.92z' />
      </svg>
    ),
  },
  {
    name: 'bike',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M5 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' fill='transparent' />
        <path d='M19 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' fill='transparent' />
        <path d='M7.5 14h5l4 -4h-10.5m1.5 4l4 -4' fill='transparent' />
        <path d='M13 6h2l1.5 3l2 4' />
      </svg>
    ),
  },
  {
    name: 'truck',
    svg: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' fill='transparent' />
        <path d='M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' fill='transparent' />
        <path d='M9 17h6' />
        <path
          d='M19 17h1a1 1 0 0 0 1 -1v-4.528a2 2 0 0 0 -.211 -.894l-.96 -1.92a3 3 0 0 0 -2.683 -1.658h-11.146a3 3 0 0 0 -3 3v6a1 1 0 0 0 1 1h1'
          fill='transparent'
        />
        <path d='M3 12h18' />
        <path d='M15 12v-5' />
        <path
          d='M6 4m0 1.5a1.5 1.5 0 0 1 1.5 -1.5h7a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1 -1.5 1.5h-7a1.5 1.5 0 0 1 -1.5 -1.5z'
          fill='transparent'
        />
      </svg>
    ),
  },
];

export {
  numbersArray,
  numbersWordsArray,
  picturesArray,
  levelsArray,
  colorsArray,
  shapesArray,
};
