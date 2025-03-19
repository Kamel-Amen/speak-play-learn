import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import carPic from '/gameThree-car.png';
import soundPic from '/soundMeter.gif';
import volumePic from '/volume.gif';

const GameThree = () => {
  // const for tracking background Position
  const [backgroundPosition, setBackgroundPosition] = useState(0);
  // const for tracking microphone activity
  const [isListening, setIsListening] = useState(false);
  // const for adjusting and detecting speech volume
  const [speechPowerBar, setSpeechPowerBar] = useState(25);
  // const for storing current volume level
  const [currentVolume, setCurrentVolume] = useState(0); // Display sound level
  // const for storing the AudioContext instance for processing audio
  const audioContextRef = useRef(null);
  // const for storing the AnalyserNode to analyze audio input
  const analyserRef = useRef(null);
  // const for holding the microphone stream
  const mediaStreamRef = useRef(null);
  // const Used for requestAnimationFrame to continuously check sound input
  const animationRef = useRef(null);

  //? const for handling microphone starting
  const startListening = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      audioContextRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();
      const analyser = audioContextRef.current.createAnalyser();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      source.connect(analyser);
      analyser.fftSize = 256;
      analyserRef.current = analyser;

      setIsListening(true);
      analyzeAudio();
    } catch (error) {
      toast.error('هناك عطل في الميكروفون الخاص بك...');
      console.error('Microphone access error:', error);
    }
  };

  //! const for handling microphone stopping
  const stopListening = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
    setIsListening(false);
    cancelAnimationFrame(animationRef.current);
    setCurrentVolume(0);
  };

  //? const for analyzing audio
  const analyzeAudio = () => {
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    //* const for sound checking
    const checkSound = () => {
      analyserRef.current.getByteFrequencyData(dataArray);
      const volume =
        dataArray.reduce((acc, val) => acc + val, 0) / bufferLength;
      setCurrentVolume(volume);

      if (volume > speechPowerBar) {
        const speed = Math.min((volume - speechPowerBar) / 5, 20);
        setBackgroundPosition((prev) => prev - speed);
      }

      animationRef.current = requestAnimationFrame(checkSound);
    };

    checkSound();
  };

  return (
    <div className='gameThree-sec w-screen h-screen flex flex-row overflow-hidden'>
      {/* Sidebar */}
      <section className='sidebar w-1/6 h-full bg-[#0f172a] text-white text-center pt-5 border-l-2 flex flex-col justify-center items-center gap-8 p-4'>
        {/* //? Sound Sense Bar */}
        <section className='soundSense flex flex-col gap-5'>
          <p className='text-md font-bold flex flex-row gap-2 items-center justify-center'>
            تعديل حساسية الصوت
            <img
              src={soundPic}
              alt='sound pic'
              className='w-[2rem] h-[2rem] rounded-3xl'
            />
          </p>
          <input
            type='range'
            min='10'
            max='100'
            value={speechPowerBar}
            onChange={(e) => setSpeechPowerBar(Number(e.target.value))}
            className='w-full cursor-pointer'
          />
          <p className='text-sm'>حساسية الصوت : {speechPowerBar}</p>
        </section>

        <hr className='text-[#f2f2f2] w-50' />

        {/* //! Sound Meter */}
        <section className='soundMeter flex flex-col gap-5 items-center justify-center'>
          <span className='font-bold flex flex-row gap-2'>
            مستوي قوة الصوت
            <img
              src={volumePic}
              alt='volume'
              className='w-[1.7rem] h-[1.7rem] rounded-4xl'
            />
          </span>
          <div className='w-3/4 h-6 bg-gray-800 rounded-md overflow-hidden relative'>
            <div
              className='h-full bg-green-500 transition-all'
              style={{
                width: `${(currentVolume / 100) * 100}%`,
              }}
            ></div>
          </div>
          <p className='text-xs'>{Math.round(currentVolume)}</p>
        </section>

        <hr className='text-[#f2f2f2] w-50' />

        {/* //* Buttons */}
        <button
          onClick={isListening ? stopListening : startListening}
          className='cursor-pointer bg-[#f1f1f1] text-[#0f172a] font-bold px-6 py-2 rounded-2xl mt-3 transition ease-in-out duration-150 hover:scale-110'
        >
          {isListening ? 'إنهاء التسجيل...' : 'ابدأ التحدث 🎤'}
        </button>
      </section>

      {/* Game content */}
      <section className='game-content w-5/6 h-full relative flex justify-center items-end'>
        {/* Background */}
        <div
          className='road holder absolute top-0 left-0 size-full'
          style={{ backgroundPositionX: `${backgroundPosition}px` }}
        ></div>

        {/* Game car */}
        <div className='game'>
          <img src={carPic} alt='car' />
        </div>
      </section>
    </div>
  );
};

export default GameThree;
