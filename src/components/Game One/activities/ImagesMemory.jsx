import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { picturesArray, wordsArray } from '../../../Data/data';
import { generateNewPicturesArray } from '../../../Custom/customFunctions';
import { toast } from 'react-toastify';
import Confetti from 'react-confetti';
import exitIcon from '/exit.gif';
import downIcon from '/down.gif';
import clockIcon from '/clock.gif';

// ? Use Speech Function ( Promise Version )
const useSpeechRecognition = () => {
  const recognitionRef = useRef(null);

  const recognizeSpeech = (setIsListening) => {
    return new Promise((resolve, reject) => {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      //? Checks if browser is supporting web speech api
      if (!SpeechRecognition) {
        alert(
          'المتصفح الخاص بك لا يدعم أستخدام الميكروفون... من فضلك أستخدم جوجل كروم أو مايكروسوفت أيدج.'
        );
        return reject(
          'المتصفح الخاص بك لا يدعم أستخدام الميكروفون... من فضلك أستخدم جوجل كروم أو مايكروسوفت أيدج.'
        );
      }

      // Always create a new instance when starting
      if (recognitionRef.current) {
        recognitionRef.current.abort(); // Ensure previous instance stops
        recognitionRef.current = null;
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = 'ar-SA';

      //* Recognition Result
      recognition.onresult = (event) => {
        const speechText =
          event.results[event.results.length - 1][0].transcript.trim();
        resolve(speechText);
      };

      //! Recognition Error
      recognition.onerror = (event) => {
        reject(event.error);
      };

      //? Recognition End
      recognition.onend = () => {
        setIsListening(false);
      };

      toast.info('تم بدء التسجيل...');
      recognitionRef.current = recognition;
      recognition.start();
      setIsListening(true);
    });
  };

  //! Stop Recognition function
  const stopRecognition = (setIsListening) => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null; // Clear instance for next start
      toast.success('تم إنهاء التسجيل بنجاح !');
      setIsListening(false);
    }
  };

  return { recognizeSpeech, stopRecognition };
};

