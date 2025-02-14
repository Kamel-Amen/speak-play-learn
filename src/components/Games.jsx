import { Link } from 'react-router-dom';
import interaction from '/interaction.png';
import brain from '/brain.png';
import flexibility from '/flexibility.png';
import focus from '/focus.png';

const Games = () => {
  const games = [
    {
      id: 1,
      title: 'ألعاب التثبيط | كف الأستجابة',
      icon: interaction,
      sectionStyle:
        'w-1/4 text-[#C75C5C] bg-[#FFF] flex flex-col justify-center items-center h-full',
      aosDuration: 1250,
      games: [
        {
          gameTitle: 'لعبة الذاكرة',
          link: '/speak-play-learn/gameOne',
          gameStyle:
            'game-btn font-bold w-fit mx-auto text-white py-3 px-5 rounded-4xl bg-[#C75C5C] transition duration-300 ease-in-out hover:scale-110',
          linkColor: 'text-[#FFF]',
        },
      ],
    },
    {
      id: 2,
      title: 'ألعاب المرونة المعرفية',
      icon: flexibility,
      sectionStyle:
        'w-1/4 text-[#FFF] bg-[#C75C5C] flex flex-col justify-center items-center h-full',
      aosDuration: 1500,
      games: [],
    },
    {
      id: 3,
      title: 'ألعاب الذاكرة العاملة والذاكرة قصيرة الأمد',
      icon: brain,
      sectionStyle:
        'w-1/4 text-[#C75C5C] bg-[#FFF] flex flex-col justify-center items-center h-full',
      aosDuration: 1750,
      games: [],
    },
    {
      id: 4,
      title: 'ألعاب تبديل الأنتباه | التحويل',
      icon: focus,
      sectionStyle:
        'w-1/4 text-[#FFF] bg-[#C75C5C] flex flex-col justify-center items-center h-full',
      aosDuration: 2000,
      games: [],
    },
  ];

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
            <header className='pt-5 text-[1.2rem] font-bold flex justify-center items-center h-[20%] px-2'>
              {game.title}
              <img
                src={game.icon}
                alt='game icon'
                className='ms-5 w-[60px] h-[60px]'
              />
            </header>

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
