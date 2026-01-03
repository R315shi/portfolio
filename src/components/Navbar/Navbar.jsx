// components/Navbar.jsx
import { useState } from 'react';
import './Navbar.css';
import Burger from './Burger.jsx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* The actual Burger */}
      <Burger isOpen={isMenuOpen} closeMenu={closeMenu} />

      {/* Navigation Links (on desktop) */}
      <div className="nav-items">
        <a href="#home" className="nav-link" onClick={closeMenu}>
          <span className="link-text">Home</span>
        </a>
        <a href="#about" className="nav-link" onClick={closeMenu}>
          <span className="link-text">About</span>
        </a>        
        <a href="#projects" className="nav-link" onClick={closeMenu}>
          <span className="link-text">Projects</span>
        </a>

        <a href="#contact" className="nav-link" onClick={closeMenu}>
          <span className="link-text">Contact</span>
        </a>
      </div>

      {/* Burger Menu Button (on mobile) */}
      <button 
        className={`burger-menu ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </button>
    </nav>
    
  );
};

export default Navbar;