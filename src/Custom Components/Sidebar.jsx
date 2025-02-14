import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import numbersIcon from '/numbers.png';
import imagesIcon from '/images.png';
import backIcon from '/back.png';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ gameNumber }) => {
  const gameOneSidebar = [
    {
      linkTitle: 'نشاط الأرقام',
      link: '/speak-play-learn/numbersMemory',
      icon: numbersIcon,
    },
    {
      linkTitle: 'نشاط الصور',
      link: '/speak-play-learn/imagesMemory',
      icon: imagesIcon,
    },
    {
      linkTitle: 'رجوع',
      link: '/speak-play-learn/gameOne',
      icon: backIcon,
    },
  ];
  // const gameTwoSidebar = [];
  // const gameThreeSidebar = [];
  // const gameFourSidebar = [];

  const [renderedSidebar, setRenderedSidebar] = useState([]);

  useEffect(() => {
    switch (gameNumber) {
      case 1:
        setRenderedSidebar(gameOneSidebar);
        break;
      // case 2:
      //   setRenderedSidebar(gameTwoSidebar);
      //   break;
      // case 3:
      //   setRenderedSidebar(gameThreeSidebar);
      //   break;
      // case 4:
      //   setRenderedSidebar(gameFourSidebar);
      //   break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='size-full text-white text-center'>
      <header className='bg-white text-[#C75C5C] font-bold text-2xl py-3 h-[10%]'>
        ألعاب أخرى
      </header>

      <ul className='w-full h-[90%] flex items-center justify-center flex-col gap-10'>
        {renderedSidebar.map((ele) => (
          <li
            className='bg-[#FFF] text-[#C75C5C] py-1 w-fit mx-auto px-5 rounded-3xl'
            key={ele.linkTitle}
          >
            <Link
              to={ele.link}
              className='text-xl font-semibold flex justify-center items-center gap-3'
            >
              {ele.linkTitle}{' '}
              <img src={ele.icon} alt='icon' className='w-[35px] h-[35px]' />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
