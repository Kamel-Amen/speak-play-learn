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

{
  /* 
  //* Plane
          <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='#f00'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z' />
        </svg>

  //* Car
        <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='#f00'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M14 5a1 1 0 0 1 .694 .28l.087 .095l3.699 4.625h.52a3 3 0 0 1 2.995 2.824l.005 .176v4a1 1 0 0 1 -1 1h-1.171a3.001 3.001 0 0 1 -5.658 0h-4.342a3.001 3.001 0 0 1 -5.658 0h-1.171a1 1 0 0 1 -1 -1v-6l.007 -.117l.008 -.056l.017 -.078l.012 -.036l.014 -.05l2.014 -5.034a1 1 0 0 1 .928 -.629zm-7 11a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m10 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m-6 -9h-5.324l-1.2 3h6.524zm2.52 0h-.52v3h2.92z' />
      </svg>

  //* Circle
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='#0ff'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z' />
      </svg> */
}
