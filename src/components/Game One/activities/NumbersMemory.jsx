import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { generateNewNumberArray } from '../../../Custom/customFunctions';
import { numbersArray } from '../../../Data/data';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import Confetti from 'react-confetti';
import downIcon from '/down.gif';
import levelsIcon from '/levels.png';
import clockIcon from '/clock.gif';
import exitIcon from '/exit.gif';

const levels = [
  {
    title: 'المستوي الأول',
    numbersCount: 3,
  },
  {
    title: 'المستوي الثاني',
    numbersCount: 4,
  },
  {
    title: 'المستوي الثالث',
    numbersCount: 5,
  },
  {
    title: 'المستوي الرابع',
    numbersCount: 6,
  },
  {
    title: 'المستوي الخامس',
    numbersCount: 7,
  },
  {
    title: 'المستوي السادس',
    numbersCount: 8,
  },
];

// ! Component
const NumbersMemory = () => {
  // ? Initialized consts
  const [numbers, setNumbers] = useState([]);
  const [count, setCount] = useState(0);
  const [recognizedSpeech, setRecognizedSpeech] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  const [hideNumbers, setHideNumbers] = useState(false);
  const [progress, setProgress] = useState(0);
  const timeInterval = useRef(null); // Store interval ID
  const [showConfetti, setShowConfetti] = useState(false);

  let recognition;

  // ! Hooks
  useEffect(() => {
    toast.info('أختر مستوي لبدأ اللعب ℹ️', {
      className: 'toast toast-info',
    });
  }, []);

  const intervals = () => {
    // Clear any existing interval before starting a new one
    if (timeInterval.current) {
      clearInterval(timeInterval.current);
    }
    // ? Time Interval Function and Stop recognition after the selected time limit
    timeInterval.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timeInterval.current);
          setHideNumbers(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // ? Build Function
  const buildGame = (title, count) => {
    setHideNumbers(false);

    setStartGame(true);
    afterResult(count);
    setProgress(0);

    intervals();
  };

  // ? Reset Game Function
  const afterResult = (count) => {
    setTimeLeft(5);
    intervals();
    setNumbers([]);
    setCount(count);
    setNumbers(generateNewNumberArray(numbersArray, count));
    setIsListening(false);
  };

  // ? Recognizing speech function
  const recognizeSpeechFunc = () => {
    return new Promise((resolve, reject) => {
      recognition = new (window.SpeechRecognition ||
        window.webkitSpeechRecognition)();
      recognition.lang = 'ar-SA';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onresult = (event) => {
        const speechText = event.results[0][0].transcript.trim();
        resolve(speechText);
        setRecognizedSpeech(speechText);
        setHideNumbers(false);
      };

      recognition.onerror = (event) => {
        reject(event.error);
        toast.error('خطأ !', {
          className: 'toast toast-error',
        });
      };
    });
  };

  // ? Check Numbers function
  const checkNumbers = async () => {
    try {
      const spokenText = await recognizeSpeechFunc();
      // * console.log('User said:', spokenText);
      setRecognizedSpeech(spokenText);

      // * Split spoken text into words
      const spokenNumbers = spokenText.replace(/\D/g, '').split('');

      // * Check which numbers are valid
      let correctNumbers = [];
      for (let i = 0; i < spokenNumbers.length; i++) {
        for (let x = 0; x < numbers.length; x++) {
          if (
            spokenNumbers[i] === numbers[x] &&
            !correctNumbers.includes(spokenNumbers[i])
          ) {
            correctNumbers.push(spokenNumbers[i]);
          }
        }
      }

      // ? Check Correct Numbers
      if (correctNumbers.length >= count) {
        setShowConfetti(true);
        toast.success('أحسنت...✅', {
          className: 'toast toast-success',
        });
        afterResult(count);
        setProgress((prev) => (prev >= 100 ? 100 : prev + 20));
        setTimeout(() => {
          setShowConfetti(false);
        }, 5000);
      } else {
        toast.error('خطأ حاول مرة أخري ! ❌', {
          className: 'toast toast-error',
        });
        afterResult(count);
      }
    } catch (error) {
      console.error('Speech recognition error:', error);
      toast.error('خطأ حاول مرة أخري بصوت أعلي ! ❌', {
        className: 'toast toast-error',
      });
      afterResult(count);
    }
  };

  // ? Handle Start Speech Function
  const handleStartSpeech = () => {
    if (!recognition) checkNumbers();
    recognition.start();
    setIsListening(true);
  };

  // ! Handle Stop Speech Function
  const handleStopSpeech = () => {
    if (recognition) recognition.stop();
    setIsListening(false);
  };

  return (
    <div className='numbers-activity-sec relative w-screen h-screen flex'>
      {showConfetti && <Confetti className='w-full h-full' />}

      {/* Background Image */}
      <div className='holder absolute top-0 left-0 size-full'></div>

      {/* Content */}
      <div className='content flex w-full h-full'>
        {/* Start Sidebar */}
        <section className='w-1/6 h-full bg-[#C75C5C] text-white text-center pt-[67px]'>
          <header className='bg-white text-[#C75C5C] font-bold text-2xl h-[10%] flex justify-center items-center'>
            <img
              src={levelsIcon}
              alt='Levels Icon'
              className='w-[30px] h-[30px] me-2'
            />
            المستويات
          </header>

          <ul className='w-full h-[90%] flex items-center justify-center flex-col gap-5'>
            {levels.map((level) => (
              <li className='bg-transparent w-full' key={level.title}>
                <button
                  className='w-50 py-2 mx-auto rounded-2xl bg-[#FFF] text-[#C75C5C] cursor-pointer text-lg font-semibold text-center transition-all ease-in-out duration-300 hover:w-full hover:rounded-none'
                  onClick={() => buildGame(level.title, level.numbersCount)}
                >
                  {level.title}{' '}
                </button>
              </li>
            ))}
            <li className='bg-transparent w-full'>
              <Link
                className='flex justify-center items-center gap-2 w-30 py-2 mx-auto rounded-2xl bg-[#FFF] text-[#C75C5C] cursor-pointer text-2xl font-semibold text-center transition-all ease-in-out duration-300 hover:w-full hover:rounded-none'
                to='/speak-play-learn/gameOne'
              >
                رجوع{' '}
                <img
                  src={exitIcon}
                  alt='exit icon'
                  className='w-[40px] h-[40px]'
                />
              </Link>
            </li>
          </ul>
        </section>

        {/* Start Numbers Activity */}
        <section className='w-5/6 text-white font-bold flex'>
          {/* Game Board */}
          <div className='gameBoard w-5/6 flex flex-col justify-center items-center gap-10 mt-10'>
            {/* Header */}
            <p
              className={`flex justify-center items-center text-lg ${
                startGame ? 'block' : 'hidden'
              }`}
            >
              أضغط علي زر &apos;أبدأ التحدث&apos; وقم بنطق الأرقام التي بداخل
              المربع
              <img
                src={downIcon}
                alt='down icon'
                className='rounded-4xl ms-4'
              />
            </p>

            {/* Numbers */}
            <section className='w-fit overflow-hidden'>
              <span className='w-full h-full border-2 rounded-3xl bg-[#0F172A] text-[#F3F4F6] text-3xl font-bold flex justify-center items-center gap-7 px-10 py-5'>
                {numbers.map((num) => (
                  <span
                    key={uuidv4()}
                    className={` ${hideNumbers ? 'opacity-0' : 'opacity-100'}`}
                  >
                    {num}
                  </span>
                ))}
              </span>
            </section>

            {/* Recognized Text */}
            <p className='w-[50%] text-center bg-[#0F172A] border-2 border-[#FFF] text-[#FFF] font-bold py-3 rounded-2xl'>
              {recognizedSpeech ? recognizedSpeech : 'النص المكتشف ...'}
            </p>

            {/* Buttons */}
            <section
              className={`btns items-center justify-center gap-5 ${
                startGame ? 'flex' : 'hidden'
              }`}
            >
              {/* Start Button */}
              <button
                className={`cursor-pointer bg-[#0F172A] border-2 border-[#FFF] text-[#FFF] px-10 font-bold py-2 rounded-3xl hover:scale-110 transition duration-150 ease-in-out ${
                  isListening ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={handleStartSpeech}
                disabled={isListening}
              >
                {isListening ? 'يستمع ...' : '🎤 أبدأ التحدث'}
              </button>

              {/* End Button */}
              <button
                className={`cursor-pointer bg-[#0F172A] border-2 border-[#FFF] text-[#FFF] px-10 font-bold py-2 rounded-3xl hover:scale-110 transition duration-150 ease-in-out ${
                  !isListening ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={handleStopSpeech}
                disabled={!isListening}
              >
                إنهاء التسجيل...
              </button>
            </section>
          </div>

          {/* Progress bar */}
          <div
            className={`progress-bar w-1/6 h-full flex flex-col justify-end gap-5 ${
              startGame ? 'block' : 'hidden'
            }`}
          >
            <h2 className='w-[75%] text-2xl flex justify-center items-center gap-3'>
              <img
                src={clockIcon}
                alt='clock icon'
                className='w-[3rem] h-[3rem] rounded-4xl'
              />
              وقتك !
            </h2>
            <div className='timer w-[75%] h-[12%] flex justify-center items-center text-4xl rounded-2xl bg-[#0F172A] text-[#F3F4F6] border-4 border-[#F3F4F6]'>
              {timeLeft}
            </div>
            <div className='bar-holder w-[75%] h-[60%] rounded-tr-4xl rounded-tl-4xl overflow-hidden border-2 border-t-8 border-b-0 flex justify-center items-center font-bold relative'>
              <p className='flex text-xl'>
                تقدمك <span className='ms-2'>{progress} %</span>
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

export default NumbersMemory;
