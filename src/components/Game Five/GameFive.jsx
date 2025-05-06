import { useState } from 'react';
import { Link } from 'react-router-dom';
import video1 from '/video1.mp4';
import video2 from '/video2.mp4';
import video3 from '/video3.mp4';
import tvIcon from '/tv.gif';
import exitIcon from '/exit.gif';
import videoIcon from '/video.gif';

//* Game four videos array
const videos = [
  {
    id: 1,
    title: '1',
    src: video1,
  },
  {
    id: 2,
    title: '2',
    src: video2,
  },
  {
    id: 3,
    title: '3',
    src: video3,
  },
  {
    id: 4,
    title: '4',
    src: video1,
  },
  {
    id: 5,
    title: '5',
    src: video2,
  },
  {
    id: 6,
    title: '6',
    src: video3,
  },
  {
    id: 7,
    title: '7',
    src: video1,
  },
  {
    id: 8,
    title: '8',
    src: video2,
  },
  {
    id: 9,
    title: '9',
    src: video3,
  },
  {
    id: 10,
    title: '10',
    src: video1,
  },
];

const GameFive = () => {
  // const for current played video
  const [currentVideo, setCurrentVideo] = useState('');

  const handleVideoSelect = (videoSrc) => {
    setCurrentVideo(videoSrc);
  };

  return (
    <div className='gameFive-sec w-screen h-screen flex flex-row overflow-hidden'>
      {/* Sidebar */}
      <section className='sidebar w-1/6 h-full bg-[#C75C5C] text-white overflow-y-scroll pt-20'>
        <div className='flex flex-col justify-center items-center gap-8 p-4'>
          {' '}
          <header className='text-xl font-extrabold flex justify-center items-center gap-2'>
            <img
              src={videoIcon}
              alt='videoIcon'
              className='w-[2rem] h-[2rem] rounded-4xl'
            />
            الفيديوهات{' '}
          </header>
          {videos.map((video) => (
            <button
              key={video.id}
              className='cursor-pointer bg-white text-[#C75C5C] font-bold py-2 px-5 rounded-2xl transition-all ease-in-out duration-150 w-[40%] hover:rounded-none'
              onClick={() => handleVideoSelect(video.src)}
            >
              {video.title}
            </button>
          ))}
          <Link
            to='/speak-play-learn/games'
            className='bg-white text-[#C75C5C] font-bold w-[100%] py-2 rounded-2xl text-xl flex items-center justify-center gap-2'
          >
            رجوع
            <img src={exitIcon} alt='exit' className='w-[2rem] h-[2rem]' />
          </Link>
        </div>
      </section>

      {/* Game content */}
      <section className='game-content w-5/6 h-full relative flex justify-center items-end text-white pb-2'>
        {/* Background */}
        <div className='background holder absolute top-0 left-0 size-full'></div>

        {/* Video board */}
        <div className='video-board w-[100%] h-[85%] relative flex items-center justify-center'>
          {currentVideo ? (
            <video
              controls
              autoPlay
              key={currentVideo}
              className='w-[100%] h-[100%]'
            >
              <source src={currentVideo} type='video/mp4' />
              متصفحك لا يدعم مشاهدة الفيديوهات , قم بتغيير المتصفح !
            </video>
          ) : (
            <p className='bg-[#C75C5C] py-5 px-8 rounded-xl font-bold text-xl flex justify-center items-center gap-3'>
              <img
                src={tvIcon}
                alt='tv icon'
                className='w-[4rem] h-[4rem] rounded-2xl'
              />
              قم بإختيار فيديو للمشاهدة ...
            </p>
          )}{' '}
        </div>
      </section>
    </div>
  );
};

export default GameFive;
