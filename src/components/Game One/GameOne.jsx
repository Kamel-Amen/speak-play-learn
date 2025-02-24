import { Link } from 'react-router-dom';
import numbersIcon from '/numbers.png';
import imagesIcon from '/images.png';
import joystick from '/games.png';

const GameOne = () => {
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
