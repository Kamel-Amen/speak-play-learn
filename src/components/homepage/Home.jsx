import { Link } from 'react-router-dom';
import video from '/home-cover-video.mp4';
import joystick from '/games.png';
import whoAreWeCover from '/home-cover-image.jpg';
import lolFace from '/lol.gif';
import brain from '/brain.png';
import flexibility from '/flexibility.png';
import interaction from '/interaction.png';
import focus from '/focus.png';
import Footer from '../../Custom Components/Footer';

const Home = () => {
  return (
    <div className='homepage bg-gray-200 overflow-hidden scroll-smooth'>
      {/* Welcome Section */}
      <section className='welcome-sec relative w-full h-[47.5rem] flex justify-center items-start'>
        {/* Video Section */}
        <video
          className='videoTag brightness-25 absolute w-full h-full'
          autoPlay
          loop
          muted
          data-aos='zoom-in'
          data-aos-duration='1500'
        >
          <source src={video} type='video/mp4' />
        </video>

        {/* Welcome Section */}
        <div className='welcome-phrase text-white relative w-full h-full font-bold flex flex-col justify-center items-center'>
          <p
            className='text-[4rem]'
            data-aos='fade-up'
            data-aos-duration='1500'
          >
            مرحبا بكم في موقع
          </p>
          <p
            className='flex text-[3.5rem] mt-7'
            data-aos='fade-up'
            data-aos-duration='2000'
          >
            <span>تكلم.. ألعب.. وتعلم !</span>
            <img
              src={joystick}
              alt='Joystick'
              className='w-[4rem] h-[4rem] ms-5'
            />
          </p>
        </div>
      </section>

      {/* Who are we? Section */}
      <section className='whoAreWe-sec w-full h-[675px]'>
        <div className='flex size-full'>
          {/* Who are we ? Words */}
          <section className='w-1/2 flex flex-col justify-start items-center pt-[5rem] bg-white'>
            <header
              className='text-[3rem] font-bold underline'
              data-aos='fade-down'
            >
              ماذا نقدم ؟!
            </header>
            <p
              className='w-3/4 mt-10 text-2xl leading-12'
              data-aos='fade-down'
              data-aos-duration='1500'
            >
              موقعنا هو موقع تربوي , قائم علي مساعدة وتأهيل الأطفال ذوي
              الأحتياجات الخاصة بشكل عام وذوي أضطراب التلعثم بشكل خاص , فهو قائم
              علي الألعاب التفاعلية التعليمية لتحسين الوظائف التنفيذية للدماغ
              وعلاج التلعثم بإستخدام أنشطة الكمبيوتر بطريقة ممتعة ومشجعة .
              <img src={lolFace} alt='face' className='inline-block' />
            </p>

            <Link
              to='/speak-play-learn/games'
              className='bg-[#C75C5C] hover:bg-blue-400 text-white font-bold border-b-5 border-gray-300 hover:border-blue-500 rounded flex justify-center cursor-pointer mt-12 px-5 py-3 transition-1'
            >
              ألعب الأن{' '}
              <img
                src={joystick}
                alt='joystick'
                className='w-[25px] h-[25px] ms-3'
              />
            </Link>
          </section>

          {/* Who are we ? Cover */}
          <section className='w-1/2'>
            <img
              src={whoAreWeCover}
              alt='whoAreWeCover'
              data-aos='flip-left'
              data-aos-duration='1500'
            />
          </section>
        </div>
      </section>

      {/* Games Section */}
      <section className='games-sec w-full h-auto relative pt-50 py-20'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          className='absolute top-0 left-0'
        >
          <path
            fill='#C75C5C'
            fillOpacity='1'
            d='M0,192L26.7,176C53.3,160,107,128,160,122.7C213.3,117,267,139,320,138.7C373.3,139,427,117,480,101.3C533.3,85,587,75,640,90.7C693.3,107,747,149,800,154.7C853.3,160,907,128,960,128C1013.3,128,1067,160,1120,181.3C1173.3,203,1227,213,1280,213.3C1333.3,213,1387,203,1413,197.3L1440,192L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z'
          ></path>
        </svg>

        {/* Games */}
        <div className='size-full'>
          <header className='text-4xl font-bold w-fit p-6 mx-auto border-t-3 border-b-3 rounded-2xl border-gray-500 text-center text-white bg-[#C75C5C]'>
            الوظائف التنفيذية للدماغ
          </header>

          {/* Games cards */}
          <section className='flex flex-col mt-20'>
            <div className='w-full flex'>
              <section
                className='w-1/2 bg-[#C75C5C] text-white flex justify-center items-center py-10'
                data-aos='fade-left'
              >
                <span className='text-3xl font-bold'>
                  التثبيط | كف الأستجابة
                </span>
                <img
                  src={interaction}
                  alt='interaction icon'
                  className='ms-5'
                />
              </section>
              <section
                className='w-1/2 text-[#C75C5C] flex justify-center items-center py-10'
                data-aos='fade-right'
                data-aos-duration='1500'
              >
                <span className='text-4xl font-bold'>المرونة المعرفية</span>
                <img
                  src={flexibility}
                  alt='flexibility icon'
                  className='ms-5'
                />
              </section>
            </div>
            <div className='w-full flex'>
              <section
                className='w-1/2 text-[#C75C5C] flex justify-center items-center py-10'
                data-aos='fade-left'
                data-aos-duration='1750'
              >
                <span className='text-2xl font-bold'>
                  الذاكرة العاملة والذاكرة قصيرة الأمد
                </span>
                <img src={brain} alt='brain icon' className='ms-5' />
              </section>
              <section
                className='w-1/2 bg-[#C75C5C] text-white flex justify-center items-center py-10'
                data-aos='fade-right'
                data-aos-duration='2000'
              >
                <span className='text-3xl font-bold'>
                  تبديل الأنتباه | التحويل
                </span>
                <img src={focus} alt='focus icon' className='ms-5' />
              </section>
            </div>
          </section>

          <Link
            to='/speak-play-learn/games'
            className='bg-[#C75C5C] hover:bg-blue-400 text-white font-bold border-b-5 border-gray-400 hover:border-blue-500 rounded-4xl flex justify-center cursor-pointer mt-20 px-5 py-3 transition-1 w-[13rem] mx-auto text-2xl'
            data-aos='fade-up'
            data-aos-duration='1500'
          >
            ألعب الأن{' '}
            <img
              src={joystick}
              alt='joystick'
              className='w-[25px] h-[25px] ms-3'
            />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
