/* eslint-disable no-unused-vars */
import { generateNewNumber } from '../../Custom/customFunctions';
import { numbersArray } from '../../Data/data';
import { useState } from 'react';
import Sidebar from '../../Custom Components/Sidebar';
import downIcon from '/down.gif';
import { toast } from 'react-toastify';
import Confetti from 'react-confetti';

const GameOne = () => {
  const [randomNumber, setRandomNumber] = useState(
    generateNewNumber(numbersArray)
  );
  const [recognizedNumber, setRecognizedNumber] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [progress, setProgress] = useState(0);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('متصفحك لا يدعم التعرف الصوتي .');
      toast.error('متصفحك لا يدعم التعرف الصوتي .');
      return;
    }

    setIsListening(true);

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      let transcript =
        event.results[event.results.length - 1][0].transcript.trim();
      const recognizedFormattedNumber = parseInt(transcript, 10);

      // Checks random and recognized number are equal
      if (
        !isNaN(recognizedFormattedNumber) &&
        recognizedFormattedNumber === randomNumber.number
      ) {
        // ? checks for finishing the game
        if (progress === 95) {
          setShowConfetti(true);
          setTimeout(() => {
            setShowConfetti(false);
          }, 10000);
          alert('أحسنت لقد أنهيت اللعبة بنجاح ✅');
          toast('أحسنت لقد أنهيت اللعبة بنجاح ✅');
          setProgress(0);
          setRandomNumber(generateNewNumber(numbersArray));
          return;
        }

        // * If True
        toast.success('أحسنت, لقد أرتفعت 5 نقاط ✅');
        setProgress((prev) => Math.min(prev + 5, 100));
        setShowConfetti(true);
        setRandomNumber(generateNewNumber(numbersArray));

        // * React Confetti duration
        setTimeout(() => {
          setShowConfetti(false);
        }, 5000);
      } else {
        // ! If False
        setRandomNumber(generateNewNumber(numbersArray));
        if (progress === 0) {
          toast.error('خطأ... حاول مرة أخري ! ❌');
        } else {
          setProgress((prevProgress) =>
            prevProgress === 0 ? prevProgress : prevProgress - 5
          );
          toast.error('خطأ!! لقد خسرت 5 نقاط... حاول مرة أخري ! ❌');
        }
      }
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      toast.error('خطأ أعد المحاولة مرة أخري .');
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  // function check(randomNum, recognizedNum){
  //   console.log(randomNum, recognizedNum);
  // }

  return (
    <div className='game-one-sec relative w-full h-[34.5rem] overflow-y-scroll flex'>
      {showConfetti && <Confetti className='w-full h-full' />}

      {/* Background Image */}
      <div className='holder absolute top-0 left-0 size-full'></div>

      {/* Content */}
      <div className='content flex w-full h-full'>
        {/* Start Sidebar */}
        <section className='w-1/6 bg-[#C75C5C]'>
          <Sidebar gameNumber={1} />
        </section>

        {/* Start Game 1 */}
        <section className='w-5/6 text-white font-bold flex'>
          {/* Game Board */}
          <div className='gameBoard w-5/6 flex flex-col justify-center items-center'>
            <p className='flex mb-5 justify-center items-center text-lg'>
              أضغط علي زر &apos;أبدأ التحدث&apos; وقم بنطق الرقم الذي بداخل
              المربع
              <img
                src={downIcon}
                alt='down icon'
                className='rounded-4xl ms-4'
              />
            </p>
            <section className='w-full frame flex justify-center items-center relative mb-10'>
              <span className='w-[60%] border-2 rounded-3xl bg-[#0F172A] flex justify-center items-center text-[#F3F4F6] py-5 text-3xl font-bold'>
                {randomNumber.number} | {randomNumber.numWord}
              </span>
              {/* {randomNumber !== null && (
                <p className='mt-4 text-lg'>Random Number: {randomNumber}</p>
              )} */}
            </section>

            <p className='w-[50%] text-center bg-[#0F172A] border-2 border-[#FFF] text-[#FFF] font-bold py-3 rounded-2xl'>
              {recognizedNumber ? recognizedNumber : 'النص المكتشف ...'}
            </p>

            <section className='btns mt-10'>
              <button
                className={`cursor-pointer bg-[#0F172A] border-2 border-[#FFF] text-[#FFF] px-10 font-bold py-2 rounded-3xl hover:scale-110 transition duration-150 ease-in-out ${
                  isListening ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={startListening}
                disabled={isListening}
              >
                {isListening ? 'يستمع ...' : 'أبدأ التحدث'}
              </button>
            </section>
          </div>

          {/* Progress bar */}
          <div className='progress-bar w-1/6 h-full flex justify-center items-end'>
            <div className='bar-holder w-[75%] h-[80%] rounded-tr-4xl rounded-tl-4xl overflow-hidden border-2 border-t-8 border-b-0 flex justify-center items-center font-bold relative'>
              <p className='flex text-xl'>
                تقدمك <span className='ms-2'>{progress}%</span>
              </p>
              <span
                className='bar absolute w-full bottom-0 bg-[#C75C5C] z-[-1] transition-all duration-300 ease-in-out'
                style={{ height: `${progress}%` }}
              ></span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GameOne;
