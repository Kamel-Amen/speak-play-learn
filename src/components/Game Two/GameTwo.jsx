import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import livesIcon from '/lives.png';
import exitIcon from '/exit.gif';

// const gradients = [
//   'bg-gradient-to-r from-blue-500 to-green-500',
//   'bg-gradient-to-r from-purple-500 to-pink-500',
//   'bg-gradient-to-r from-yellow-500 to-orange-500',
//   'bg-gradient-to-r from-teal-500 to-indigo-500',
//   'bg-gradient-to-r from-red-500 to-gray-500',
// ];

const shapes = [
  {
    name: 'car',
    color: 'blue',
    svg: (
      <path d='M14 5a1 1 0 0 1 .694 .28l.087 .095l3.699 4.625h.52a3 3 0 0 1 2.995 2.824l.005 .176v4a1 1 0 0 1 -1 1h-1.171a3.001 3.001 0 0 1 -5.658 0h-4.342a3.001 3.001 0 0 1 -5.658 0h-1.171a1 1 0 0 1 -1 -1v-6l.007 -.117l.008 -.056l.017 -.078l.012 -.036l.014 -.05l2.014 -5.034a1 1 0 0 1 .928 -.629z' />
    ),
  },
  {
    name: 'train',
    color: 'green',
    svg: (
      <path d='M3 10v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2z' />
    ),
  },
  { name: 'circle', color: 'purple', svg: <circle cx='12' cy='12' r='8' /> },
];

const GameTwo = () => {
  const [shapeIndex, setShapeIndex] = useState(0);

  // Sidebar var
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

  // const handleAnimationComplete = () => {
  //   if (attempts + 1 >= 5) {
  //     setGameOver(true);
  //     new Audio(import.meta.env.BASE_URL + 'lose.mp3').play(); // Play lose sound when game ends
  //   } else {
  //     setAttempts(attempts + 1);
  //   }
  // };

  const restartGame = () => {
    setAttempts(0);
    setSpecialCarRound(Math.floor(Math.random() * 5) + 1);
    setGameOver(false);
    setWon(false);
    setShapeIndex((prev) => (prev + 1) % shapes.length); // Switch to next shape
  };

  return (
    //! Start Stop Responding activity section
    <div className='stopResponding-activity-sec relative w-screen h-screen flex flex-col justify-center items-center'>
      {/* // <div
    //   className={`relative w-screen h-screen flex flex-col justify-center items-center transition-all duration-500 ${
    //     gradients[attempts % gradients.length]
    //   }`}
    // > */}
      {/* //? Background Image */}

      {/* //? Content Section */}
      <div className='content w-full h-full flex'>
        {/* Start Sidebar */}
        <section className='w-1/6 h-full bg-[#0f172a] text-white text-center pt-[67px] border-l-2 flex flex-col justify-center items-center gap-15'>
          {/* //* score */}
          <div className='score-sec w-full flex flex-col justify-center items-center gap-5'>
            <header className='w-full flex justify-center items-center gap-4 text-xl font-bold bg-white text-[#0f172a] py-3'>
              نقاطك
              <img src={livesIcon} alt='lives' className='w-[2rem] h-[2rem]' />
            </header>
            <p className='border-2 font-bold text-3xl w-fit py-2 px-5 rounded-2xl'>
              {score}
            </p>
          </div>
          {/* //* attempts left */}
          <div className='attemptsLeft-sec w-full flex flex-col justify-center items-center gap-5'>
            <header className='w-full flex justify-center items-center gap-4 text-xl font-bold bg-white text-[#0f172a] py-3'>
              باقي 🚗💨{' '}
            </header>
            <p className='border-2 font-bold text-3xl w-fit py-2 px-5 rounded-2xl'>
              {5 - attempts}
            </p>
          </div>
          {/* //* buttons */}
          <div className='buttons-sec w-full flex flex-col gap-5 justify-center items-center'>
            <button
              onClick={restartGame}
              className={`${
                !gameOver ? 'hidden' : 'block'
              } text-lg font-bold text-[#0f172a] bg-white px-4 py-2 rounded-3xl cursor-pointer transition-all ease-in-out duration-500 hover:w-full hover:rounded-none`}
            >
              ألعب مجددا 🔄
            </button>

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

        {/* Start Game */}
        {/* //? Moving Car */}
        <div className='game w-5/6 h-full text-white font-bold overflow-hidden relative flex justify-end items-end'>
          <div className='holder absolute top-0 left-0 size-full'></div>
          {!gameOver ? (
            <motion.svg
              key={attempts} // Restart animation each time
              // width='300'
              width='200'
              height='200'
              viewBox='0 0 24 24'
              className='cursor-pointer mb-[6rem]'
              // fill={attempts + 1 === specialCarRound ? 'red' : 'blue'} // Change color on special round
              fill={
                attempts + 1 === specialCarRound
                  ? 'red'
                  : shapes[shapeIndex].color
              } // Special color
              xmlns='http://www.w3.org/2000/svg'
              stroke='#111'
              strokeWidth='0.5'
              strokeLinecap='round'
              strokeLinejoin='round'
              initial={{ x: '-150px' }}
              animate={{ x: '100vw' }}
              transition={{
                duration: Math.max(1, 3 - attempts * 0.4),
                // duration: 3,
                ease: 'linear',
              }}
              // onAnimationComplete={handleAnimationComplete}
              onClick={handleCarClick}
              onAnimationComplete={() => {
                if (attempts + 1 >= 5) {
                  setGameOver(true);
                  new Audio(import.meta.env.BASE_URL + 'lose.mp3').play();
                } else {
                  setAttempts(attempts + 1);
                }
              }}
            >
              {/* <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M14 5a1 1 0 0 1 .694 .28l.087 .095l3.699 4.625h.52a3 3 0 0 1 2.995 2.824l.005 .176v4a1 1 0 0 1 -1 1h-1.171a3.001 3.001 0 0 1 -5.658 0h-4.342a3.001 3.001 0 0 1 -5.658 0h-1.171a1 1 0 0 1 -1 -1v-6l.007 -.117l.008 -.056l.017 -.078l.012 -.036l.014 -.05l2.014 -5.034a1 1 0 0 1 .928 -.629zm-7 11a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m10 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m-6 -9h-5.324l-1.2 3h6.524zm2.52 0h-.52v3h2.92z' /> */}
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
