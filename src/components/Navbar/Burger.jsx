// components/Navbar/Burger.jsx
import { createPortal } from "react-dom";

const Burger = ({ isOpen, closeMenu }) => {
  return createPortal(
    <div className={`mobile-nav-items ${isOpen ? "open" : ""}`}>
      <a href="#home" className="mobile-nav-link" onClick={closeMenu}>Home</a>
      <a href="#projects" className="mobile-nav-link" onClick={closeMenu}>Projects</a>
      <a href="#techstack" className="mobile-nav-link" onClick={closeMenu}>Tech-Stack</a>
      <a href="#about" className="mobile-nav-link" onClick={closeMenu}>About</a>
      <a href="#contact" className="mobile-nav-link" onClick={closeMenu}>Contact</a>
    </div>,
    document.getElementById("root")
  );
};

export default Burger;

