import { Link } from 'react-router-dom';
import footerIcon from '/logo.png';

const Footer = () => {
  return (
    <footer className='bg-[#000000] h-[3rem] text-white flex items-center justify-center font-bold'>
      جميع الحقوق محفوظة &copy; {new Date().getFullYear()}
      <Link
        to='https://kamel-amen.github.io/react-portfolio/'
        className='w-[50px] h-full ms-7'
        target='blank'
      >
        <img src={footerIcon} alt='Footer Icon' />
      </Link>
    </footer>
  );
};

export default Footer;
