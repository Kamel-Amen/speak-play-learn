import Sidebar from '../../../Custom Components/Sidebar';

const NumbersMemory = () => {
  return (
    <div className='numbers-activity-sec relative w-screen h-screen flex'>
      {/* {showConfetti && <Confetti className='w-full h-full' />} */}

      {/* Background Image */}
      <div className='holder absolute top-0 left-0 size-full'></div>

      {/* Content */}
      <div className='content flex w-full h-full'>
        {/* Start Sidebar */}
        <section className='w-1/6 bg-[#C75C5C]'>
          <Sidebar gameNumber={1} />
        </section>
      </div>
    </div>
  );
};

export default NumbersMemory;
