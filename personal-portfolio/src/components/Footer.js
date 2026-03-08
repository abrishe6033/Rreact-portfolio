// import React from 'react';

// const Footer = () => {
//   const socialLinks = [
//     { 
//       name: 'Facebook', 
//       icon: '📘', 
//       url: 'https://facebook.com' 
//     },
//     { 
//       name: 'Telegram', 
//       icon: '', 
//       url: 'https://Telegram/@Abrishees' 
//     },
//     { 
//       name: 'LinkedIn', 
//       icon: '💼', 
//       url: 'https://linkedin.com' 
//     },
//     { 
//       name: 'Instagram', 
//       icon: '📷', 
//       url: 'https://instagram.com' 
//     },
//     { 
//       name: 'YouTube', 
//       icon: '', 
//       url: 'https://youtube.com' 
//     }
//   ];

//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="footer">
//       <div className="social-icons">
//         {socialLinks.map((social) => (
//           <a
//             key={social.name}
//             href={social.url}
//             className="social-icon"
//             target="_blank"
//             rel="noopener noreferrer"
//             title={social.name}
//           >
//             {social.icon}
//           </a>
//         ))}
//       </div>
//       <p>&copy; {currentYear} All rights reserved by Abrshee</p>
//       <p>This project is built with React, Node.js, Express, and MAMP Server</p>
//     </footer>
//   );
// };

// export default Footer;








// import React from 'react';
// import MaterialIcon from '@material/react-material-icon';
// import '@material/react-material-icon/dist/material-icon.css';
// const Footer = () => {
//   const socialLinks = [
//     { 
//       name: 'Facebook', 
//       icon: 'f', 
//       url: 'https://web.facebook.com/profile.php?id=61560390306278' 
//     },
//     { 
//       name: 'Telegram', 
//       icon: '✈️', 
//       url: 'https://t.me/Abrishees' 
//     },
//     { 
//       name: 'LinkedIn', 
//       icon: 'in', 
//       url: 'https://www.linkedin.com/in/abraham-shiferaw-71b1a7315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' 
//     },
//     { 
//       name: 'Instagram', 
//       icon: '📷', 
//       url: 'https://www.instagram.com/abrish_é #?igsh=MWNwdWFzcTMwbHl1Yg==' 
//     },
//     { 
//       name: 'YouTube', 
//       icon: '▶️', 
//       url: 'https://youtube.com' 
//     }
//   ];

//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="footer">
//       <div className="social-icons">
//         {socialLinks.map((social) => (
//           <a
//             key={social.name}
//             href={social.url}
//             className="social-icon"
//             target="_blank"
//             rel="noopener noreferrer"
//             title={social.name}
//           >
//             {social.icon}
//           </a>
//         ))}
//       </div>
//       <p>&copy; {currentYear} All rights reserved by Abrshee</p>
//       <p>This project is built with React, Node.js, Express, and MAMP Server</p>
//     </footer>
//   );
// };

// export default Footer;









// import React from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// import './Footer.css';

// // Material Icons imports
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TelegramIcon from '@mui/icons-material/Telegram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import CodeIcon from '@mui/icons-material/Code';
// import StorageIcon from '@mui/icons-material/Storage';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import DatabaseIcon from '@mui/icons-material/Storage';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import CopyrightIcon from '@mui/icons-material/Copyright';

// const Footer = () => {


//   // const scrollToContact = (e) => {
//   //   e.preventDefault();
//   //   const contactSection = document.getElementById('home');
//   //   if (contactSection) {
//   //     contactSection.scrollIntoView({ 
//   //       behavior: 'smooth',
//   //       block: 'start'
//   //     });
//   //   }
//   // };



//   const socialLinks = [
//     { 
//       name: 'Facebook', 
//       icon: FacebookIcon, 
//       color: '#1877F2',
//       url: 'https://web.facebook.com/profile.php?id=61560390306278' 
//     },
//     { 
//       name: 'Telegram', 
//       icon: TelegramIcon, 
//       color: '#0088cc',
//       url: 'https://t.me/Abrishees' 
//     },
//     { 
//       name: 'LinkedIn', 
//       icon: LinkedInIcon, 
//       color: '#0077b5',
//       url: 'https://www.linkedin.com/in/abraham-shiferaw-71b1a7315' 
//     },
//     { 
//       name: 'Instagram', 
//       icon: InstagramIcon, 
//       color: '#E4405F',
//       url: 'https://www.instagram.com/abrish_é' 
//     },
//     { 
//       name: 'YouTube', 
//       icon: YouTubeIcon, 
//       color: '#FF0000',
//       url: 'https://youtube.com' 
//     }
//   ];

//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="footer">
//       {/* Animated background elements */}
//       <div className="footer-background">
//         <div className="gradient-orb orb-1"></div>
//         <div className="gradient-orb orb-2"></div>
//         <div className="gradient-orb orb-3"></div>
//       </div>

//       <div className="footer-content">
//         {/* Brand Section */}
//         <div className="footer-section brand-section">
//           <h3 className="footer-title">
//             <CodeIcon className="title-icon" />
//             Abrams
//           </h3>
//           <p className="brand-description">
//             3rd Year Computer Science Student at Injibara University
//           </p>
//           <p className="brand-tagline">
//             Full Stack Developer | Passionate about Creating Digital Solutions
//           </p>
//           <div className="tech-badges">
//             <span className="tech-badge">React</span>
//             <span className="tech-badge">Node.js</span>
//             <span className="tech-badge">Express</span>
//             <span className="tech-badge">MAMP</span>
//           </div>
//         </div>

