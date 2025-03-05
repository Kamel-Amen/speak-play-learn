// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useRef } from 'react';
import { toast } from 'react-toastify';

// ? Use Speech Function ( Promise Version )
const useSpeechRecognition = () => {
  const recognitionRef = useRef(null);

  const recognizeSpeech = (setIsListening) => {
    return new Promise((resolve, reject) => {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      //? Checks if browser is supporting web speech api
      if (!SpeechRecognition) {
        alert(
          'المتصفح الخاص بك لا يدعم أستخدام الميكروفون... من فضلك أستخدم جوجل كروم أو مايكروسوفت أيدج.'
        );
        return reject(
          'المتصفح الخاص بك لا يدعم أستخدام الميكروفون... من فضلك أستخدم جوجل كروم أو مايكروسوفت أيدج.'
        );
      }

      // Always create a new instance when starting
      if (recognitionRef.current) {
        recognitionRef.current.abort(); // Ensure previous instance stops
        recognitionRef.current = null;
      }

      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = 'ar-SA';

      //* Recognition Result
      recognition.onresult = (event) => {
        const speechText =
          event.results[event.results.length - 1][0].transcript.trim();
        resolve(speechText);
      };

      //! Recognition Error
      recognition.onerror = (event) => {
        reject(event.error);
      };

      //? Recognition End
      recognition.onend = () => {
        setIsListening(false);
      };

      toast.info('تم بدء التسجيل...');
      recognitionRef.current = recognition;
      recognition.start();
      setIsListening(true);
    });
  };

  //! Stop Recognition function
  const stopRecognition = (setIsListening) => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      recognitionRef.current = null; // Clear instance for next start
      toast.success('تم إنهاء التسجيل بنجاح !');
      setIsListening(false);
    }
  };

  return { recognizeSpeech, stopRecognition };
};

export { useSpeechRecognition };
