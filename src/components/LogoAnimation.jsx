// components/LogoAnimation.jsx
import { useState, useEffect } from 'react';
import './LogoAnimation.css';

const LogoAnimation = ({ children }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Animation ends at 1.5s, but logo stays visible
    const timer = setTimeout(() => {
      setIsAnimating(false);
      setIsComplete(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Animated Logo - STAYS VISIBLE in corner */}
      <div className={`logo-move ${isAnimating ? 'animating' : 'complete'}`}>
        <img 
          src="./images/Logo Black Navbar.png" 
          alt="Logo" 
          className="logo-img"
        />
      </div>

      {/* Website Content */}
      <div className={`website-content ${isComplete ? 'visible' : 'hidden'}`}>
        {children}
      </div>
    </>
  );
};

export default LogoAnimation;