//         {/* Quick Links Section */}
//         <div className="footer-section links-section">
//           <h3 className="footer-title">Quick Links</h3>
//           <ul className="footer-links">

//             <li><a href="#home">Home</a></li>
//             <li><a href="#skills">Skills</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </div>

//         {/* Social Links Section */}
//         <div className="footer-section social-section">
//           <h3 className="footer-title">Connect With Me</h3>
//           <div className="social-grid">
//             {socialLinks.map((social) => {
//               const IconComponent = social.icon;
//               return (
//                 <a
//                   key={social.name}
//                   href={social.url}
//                   className="social-card"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   style={{ '--social-color': social.color }}
//                 >
//                   <div className="social-icon-wrapper">
//                     <IconComponent className="social-icon" />
//                   </div>
//                   <span className="social-name">{social.name}</span>
//                   <div className="social-glow"></div>
//                 </a>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="footer-bottom">
//         <div className="footer-bottom-content">
//           <div className="copyright">
//             <CopyrightIcon className="copyright-icon" />
//             <span>{currentYear} All rights reserved by </span>
//             <span className="highlight">Abrshee</span>
//           </div>
          
//           <div className="tech-stack">
//             <span className="tech-stack-label">Built with</span>
//             <div className="tech-icons">
//               <span className="tech-item">
//                 <CodeIcon className="tech-icon" />
//                 <span className="tech-tooltip">React</span>
//               </span>
//               <span className="tech-item">
//                 <StorageIcon className="tech-icon" />
//                 <span className="tech-tooltip">Node.js</span>
//               </span>
//               <span className="tech-item">
//                 <RocketLaunchIcon className="tech-icon" />
//                 <span className="tech-tooltip">Express</span>
//               </span>
//               <span className="tech-item">
//                 <DatabaseIcon className="tech-icon" />
//                 <span className="tech-tooltip">MAMP</span>
//               </span>
//             </div>
//           </div>

//           <div className="made-with">
//             <span>Made with</span>
//             <FavoriteIcon className="heart-icon" />
//             <span>by Abrams</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

// Material Icons imports
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import DatabaseIcon from '@mui/icons-material/Storage';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CopyrightIcon from '@mui/icons-material/Copyright';
// import HomeIcon from '@mui/icons-material/Home';
// import PsychologyIcon from '@mui/icons-material/Psychology';
// import WorkIcon from '@mui/icons-material/Work';
// import ContactMailIcon from '@mui/icons-material/ContactMail';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    // First navigate to home page if not already there
    if (window.location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete then scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: FacebookIcon, 
      color: '#1877F2',
      url: 'https://web.facebook.com/profile.php?id=61560390306278' 
    },
    { 
      name: 'Telegram', 
      icon: TelegramIcon, 
      color: '#0088cc',
      url: 'https://t.me/Abrishees' 
    },
    { 
      name: 'LinkedIn', 
      icon: LinkedInIcon, 
      color: '#0077b5',
      url: 'https://www.linkedin.com/in/abraham-shiferaw-71b1a7315' 
    },
    { 
      name: 'Instagram', 
      icon: InstagramIcon, 
      color: '#E4405F',
      url: 'https://www.instagram.com/abrish_é' 
    },
    { 
      name: 'YouTube', 
      icon: YouTubeIcon, 
      color: '#FF0000',
      url: 'https://youtube.com' 
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Animated background elements */}
      <div className="footer-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-section brand-section">
          <h3 className="footer-title">
            <CodeIcon className="title-icon" />
            Abrams
          </h3>
          <p className="brand-description">
            3rd Year Computer Science Student at Injibara University
          </p>
          <p className="brand-tagline">
            Full Stack Developer | Passionate about Creating Digital Solutions
          </p>
          <div className="tech-badges">
            <span className="tech-badge">React</span>
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Express</span>
            <span className="tech-badge">MAMP</span>
          </div>
        </div>

        {/* Quick Links Section - UPDATED WITH CLICK HANDLERS */}
        <div className="footer-section links-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>
                {/* <HomeIcon className="link-icon" /> */}
                Home
              </a>
            </li>
            <li>
              <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>
                {/* < className="link-icon" /> */}
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>
                {/* <WorkIcon className="link-icon" /> */}
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact-section')}>
                {/* <ContactMailIcon className="link-icon" /> */}
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="footer-section social-section">
          <h3 className="footer-title">Connect With Me</h3>
          <div className="social-grid">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="social-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ '--social-color': social.color }}
                >
                  <div className="social-icon-wrapper">
                    <IconComponent className="social-icon" />
                  </div>
                  <span className="social-name">{social.name}</span>
                  <div className="social-glow"></div>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright">
            <CopyrightIcon className="copyright-icon" />
            <span>{currentYear} All rights reserved by </span>
            <span className="highlight">Abrshee</span>
          </div>
          
          <div className="tech-stack">
            <span className="tech-stack-label">Built with</span>
            <div className="tech-icons">
              <span className="tech-item">
                <CodeIcon className="tech-icon" />
                <span className="tech-tooltip">React</span>
              </span>
              <span className="tech-item">
                <StorageIcon className="tech-icon" />
                <span className="tech-tooltip">Node.js</span>
              </span>
              <span className="tech-item">
                <RocketLaunchIcon className="tech-icon" />
                <span className="tech-tooltip">Express</span>
              </span>
              <span className="tech-item">
                <DatabaseIcon className="tech-icon" />
                <span className="tech-tooltip">MAMP</span>
              </span>
            </div>
          </div>

          <div className="made-with">
            <span>Made with</span>
            <FavoriteIcon className="heart-icon" />
            <span>by Abrams</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;