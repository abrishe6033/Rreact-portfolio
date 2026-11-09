import React from 'react';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CodeIcon from '@mui/icons-material/Code';
import CopyrightIcon from '@mui/icons-material/Copyright';
import '../components/Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const socialLinks = [
    { name: 'Facebook', icon: FacebookIcon, color: '#1877F2', url: 'https://web.facebook.com/profile.php?id=61560390306278' },
    { name: 'Telegram', icon: TelegramIcon, color: '#0088cc', url: 'https://t.me/Abrishees' },
    { name: 'LinkedIn', icon: LinkedInIcon, color: '#0077b5', url: 'https://www.linkedin.com/in/abraham-shiferaw-71b1a7315' },
    { name: 'Instagram', icon: InstagramIcon, color: '#E4405F', url: 'https://www.instagram.com/abrish_é' },
    { name: 'YouTube', icon: YouTubeIcon, color: '#FF0000', url: 'https://youtube.com' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="footer-content">
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

        <div className="footer-section links-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a>
            </li>
            <li>
              <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact-section')}>Contact</a>
            </li>
          </ul>
        </div>

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

      {/* Footer Bottom - Only Copyright remains */}
      <div className="footer-bottom">
        <div className="footer-bottom-content" style={{ justifyContent: 'center' }}>
          <div className="copyright">
            <CopyrightIcon className="copyright-icon" />
            <span>{currentYear} All rights reserved by </span>
            <span className="highlight">Abrshee</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
