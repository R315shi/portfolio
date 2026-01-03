// components/LogoAnimation.jsx
import { useState, useEffect } from 'react';
import './LogoAnimation.css';

const LogoAnimation = ({ onFinish }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onFinish?.();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={`logo-move ${isAnimating ? 'animating' : 'complete'}`}>
      <img
        src="/images/Logo Black Navbar.png"
        alt="Logo"
        className="logo-img"
      />
    </div>
  );
};


export default LogoAnimation;