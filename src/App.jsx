import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './Custom Components/Navbar';
import Home from './components/homepage/Home';
import Games from './components/Games';
import GameOne from './components/Game One/GameOne';
import NumbersMemory from './components/Game One/activities/NumbersMemory';
import ImagesMemory from './components/Game One/activities/ImagesMemory';
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
        <Route path='/speak-play-learn/' element={<Home />} />
        <Route path='/speak-play-learn/games' element={<Games />} />
        <Route path='/speak-play-learn/gameOne' element={<GameOne />} />
        <Route
          path='/speak-play-learn/numbersMemory'
          element={<NumbersMemory />}
        />
        <Route
          path='/speak-play-learn/imagesMemory'
          element={<ImagesMemory />}
        />
        <Route path='/speak-play-learn/gameTwo' element={<GameTwo />} />
        <Route path='/speak-play-learn/gameThree' element={<GameThree />} />
        <Route path='/speak-play-learn/gameFour' element={<GameFour />} />
        <Route path='*' element={<NotFound />} />{' '}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
