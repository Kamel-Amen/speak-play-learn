import { motion } from 'framer-motion';
import { useState } from 'react';

const GameTwo = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      style={{
        overflow: 'hidden',
        width: '100vw',
        height: '200px',
        background: '#ddd',
      }}
    >
      <motion.svg
        width='100'
        height='50'
        viewBox='0 0 24 24'
        fill='blue'
        xmlns='http://www.w3.org/2000/svg'
        animate={isPaused ? {} : { x: ['-100px', '100vw'] }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: 'linear',
          repeatType: 'loop',
        }}
        style={{ cursor: 'pointer' }}
        onClick={() => setIsPaused(!isPaused)}
      >
        <path d='M5 11L8 6H16L19 11V17H18C18 18.1 17.1 19 16 19C14.9 19 14 18.1 14 17H10C10 18.1 9.1 19 8 19C6.9 19 6 18.1 6 17H5V11Z' />
        <circle cx='7.5' cy='17.5' r='1.5' />
        <circle cx='16.5' cy='17.5' r='1.5' />
      </motion.svg>
      {/* <svg
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
      </svg>{' '} */}
      {/* <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='#f00'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M14 5a1 1 0 0 1 .694 .28l.087 .095l3.699 4.625h.52a3 3 0 0 1 2.995 2.824l.005 .176v4a1 1 0 0 1 -1 1h-1.171a3.001 3.001 0 0 1 -5.658 0h-4.342a3.001 3.001 0 0 1 -5.658 0h-1.171a1 1 0 0 1 -1 -1v-6l.007 -.117l.008 -.056l.017 -.078l.012 -.036l.014 -.05l2.014 -5.034a1 1 0 0 1 .928 -.629zm-7 11a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m10 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m-6 -9h-5.324l-1.2 3h6.524zm2.52 0h-.52v3h2.92z' />
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='#0ff'
      >
        <path stroke='none' d='M0 0h24v24H0z' fill='none' />
        <path d='M7 3.34a10 10 0 1 1 -4.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 4.995 -8.336z' />
      </svg> */}
    </div>
  );
};

export default GameTwo;
