 
 
 
//  import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Header = ({ isLoggedIn, setIsLoggedIn, onBackgroundChange, isDarkMode }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     setIsMenuOpen(false);
//     navigate('/');
//   };

//   const handleNavClick = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="header  dark-mode">
//       <nav className="nav">
//         <div className="logo">Abrshee Portfolio</div>
        
//         <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
//           <Link to="/" onClick={handleNavClick}>HOME</Link>
//           <Link to="/about" onClick={handleNavClick}>About</Link>
//           <Link to="/projects" onClick={handleNavClick}>Project</Link>
//           <Link to="/contact" onClick={handleNavClick}>Contact</Link>
          
//           {isLoggedIn ? (
//             <Link to="/" onClick={handleLogout}>Logout</Link>
//           ) : (
//             <Link to="/login" onClick={handleNavClick}>Login</Link>
//           )}
//         </div>

//         <div className="nav-controls">
//           <button 
//             className="theme-toggle" 
//             onClick={onBackgroundChange}
//             title="Change Background"
//           >
//             {isDarkMode 
//             ? '☀️' : '🌙'
//             }
//           </button>
//           <div 
//             className="menu-toggle" 
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <span className={`bar ${isMenuOpen ? 'rotate-45' : ''}`}></span>
//             <span className={`bar ${isMenuOpen ? 'opacity-0' : ''}`}></span>
//             <span className={`bar ${isMenuOpen ? '-rotate-45' : ''}`}></span>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;





// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import abs from '../images/Abs.jpg'
// const Header = ({ isLoggedIn, setIsLoggedIn, onBackgroundChange, isDarkMode }) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     setIsMenuOpen(false);
//     navigate('/');
//   };

//   const handleNavClick = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="header">
//       <nav className="nav">
//         <div className="logo">


// <img className='ab' src={abs} />
//         </div>
        
//         <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
//           <Link to="/" onClick={handleNavClick}>HOME</Link>
//           <Link to="/about" onClick={handleNavClick}>About</Link>
//           <Link to="/projects" onClick={handleNavClick}>Project</Link>
//           <Link to="/contact" onClick={handleNavClick}>Contact</Link>
          
//           {isLoggedIn ? (
//             <Link to="/" onClick={handleLogout}>Logout</Link>
//           ) : (
//             <Link to="/login" onClick={handleNavClick}>Login</Link>
//           )}
//         </div>

//         <div className="nav-controls">
//           <button 
//             className="theme-toggle" 
//             onClick={onBackgroundChange}
//             title="Change Background"
//           >
//             {isDarkMode ? '☀️' : '🌙'}
//           </button>
//           <div 
//             className="menu-toggle" 
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             <span className={`bar ${isMenuOpen ? 'rotate-45' : ''}`}></span>
//             <span className={`bar ${isMenuOpen ? 'opacity-0' : ''}`}></span>
//             <span className={`bar ${isMenuOpen ? '-rotate-45' : ''}`}></span>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import abs from '../images/Abs.jpg';

const Header = ({ isLoggedIn, setIsLoggedIn, onBackgroundChange, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setIsMenuOpen(false);
    navigate('/');
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    
    // Check if we're on the home page
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll to welcome section
      setTimeout(() => {
        const welcomeSection = document.getElementById('home');
        if (welcomeSection) {
          welcomeSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      // Already on home page, just scroll to welcome section
      const welcomeSection = document.getElementById('home');
      if (welcomeSection) {
        welcomeSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img className='ab' src={abs} alt="Abs Logo" />
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={handleNavClick}>HOME</Link>
          <Link to="/about" onClick={handleNavClick}>About</Link>
          <Link to="/projects" onClick={handleNavClick}>Project</Link>
          <Link to="/contact" onClick={handleNavClick}>Contact</Link>
          
          {isLoggedIn ? (
            <Link to="/" onClick={handleLogout}>Logout</Link>
          ) : (
            <Link to="/login" onClick={handleNavClick}>Login</Link>
          )}
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

