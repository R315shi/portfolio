import { useEffect, useState, useRef } from 'react';
import './App.css';
import Background from './components/background.jsx';
import CursorFollower from './components/CustomCursor.jsx';
import LogoAnimation from './components/LogoAnimation.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import MainComponents from './components/MainComponents.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const handleIntroFinish = () => {
    setShowContent(true);

    requestAnimationFrame(() => {
      AOS.refreshHard();
    });
  };

  return (
    <div>
      <Background />

      <LogoAnimation onFinish={handleIntroFinish} />

      {showContent && (
        <>
          <Navbar />
          <CursorFollower />
          <MainComponents />
        </>
      )}
    </div>
  );
}


export default App;
