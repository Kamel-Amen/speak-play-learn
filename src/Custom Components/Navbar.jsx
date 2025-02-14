import { Link } from 'react-router-dom';
import logo from '/games.png';

const Navbar = () => {
  return (
    <nav
      className='font-cairo flex justify-between py-2 px-7 items-center border-b border-gray-500 bg-gray-100 fixed w-full z-10'
      data-aos='fade-down'
      data-aos-duration='1500'
    >
      <div className='flex items-center text-2xl font-bold'>
        <img
          src={logo}
          alt='logo'
          className='bg-[#C75C5C] rounded-full me-3 rotate-effect'
          width={50}
          height={50}
        />
        تكلم.. ألعب.. وتعلم !!
      </div>

      <ul className='flex'>
        <li className='navbar-btn text-base py-1 px-3'>
          <Link to='/speak-play-learn'>الصفحة الرئيسية</Link>
        </li>
        <li className='ms-4 navbar-btn text-base py-1 px-3'>
          <Link to='/speak-play-learn/games'>اﻷلعاب</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
