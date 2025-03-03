import { useState } from 'react';
import { Link } from 'react-router-dom';
import { picturesArray } from '../../../Data/data';
import exitIcon from '/exit.gif';
import downIcon from '/down.gif';
import clockIcon from '/clock.gif';
import { generateNewPicturesArray } from '../../../Custom/customFunctions';

const ImagesMemory = () => {
  // Start game variable
  const [gameStarted, setGameStarted] = useState(false);
  // Pictures Array
  const [picturesArr, setPicturesArr] = useState([]);

  //? startGame Function
  const startGame = () => {
    setPicturesArr(generateNewPicturesArray(picturesArray));
    setGameStarted(true);
    // console.log('Game Started');
  };

  return (
    // ! Start Pictures Activity Section
    <section className='pictures-activity-sec relative w-screen h-screen flex'>
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

        {/* //? Start Numbers Activity */}
        <section className='w-5/6 text-white font-bold flex'>
          {/* //? GameBoard */}
          <div className='gameBoard w-full flex flex-col justify-center items-center gap-7 mt-10'>
            {/* //* Header */}
            <p className='flex justify-center items-center text-lg'>
              أضغط علي زر &apos;أبدأ التحدث&apos; وقم بنطق الصور التي بداخل
              المربع
              <img
                src={downIcon}
                alt='down icon'
                className='rounded-4xl ms-4'
              />
            </p>

            {/* //* Pictures Board */}
            <section className='pictures-board w-[90%] h-[48%] px-5 bg-[#0F172A] border-2 border-white text-white font-bold py-3 rounded-2xl flex justify-evenly items-center'>
              {picturesArr.map((pic) => (
                <img key={pic.word} src={pic.url} alt={pic.word} />
              ))}
            </section>

            {/* //* Recognized Text */}
            <p className='w-[50%] text-center bg-[#0F172A] border-2 border-[#FFF] text-[#FFF] font-bold py-3 rounded-2xl'>
              {/* {recognizedSpeech ? recognizedSpeech : 'النص المكتشف ...'} */}
              النص المكتشف ...
            </p>

            {/* //* Buttons */}
            <div className='buttons'>Buttons</div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ImagesMemory;
