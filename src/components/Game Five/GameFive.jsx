import { useState } from 'react';
import video1 from '/video1.mp4';
import video2 from '/video2.mp4';
import video3 from '/video3.mp4';

//* Game four videos array
const videos = [
  {
    id: 1,
    title: 'جملة رقم واحد',
    src: video1,
  },
  {
    id: 2,
    title: 'جملة رقم أثنان',
    src: video2,
  },
  {
    id: 3,
    title: 'جملة رقم ثلاثة',
    src: video3,
  },
];

const GameFive = () => {
  // const for current played video
  const [currentVideo, setCurrentVideo] = useState('');

  const handleVideoSelect = (videoSrc) => {
    console.log(videoSrc);
    setCurrentVideo(videoSrc);
  };

  return (
    <div className='gameFive-sec w-screen h-screen flex flex-row overflow-hidden'>
      {/* Sidebar */}
      <section className='sidebar w-1/6 h-full bg-[#C75C5C] text-white text-center pt-5 border-l-2 flex flex-col justify-center items-center gap-8 p-4'>
        {videos.map((video) => (
          <button
            key={video.id}
            className='w-50 bg-amber-400'
            onClick={() => handleVideoSelect(video.src)}
          >
            {video.title}
          </button>
        ))}
      </section>

      {/* Game content */}
      <section className='game-content w-5/6 h-full relative flex justify-center items-end text-white'>
        {/* Background */}
        <div className='background holder absolute top-0 left-0 size-full'></div>

        {/* Video board */}
        <div className='video-board'>
          {currentVideo ? (
            <video controls autoPlay key={currentVideo}>
              <source src={currentVideo} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>Select a video to play</p>
          )}{' '}
        </div>
      </section>
    </div>
  );
};

export default GameFive;
