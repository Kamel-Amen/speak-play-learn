import { useState } from 'react';
import { motion } from 'framer-motion';

const GameTwo = () => {
  const [attempts, setAttempts] = useState(0); // Count car passes (max 5)
  const [specialCarRound, setSpecialCarRound] = useState(
    Math.floor(Math.random() * 5) + 1
  ); // Random round for special car
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [score, setScore] = useState(0); // Track wins

  const handleCarClick = () => {
    if (attempts + 1 === specialCarRound) {
      setWon(true);
      setScore(score + 1);
      setGameOver(true);
      new Audio(import.meta.env.BASE_URL + 'success.mp3').play(); // Play success sound
    } else {
      new Audio(import.meta.env.BASE_URL + 'fail.wav').play(); // Play fail sound if clicked at wrong time
    }
  };

  const handleAnimationComplete = () => {
    if (attempts + 1 >= 5) {
      setGameOver(true);
      new Audio(import.meta.env.BASE_URL + 'lose.mp3').play(); // Play lose sound when game ends
    } else {
      setAttempts(attempts + 1);
    }
  };

  const restartGame = () => {
    setAttempts(0);
    setSpecialCarRound(Math.floor(Math.random() * 5) + 1);
    setGameOver(false);
    setWon(false);
  };

  return (
    //! Start Stop Responding activity section
    <div className='stopResponding-activity-sec relative w-screen h-screen flex flex-col justify-center items-center'>
      {/* //? Background Image */}
      <div className='holder absolute top-0 left-0 size-full'></div>

      {/* //? Moving Plane */}
      <section className='content w-full h-[50%]'></section>

      {/* //? Moving Car */}
      <div className='w-full h-[50%] overflow-hidden relative flex justify-end items-center'>
        <button
          onClick={() =>
            new Audio(import.meta.env.BASE_URL + 'success.mp3').play()
          }
          className='bg-amber-400 cursor-pointer p-5 mx-10'
        >
          Play Sound fixed
        </button>
        {/* <motion.svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='#f00'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='w-[10rem] h-[5rem] cursor-pointer absolute'
          animate={isPaused ? {} : { x: ['-150px', '100vw'] }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: 'linear',
            repeatType: 'loop',
          }}
          onClick={() => setIsPaused(!isPaused)}
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none' />
          <path d='M14 5a1 1 0 0 1 .694 .28l.087 .095l3.699 4.625h.52a3 3 0 0 1 2.995 2.824l.005 .176v4a1 1 0 0 1 -1 1h-1.171a3.001 3.001 0 0 1 -5.658 0h-4.342a3.001 3.001 0 0 1 -5.658 0h-1.171a1 1 0 0 1 -1 -1v-6l.007 -.117l.008 -.056l.017 -.078l.012 -.036l.014 -.05l2.014 -5.034a1 1 0 0 1 .928 -.629zm-7 11a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m10 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m-6 -9h-5.324l-1.2 3h6.524zm2.52 0h-.52v3h2.92z' />
        </motion.svg> */}
        <h2>Score: {score}</h2>
        {!gameOver ? (
          <motion.svg
            key={attempts} // Restart animation each time
            width='100'
            height='50'
            viewBox='0 0 24 24'
            fill={attempts + 1 === specialCarRound ? 'red' : 'blue'} // Change color on special round
            xmlns='http://www.w3.org/2000/svg'
            style={{
              cursor: 'pointer',
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
            initial={{ x: '-150px' }}
            animate={{ x: '100vw' }}
            transition={{ duration: 3, ease: 'linear' }}
            onClick={handleCarClick}
            onAnimationComplete={handleAnimationComplete}
          >
            <path d='M5 11L8 6H16L19 11V17H18C18 18.1 17.1 19 16 19C14.9 19 14 18.1 14 17H10C10 18.1 9.1 19 8 19C6.9 19 6 18.1 6 17H5V11Z' />
            <circle cx='7.5' cy='17.5' r='1.5' />
            <circle cx='16.5' cy='17.5' r='1.5' />
          </motion.svg>
        ) : (
          <div>
            <h1>{won ? '🎉 You Win! 🎉' : '❌ You Lose! ❌'}</h1>
            <button
              onClick={restartGame}
              style={{
                padding: '10px 20px',
                fontSize: '18px',
                cursor: 'pointer',
              }}
            >
              🔄 Play Again
            </button>
          </div>
        )}{' '}
      </div>
    </div>
  );
};

export default GameTwo;
