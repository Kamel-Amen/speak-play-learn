// import { generateNewNumber } from '../../Custom/customFunctions';
// import { numbersArray } from '../../Data/data';
// import { useState } from 'react';
// import Sidebar from '../../Custom Components/Sidebar';
// import downIcon from '/down.gif';
// import { toast } from 'react-toastify';
// import Confetti from 'react-confetti';
import { Link } from 'react-router-dom';
import numbersIcon from '/numbers.png';
import imagesIcon from '/images.png';
import joystick from '/games.png';

const GameOne = () => {
  // const [numbers, setNumbers] = useState(numbersArray);
  // const [randomNumber, setRandomNumber] = useState(generateNewNumber(numbers));
  // const [recognizedNumber, setRecognizedNumber] = useState('');
  // const [isListening, setIsListening] = useState(false);
  // const [showConfetti, setShowConfetti] = useState(false);
  // const [progress, setProgress] = useState(0);

  // const startListening = () => {
  //   const SpeechRecognition =
  //     window.SpeechRecognition || window.webkitSpeechRecognition;
  //   if (!SpeechRecognition) {
  //     alert('متصفحك لا يدعم التعرف الصوتي .');
  //     toast.error('متصفحك لا يدعم التعرف الصوتي .');
  //     return;
  //   }

  //   setIsListening(true);

  //   // * Recognition configuration
  //   const recognition = new SpeechRecognition();
  //   recognition.lang = 'en-US';
  //   recognition.continuous = false;
  //   recognition.interimResults = false;

  //   // ? Recognition onresult function
  //   recognition.onresult = (event) => {
  //     let transcript =
  //       event.results[event.results.length - 1][0].transcript.trim();
  //     const formattedNumber = parseInt(transcript, 10);

  //     // Checks random and recognized number are equal
  //     if (!isNaN(formattedNumber) && formattedNumber === randomNumber.number) {
  //       // ? checks for finishing the game
  //       if (progress === 95) {
  //         setShowConfetti(true);
  //         setTimeout(() => {
  //           setShowConfetti(false);
  //         }, 10000);
  //         alert('أحسنت لقد أنهيت اللعبة بنجاح ✅');
  //         toast('أحسنت لقد أنهيت اللعبة بنجاح ✅');
  //         setProgress(0);

  //         /* Test */
  //         setNumbers((prevNumbers) =>
  //           prevNumbers.filter((num) => num.number !== randomNumber.number)
  //         );
  //         console.log(numbers.length);
  //         /* Test */

  //         setRandomNumber(generateNewNumber(numbers));
  //         return;
  //       }

  //       // * If True
  //       toast.success('أحسنت, لقد أرتفعت 5 نقاط ✅');
  //       setProgress((prev) => Math.min(prev + 5, 100));
  //       setShowConfetti(true);

  //       /* Test */
  //       setNumbers((prevNumbers) =>
  //         prevNumbers.filter((num) => num.number !== randomNumber.number)
  //       );
  //       /* Test */

  //       setRandomNumber(generateNewNumber(numbers));

  //       // * React Confetti duration
  //       setTimeout(() => {
  //         setShowConfetti(false);
  //       }, 5000);
  //     } else {
  //       // ! If False
  //       /* Test */
  //       setNumbers((prevNumbers) =>
  //         prevNumbers.filter((num) => num.number !== randomNumber.number)
  //       );
  //       /* Test */

  //       setRandomNumber(generateNewNumber(numbers));
  //       if (progress === 0) {
  //         toast.error('خطأ... حاول مرة أخري ! ❌');
  //       } else {
  //         setProgress((prevProgress) =>
  //           prevProgress === 0 ? prevProgress : prevProgress - 5
  //         );
  //         toast.error('خطأ!! لقد خسرت 5 نقاط... حاول مرة أخري ! ❌');
  //       }
  //     }
  //   };

  //   // ! Recognition onerror function
  //   recognition.onerror = (event) => {
  //     console.error('Speech recognition error:', event.error);
  //     toast.error('خطأ أعد المحاولة مرة أخري .');
  //     setIsListening(false);
  //   };

  //   // * Recognition onend function
  //   recognition.onend = () => {
  //     setIsListening(false);
  //   };

  //   // ? Recognition Start function
  //   recognition.start();
  // };

  return (
    <div className='game-one-sec relative w-screen h-screen'>
      {/* Background Image */}
      <div className='holder absolute top-0 left-0 size-full'></div>

      {/* Options Section */}
      <section className='size-full z-10 flex items-center justify-center gap-40'>
        {/* Numbers Card */}
        <div className='numbers-card w-1/6 h-2/4 bg-amber-100 flex flex-col justify-center items-center transition ease-in-out duration-200 hover:scale-105 hover:rotate-6 rounded-lg'>
          <section className='bg-[#477586] w-full flex flex-col justify-center items-center h-4/6'>
            {' '}
            <img
              src={numbersIcon}
              alt='numbers icon'
              className='size-[100px]'
            />
          </section>
          <section className='content h-2/6 w-full'>
            <h2 className='text-[#FFF] bg-[#C75C5C] w-full h-2/4 text-2xl font-bold flex justify-center items-center'>
              نشاط الأرقام
            </h2>
            <Link
              to='/speak-play-learn/numbersMemory'
              className='h-2/4 flex justify-center items-center font-bold text-xl text-[#111] gap-2'
            >
              <img
                src={joystick}
                alt='joystick'
                className='bg-[#C75C5C] rounded-full w-[30px] H-[30px]'
              />
              ألعب الأن
            </Link>
          </section>
        </div>

        {/* Images Card */}
        <div className='images-card w-1/6 h-2/4 bg-amber-100 flex flex-col justify-center items-center transition ease-in-out duration-200 hover:scale-105 hover:rotate-6 rounded-lg'>
          <section className='bg-[#93BD67] w-full flex flex-col justify-center items-center h-4/6'>
            {' '}
            <img src={imagesIcon} alt='numbers icon' className='size-[100px]' />
          </section>
          <section className='content h-2/6 w-full'>
            <h2 className='text-[#FFF] bg-[#C75C5C] w-full h-2/4 text-2xl font-bold flex justify-center items-center'>
              نشاط الصور
            </h2>
            <Link
              to='/speak-play-learn/imagesMemory'
              className='h-2/4 flex justify-center items-center font-bold text-xl text-[#111] gap-2'
            >
              <img
                src={joystick}
                alt='joystick'
                className='bg-[#C75C5C] rounded-full w-[30px] H-[30px]'
              />
              ألعب الأن
            </Link>
          </section>
        </div>
      </section>
    </div>
  );
};

export default GameOne;