const ImagesMemory = () => {
  // Start game variable
  const [gameStarted, setGameStarted] = useState(false);
  // Pictures Array
  const [picturesArr, setPicturesArr] = useState([]);
  // Is Listening variable
  const [isListening, setIsListening] = useState(false);
  // Recognition vars
  const [recognizedText, setRecognizedText] = useState('');
  // Confetti var
  const [showConfetti, setShowConfetti] = useState(false);
  const { recognizeSpeech, stopRecognition } = useSpeechRecognition();

  //? startGame Function
  const startGame = () => {
    setPicturesArr(generateNewPicturesArray(picturesArray));
    setGameStarted(true);
  };

  //? resetGame Function
  const resetGame = () => {
    stopRecognition(setIsListening);
    setPicturesArr(generateNewPicturesArray(picturesArray));
    setIsListening(false);
  };

  //? Start Recognition function
  const handleStartRecognition = async () => {
    try {
      const text = await recognizeSpeech(setIsListening);
      setRecognizedText(text);
      const spokenWords = text.split(/\s+/);

      checkWords(spokenWords);
    } catch (error) {
      console.error('Speech Recognition Error:', error);
      setIsListening(false);
    }
  };

  //? Check function
  function checkWords(words) {
    let correctWords = [];

    words.forEach((word) => {
      if (wordsArray.includes(word)) {
        correctWords.push(word);
      }
    });

    if (correctWords.length >= picturesArr.length) {
      toast.success('أحسنت...✅ ', {
        className: 'toast toast-success',
      });

      //* Confetti Statement
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);

      //* Reset Game
      resetGame();
    } else {
      toast.error('خطأ حاول مرة أخري ! ❌', {
        className: 'toast toast-error',
      });

      //* Reset Game
      resetGame();
    }
  }

  return (
    // ! Start Pictures Activity Section
    <section className='pictures-activity-sec relative w-screen h-screen flex'>
      {showConfetti && <Confetti className='w-full h-full' />}

      {/* Background Image */}
      <div className='pictures-activity-holder absolute top-0 left-0 size-full'></div>

      {/* // ! Content */}
      <div className='content flex w-full h-full'>
        {/* //? Start Sidebar */}
        <section className='w-1/6 h-full bg-[#C75C5C] text-white text-center pt-[67px]'>
          <ul className='w-full h-[90%] flex items-center justify-center flex-col gap-5'>
            {/* //? Timer */}
            <li
              className={`w-full flex flex-col justify-center items-center gap-5 transition-all ease-in-out duration-1000 ${
                gameStarted ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className='flex justify-center items-center gap-3 text-3xl font-bold'>
                الوقت{' '}
                <img
                  src={clockIcon}
                  alt='Clock icon'
                  className='rounded-[50%] w-[3rem] h-[3rem]'
                />
              </span>
              <span className='timer w-[50%] py-5 flex justify-center items-center text-4xl rounded-2xl bg-[#0F172A] text-[#F3F4F6] border-4 border-[#F3F4F6]'>
                00
              </span>
            </li>

            {/* //? Start btn */}
            <li className='bg-transparent w-full'>
              <button
                className={`flex justify-center items-center gap-2 w-30 py-2 mx-auto rounded-2xl bg-[#FFF] text-[#C75C5C] cursor-pointer text-xl font-semibold text-center transition-all ease-in-out duration-300 hover:w-full hover:rounded-none ${
                  gameStarted ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={startGame}
                disabled={gameStarted}
              >
                ابدأ اللعب
              </button>
            </li>

            {/* //? New pics btn */}
            <li className='bg-transparent w-full'>
              <button
                className={`flex justify-center items-center gap-2 w-30 py-2 mx-auto rounded-2xl bg-[#FFF] text-[#C75C5C] cursor-pointer text-xl font-semibold text-center transition-all ease-in-out duration-300 hover:w-full hover:rounded-none ${
                  !gameStarted ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() =>
                  setPicturesArr(generateNewPicturesArray(picturesArray))
                }
                disabled={!gameStarted}
              >
                صور جديدة !
              </button>
            </li>

            {/* //? Back btn */}
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

        {/* //? Start Words Activity */}
        <section className='w-5/6 text-white font-bold flex'>
          {/* //? GameBoard */}
          <div className='gameBoard w-full flex flex-col justify-center items-center gap-7 mt-10'>
            {/* //* Header */}
            <p className='flex justify-center items-center text-lg'>
              أضغط علي زر &apos;أبدأ التحدث&apos; وقم بنطق أسماء الصور التي
              بداخل المربع
              <img
                src={downIcon}
                alt='down icon'
                className='rounded-4xl ms-4'
              />
            </p>

            {/* //* Pictures Board */}
            <section className='pictures-board w-[90%] h-[48%] px-5 bg-[#0F172A] border-2 border-white text-white font-bold py-3 rounded-2xl flex justify-evenly items-center'>
              {picturesArr.map((pic) => (
                <img key={pic} src={pic} alt={pic} />
              ))}
            </section>

            {/* //* Recognized Text */}
            <p
              className={`w-[50%] text-center bg-[#0F172A] border-2 border-[#FFF] text-[#FFF] font-bold py-3 rounded-2xl  transition-all ease-in-out duration-700 ${
                gameStarted ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {recognizedText ? recognizedText : 'النص المكتشف ...'}
            </p>

            {/* //* Buttons */}
            <section
              className={`btns items-center justify-center gap-5 ${
                gameStarted ? 'flex' : 'hidden'
              }`}
            >
              {/* Start Button */}
              <button
                className={`cursor-pointer bg-[#0F172A] border-2 border-[#FFF] text-[#FFF] px-10 font-bold py-2 rounded-3xl hover:scale-110 transition duration-150 ease-in-out ${
                  isListening ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={handleStartRecognition}
                disabled={isListening}
              >
                {isListening ? 'يستمع ...' : '🎤 أبدأ التحدث'}
              </button>

              {/* End Button */}
              <button
                className={`cursor-pointer bg-[#0F172A] border-2 border-[#FFF] text-[#FFF] px-10 font-bold py-2 rounded-3xl hover:scale-110 transition duration-150 ease-in-out ${
                  !isListening ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={() => stopRecognition(setIsListening)}
                disabled={!isListening}
              >
                إنهاء التسجيل...
              </button>
            </section>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ImagesMemory;
