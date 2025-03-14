import { Link } from 'react-router-dom';
import { gamesArray as games } from '../Data/data';

const Games = () => {
  return (
    <div className='games h-screen text-center flex overflow-hidden'>
      {games.map((game) => {
        return (
          <section
            className={game.sectionStyle}
            key={game.id}
            data-aos='fade-left'
            data-aos-duration={game.aosDuration}
          >
            <div className='pt-5 flex justify-center items-center h-[20%] gap-2'>
              <header className='text-[1.2rem] font-bold w-[60%]'>
                {game.title}
              </header>
              <img
                src={game.icon}
                alt='game icon'
                className='w-[60px] h-[60px]'
              />
            </div>

            <ul className='h-fit pt-5'>
              {game.games.map((ele) => (
                <li className={ele.gameStyle} key={ele.gameTitle}>
                  <Link to={ele.link} className={ele.linkColor}>
                    {ele.gameTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
};

export default Games;
