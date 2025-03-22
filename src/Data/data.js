//? games icons imports
import interaction from '/interaction.png';
import brain from '/brain.png';
import flexibility from '/flexibility.png';
import focus from '/focus.png';

//! Animals pictures imports
import lionPic from '/lion.png';
import catPic from '/cat.png';
import snakePic from '/snake.png';
import elephantPic from '/elephant.png';
import dogPic from '/dog.png';

//! Machines pictures imports
import shipPic from '/ship.png';
import carPic from '/car.png';
import planePic from '/plane.png';
import trainPic from '/train.png';
import motorbikePic from '/motorbike.png';

//! House Machines pictures imports
import airConditionerPic from '/airConditioner.png';
import fridgePic from '/fridge.png';
import gasStovePic from '/gasStove.png';
import washingMachinePic from '/washingMachine.png';
import waterHeaterPic from '/waterHeater.png';

//? games array for games page
const gamesArray = [
  {
    id: 1,
    title: 'التثبيط | كف الأستجابة',
    icon: interaction,
    sectionStyle:
      'w-1/4 text-[#C75C5C] bg-[#FFF] flex flex-col justify-center items-center h-full',
    aosDuration: 1250,
    games: [
      {
        gameTitle: 'نشاط كف الأستجابة',
        link: '/speak-play-learn/gameTwo',
        gameStyle:
          'game-btn font-bold w-fit mx-auto text-white py-3 px-5 rounded-4xl bg-[#C75C5C] transition duration-150 ease-in-out hover:scale-110',
        linkColor: 'text-[#FFF]',
      },
    ],
  },
  {
    id: 2,
    title: 'المرونة المعرفية',
    icon: flexibility,
    sectionStyle:
      'w-1/4 text-[#FFF] bg-[#C75C5C] flex flex-col justify-center items-center h-full',
    aosDuration: 1500,
    games: [],
  },
  {
    id: 3,
    title: 'الذاكرة العاملة والذاكرة قصيرة الأمد',
    icon: brain,
    sectionStyle:
      'w-1/4 text-[#C75C5C] bg-[#FFF] flex flex-col justify-center items-center h-full',
    aosDuration: 1750,
    games: [
      {
        gameTitle: 'نشاط الذاكرة',
        link: '/speak-play-learn/gameOne',
        gameStyle:
          'game-btn font-bold w-fit mx-auto text-white py-3 px-5 rounded-4xl bg-[#C75C5C] transition duration-150 ease-in-out hover:scale-110',
        linkColor: 'text-[#FFF]',
      },
    ],
  },
  {
    id: 4,
    title: 'تبديل الأنتباه | التحويل',
    icon: focus,
    sectionStyle:
      'w-1/4 text-[#FFF] bg-[#C75C5C] flex flex-col justify-center items-center h-full',
    aosDuration: 2000,
    games: [
      {
        gameTitle: 'نشاط التنفس',
        link: '/speak-play-learn/gameThree',
        gameStyle:
          'game-btn font-bold w-fit mx-auto text-white py-3 px-5 rounded-4xl bg-[#fff] transition duration-150 ease-in-out hover:scale-110',
        linkColor: 'text-[#C75C5C]',
      },
    ],
  },
];

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

export {
  numbersArray,
  numbersWordsArray,
  picturesArray,
  levelsArray,
  colorsArray,
  gamesArray,
};
