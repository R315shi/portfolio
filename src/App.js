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
  useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // whether animation should happen only once
  });
  }, []);
  return (
    <div>
      <Background/>
      <LogoAnimation>
        <Navbar/>
        <CursorFollower />
        <MainComponents/>
     </LogoAnimation>
    </div>
  );
}

export default App;
