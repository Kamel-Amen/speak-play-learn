import { useState } from 'react';

const GameFour = () => {
  const [text, setText] = useState('');

  const speakText = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = /[\u0600-\u06FF]/.test(text) ? 'ar-EG' : 'en-US'; // Arabic or English
    speechSynthesis.speak(utterance);
  };

  return (
    <div className='p-4 text-center'>
      <img
        src='/cartoon-character.gif'
        alt='Cartoon Character'
        className='mx-auto w-48 mb-4'
      />
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='اكتب جملة هنا / Type a sentence here'
        className='border p-2 w-full max-w-md'
      />
      <button
        onClick={speakText}
        className='mt-2 bg-blue-500 text-white px-4 py-2 rounded'
      >
        Speak
      </button>
    </div>
  );
};

export default GameFour;
