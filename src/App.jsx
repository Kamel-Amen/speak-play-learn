import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './Custom Components/Navbar';
import Home from './components/homepage/Home';
import Games from './components/Games';
import GameOne from './components/Game One/GameOne';
import GameTwo from './components/Game Two/GameTwo';
import GameThree from './components/Game Three/GameThree';
import GameFour from './components/Game Four/GameFour';
import NotFound from './Custom Components/NotFound';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/speak-play-learn' element={<Home />} />
        <Route path='/games' element={<Games />} />
        <Route path='/gameOne' element={<GameOne />} />
        <Route path='/gameTwo' element={<GameTwo />} />
        <Route path='/gameThree' element={<GameThree />} />
        <Route path='/gameFour' element={<GameFour />} />
        <Route path='*' element={<NotFound />} />{' '}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
