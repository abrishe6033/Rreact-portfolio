import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import abrishee from '../images/abrishee.jpg';

const Header = ({ onBackgroundChange, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const welcomeSection = document.getElementById('home');
        if (welcomeSection) {
          welcomeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const welcomeSection = document.getElementById('home');
      if (welcomeSection) {
        welcomeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img className='ab' src={abrishee} alt="Abs Logo" />
        </div>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={handleNavClick}>HOME</Link>
          <Link to="/about" onClick={handleNavClick}>About</Link>
          <Link to="/projects" onClick={handleNavClick}>Project</Link>
          <Link to="/contact" onClick={handleNavClick}>Contact</Link>
        </div>

        <div className="nav-controls">
          <button
            className="theme-toggle"
            onClick={onBackgroundChange}
            title="Change Background"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <div
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`bar ${isMenuOpen ? 'rotate-45' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`bar ${isMenuOpen ? '-rotate-45' : ''}`}></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
