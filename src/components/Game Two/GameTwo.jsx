import { colorsArray as colors } from '../../Data/data';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Confetti from 'react-confetti';
import livesIcon from '/lives.png';
import exitIcon from '/exit.gif';

//? Shapes array
const shapes = [
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

const GameTwo = () => {
  // const for shape in shapes arr
  const [shapeIndex, setShapeIndex] = useState(0);
  // const for shape color each round
  const [shapeColor, setShapeColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  // const for shape passing number in each round
  const [rounds, setRounds] = useState(0);
  // const for maximum rounds numbers
  const maxRounds = 5;
  // const for round duration
  const [roundDuration, setRoundDuration] = useState(3);
  // const for special colored shape
  const [specialShapeRound, setSpecialShapeRound] = useState(
    Math.floor(Math.random() * maxRounds) + 1
  );
  // const for track game over
  const [gameOver, setGameOver] = useState(false);
  // const for user win
  const [won, setWon] = useState(false);
  // const for user score
  const [score, setScore] = useState(0);
  // const for showing confetti on user's win
  const [showConfetti, setShowConfetti] = useState(false);

  //? Handle click on shape function
  const handleShapeClick = () => {
    if (rounds + 1 === specialShapeRound) {
      setGameOver(true);
      setShowConfetti(false);
      new Audio(import.meta.env.BASE_URL + 'lose.mp3').play();
      toast.error('❌ لقد خسرت! لا تضغط على الشكل الأحمر.');
    } else {
      setScore(score + 1);
      toast.success('أحسنت... 🎉');
    }
  };

  //? Handle restart game function
  const restartGame = (duration) => {
    setShowConfetti(false);
    setRounds(0);
    setScore(0);
    setSpecialShapeRound(Math.floor(Math.random() * maxRounds) + 1);
    setShapeColor(colors[Math.floor(Math.random() * colors.length)]);
    setGameOver(false);
    setWon(false);
    setRoundDuration(duration);
    setShapeIndex((prev) => (prev + 1) % shapes.length);
  };

  //? Start Rendered code
  return (
    //! Start Stop Responding activity section
    <div className='stopResponding-activity-sec relative w-screen h-screen flex flex-col justify-center items-center'>
      {showConfetti && <Confetti className='w-full h-full' />}

      {/* //? Content Section */}
      <div className='content w-full h-full flex'>
        {/* Start Sidebar */}
        <section className='w-1/6 h-full bg-[#0f172a] text-white text-center pt-[67px] border-l-2 flex flex-col justify-center items-center gap-10'>
          {/* //* score */}
          <div className='score-sec w-full flex justify-center items-center gap-3 bg-white text-[#0f172a] py-1'>
            <header className='flex justify-center items-center gap-2 text-xl font-bold'>
              نقاطك
              <img src={livesIcon} alt='lives' className='w-[2rem] h-[2rem]' />
            </header>
            <p className='border-2 font-bold text-3xl w-fit py-2 px-5 rounded-2xl bg-[#0f172a] text-white'>
              {score}
            </p>
          </div>

          {/* //* rounds left */}
          <div className='attemptsLeft-sec w-full flex justify-center items-center gap-3 bg-white text-[#0f172a] py-1'>
            <header className='flex justify-center items-center gap-2 text-xl font-bold'>
              باقي 🚗💨{' '}
            </header>
            <p className='border-2 font-bold text-3xl w-fit py-2 px-5 rounded-2xl bg-[#0f172a] text-white'>
              {5 - rounds}
            </p>
          </div>

          {/* //* levels */}
          <div className='levels-sec w-full flex flex-col gap-5 justify-center items-center'>
            {/* //* easy level */}
            <button
              onClick={() => restartGame(3)}
              className={`${
                !gameOver ? 'hidden' : 'block'
              } text-lg font-bold text-[#0f172a] bg-white px-4 py-2 rounded-3xl cursor-pointer transition-all ease-in-out duration-500 hover:w-full hover:rounded-none`}
            >
              مستوى سهل 🔄
            </button>
            {/* //? medium level */}
            <button
              onClick={() => restartGame(2)}
              className={`${
                !gameOver ? 'hidden' : 'block'
              } text-lg font-bold text-[#0f172a] bg-white px-4 py-2 rounded-3xl cursor-pointer transition-all ease-in-out duration-500 hover:w-full hover:rounded-none`}
            >
              مستوى متوسط 🔄
            </button>
            {/* //! hard level */}
            <button
              onClick={() => restartGame(1)}
              className={`${
                !gameOver ? 'hidden' : 'block'
              } text-lg font-bold text-[#0f172a] bg-white px-4 py-2 rounded-3xl cursor-pointer transition-all ease-in-out duration-500 hover:w-full hover:rounded-none`}
            >
              مستوى صعب 🔄
            </button>
          </div>

          {/* //* buttons */}
          <div className='buttons-sec w-full flex flex-col gap-5 justify-center items-center'>
            <Link
              className='flex justify-center items-center gap-2 w-30 py-2 mx-auto rounded-2xl bg-[#FFF] text-[#0F172A] cursor-pointer text-xl font-semibold text-center transition-all ease-in-out duration-500 hover:w-full hover:rounded-none'
              to='/speak-play-learn/games'
            >
              رجوع{' '}
              <img
                src={exitIcon}
                alt='exit icon'
                className='w-[1.5rem] h-[1.5rem]'
              />
            </Link>
          </div>
        </section>

        {/* //! Start Game */}
        {/* //? Moving Car */}
        <div className='game w-5/6 h-full text-white font-bold overflow-hidden relative flex justify-end items-end'>
          <div className='holder absolute top-0 left-0 size-full'></div>
          {!gameOver ? (
            <motion.svg
              key={rounds}
              width='200'
              height='200'
              viewBox='0 0 24 24'
              className='cursor-pointer mb-[6rem]'
              xmlns='http://www.w3.org/2000/svg'
              fill={rounds + 1 === specialShapeRound ? 'red' : shapeColor}
              stroke={rounds + 1 === specialShapeRound ? 'red' : shapeColor}
              strokeWidth='0.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              initial={{ x: '-150px' }}
              animate={{ x: '100vw' }}
              transition={{
                // duration: Math.max(1, roundDuration - rounds * 0.4),
                duration: roundDuration,
                ease: 'linear',
              }}
              onClick={handleShapeClick}
              onAnimationComplete={() => {
                //! Controls maximum number of rounds, wining and losing situations
                if (rounds + 1 >= maxRounds) {
                  if (score >= 4) {
                    toast.info('أختر مستوي جديد...');
                    setGameOver(true);
                    setWon(true);
                    new Audio(import.meta.env.BASE_URL + 'success.mp3').play();
                    setShowConfetti(true);
                  } else {
                    toast.error('لقد خسرت! لم تضغط 4 أشكال ❌');
                    setGameOver(true);
                    setShowConfetti(false);
                    new Audio(import.meta.env.BASE_URL + 'lose.mp3').play();
                  }
                } else {
                  setRounds(rounds + 1);
                }
              }}
            >
              {shapes[shapeIndex].svg}
            </motion.svg>
          ) : (
            <div className='w-full h-full flex justify-center items-center'>
              <div className='w-1/4 h-1/4 flex justify-center items-center bg-[#0F172A] text-white border-2 rounded-2xl text-3xl font-bold'>
                <h1>{won ? '🎉 أحسنت ! 🎉' : '❌ لقد خسرت ! ❌'}</h1>
              </div>
            </div>
          )}{' '}
        </div>
      </div>
    </div>
  );
};

export default GameTwo;
