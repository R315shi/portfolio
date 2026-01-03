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

  // Initialize AOS when animation completes
  useEffect(() => {
    if (isComplete && typeof window !== 'undefined') {
      // Import AOS dynamically to avoid SSR issues
      import('aos').then((AOS) => {
        AOS.init({
          duration: 800,
          once: true,
          offset: 100,
        });
        AOS.refresh(); // Refresh to detect newly visible elements
      });
    }
  }, [isComplete]);

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