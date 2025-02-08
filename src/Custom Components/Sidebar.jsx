/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import back from '/back.png';

const Sidebar = ({ gameNumber }) => {
  const gameOneSidebar = [
    {
      linkTitle: 'رجوع',
      link: '/games',
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
  }, []);

  return (
    <section className='size-full text-white text-center'>
      <header className='bg-white text-[#C75C5C] font-bold text-2xl py-3 h-[10%]'>
        ألعاب أخرى
      </header>

      <ul className='w-full h-[90%] pt-20'>
        {renderedSidebar.map((ele) => (
          <li
            className='bg-[#FFF] text-[#C75C5C] py-1 w-fit mx-auto px-5 rounded-3xl'
            key={ele.linkTitle}
          >
            <Link
              to={ele.link}
              className='text-xl font-semibold flex justify-center items-center'
            >
              {ele.linkTitle}{' '}
              <img src={back} alt='back' className='ms-3 w-[35px] h-[35px]' />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
