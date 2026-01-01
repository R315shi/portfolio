// components/Navbar.jsx
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Container - EXACT same position as animation end */}
      
      {/* Navigation Links */}
      <div className="nav-items">
        <a href="#home" className="nav-link">
          <span className="link-text">Home</span>
        </a>
        <a href="#projects" className="nav-link">
          <span className="link-text">Projects</span>
        </a>
        <a href="#about" className="nav-link">
          <span className="link-text">About</span>
        </a>
        <a href="#contact" className="nav-link">
          <span className="link-text">Contact</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;