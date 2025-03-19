import { useState, useRef } from 'react';
import carPic from '/gameThree-car.png';

const GameThree = () => {
  const [position, setPosition] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [speechThreshold, setSpeechThreshold] = useState(50); // Adjustable threshold
  const [currentVolume, setCurrentVolume] = useState(0); // Display sound level
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const animationRef = useRef(null);

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
      console.error('Microphone access error:', error);
    }
  };

  const stopListening = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
    setIsListening(false);
    cancelAnimationFrame(animationRef.current);
    setCurrentVolume(0); // Reset sound meter
  };

  const analyzeAudio = () => {
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const checkSound = () => {
      analyserRef.current.getByteFrequencyData(dataArray);
      const volume =
        dataArray.reduce((acc, val) => acc + val, 0) / bufferLength;
      setCurrentVolume(volume); // Update sound meter

      if (volume > speechThreshold) {
        setPosition((prev) => prev - 5); // Move background when speech is detected
      }

      animationRef.current = requestAnimationFrame(checkSound);
    };

    checkSound();
  };

  return (
    <div className='gameThree-sec w-screen h-screen flex flex-row overflow-hidden'>
      {/* Sidebar */}
      <section className='sidebar w-1/6 h-full bg-[#0f172a] text-white text-center pt-5 border-l-2 flex flex-col justify-center items-center gap-4 p-4'>
        <p className='text-lg'>Adjust Sensitivity</p>
        <input
          type='range'
          min='10'
          max='100'
          value={speechThreshold}
          onChange={(e) => setSpeechThreshold(Number(e.target.value))}
          className='w-3/4 cursor-pointer'
        />
        <p className='text-sm'>Threshold: {speechThreshold}</p>

        {/* Sound Meter */}
        <div className='w-3/4 h-6 bg-gray-800 rounded-md overflow-hidden relative'>
          <div
            className='h-full bg-green-500 transition-all'
            style={{
              width: `${(currentVolume / 100) * 100}%`,
            }}
          ></div>
        </div>
        <p className='text-xs'>{Math.round(currentVolume)}</p>

        {/* Start/Stop Button */}
        <button
          onClick={isListening ? stopListening : startListening}
          className='cursor-pointer bg-amber-800 px-6 py-2 rounded-lg mt-3'
        >
          {isListening ? 'Stop' : 'Drive'}
        </button>
      </section>

      {/* Game content */}
      <section className='game-content w-5/6 h-full relative flex justify-center items-end'>
        {/* Background */}
        <div
          className='road holder absolute top-0 left-0 size-full'
          style={{ backgroundPositionX: `${position}px` }}
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
