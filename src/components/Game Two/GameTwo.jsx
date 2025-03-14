import { colorsArray as colors, shapesArray as shapes } from '../../Data/data';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Confetti from 'react-confetti';
import livesIcon from '/lives.png';
import exitIcon from '/exit.gif';

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
    //* (rounds + 1) because rounds starts from 0 not 1
    if (rounds + 1 === specialShapeRound) {
      setWon(true);
      setScore(score + 1);
      setGameOver(true);
      setShowConfetti(true);
      setShapeColor(colors[Math.floor(Math.random() * colors.length)]);
      new Audio(import.meta.env.BASE_URL + 'success.mp3').play();
      toast.info('أختر مستوي جديد...');
      setTimeout(() => {
        setShowConfetti(false);
      }, 5000);
    } else {
      new Audio(import.meta.env.BASE_URL + 'fail.wav').play();
    }
  };

  //? Handle restart game function
  const restartGame = (duration) => {
    setRounds(0);
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
                //! Controls maximum number of rounds
                if (rounds + 1 >= maxRounds) {
                  toast.info('أختر مستوي جديد...');
                  setGameOver(true);
                  new Audio(import.meta.env.BASE_URL + 'lose.mp3').play();
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
