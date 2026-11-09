import React, { useEffect, useRef, useState } from 'react';
import './dark.css';
import Contact from './Contact';
import About from './About'; // About እንደገና ገብቷል

// Material Icons imports
import CodeIcon from '@mui/icons-material/Code';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import StorageIcon from '@mui/icons-material/Storage';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PhpIcon from '@mui/icons-material/Php';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CloudIcon from '@mui/icons-material/Cloud';
import StyleIcon from '@mui/icons-material/Style';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import DataUsageIcon from '@mui/icons-material/DataUsage';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const skillRefsRow1 = useRef([]);
  const skillRefsRow2 = useRef([]);
  
  const welcomeText = "Welcome to ";
  const brandText = "ABS";
  
  const welcomeChars = welcomeText.split('');
  const brandChars = brandText.split('');

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const skillsRow1 = [
    { name: 'HTML', level: '90%', class: 'html', icon: CodeIcon, description: 'Semantic HTML, Accessibility' },
    { name: 'CSS', level: '85%', class: 'css', icon: CssIcon, description: 'Flexbox, Grid, Animations' },
    { name: 'JavaScript', level: '80%', class: 'js', icon: JavascriptIcon, description: 'ES6+, DOM, Async' },
    { name: 'React', level: '75%', class: 'react', icon: DeveloperModeIcon, description: 'Hooks, Context, Redux' },
    { name: 'TypeScript', level: '70%', class: 'typescript', icon: CodeIcon, description: 'Types, Interfaces' },
    { name: 'Tailwind', level: '80%', class: 'tailwind', icon: StyleIcon, description: 'Utility-first CSS' }
  ];

  const skillsRow2 = [
    { name: 'Node.js', level: '75%', class: 'node', icon: StorageIcon, description: 'Express, REST APIs' },
    { name: 'Express', level: '70%', class: 'express', icon: RocketLaunchIcon, description: 'Routing, Middleware' },
    { name: 'PHP', level: '65%', class: 'php', icon: PhpIcon, description: 'Laravel, WordPress' },
    { name: 'Python', level: '60%', class: 'python', icon: PsychologyIcon, description: 'Django, Flask' },
    { name: 'MySQL', level: '75%', class: 'mysql', icon: DataUsageIcon, description: 'Database Design' },
    { name: 'MongoDB', level: '65%', class: 'mongodb', icon: CloudIcon, description: 'NoSQL, Mongoose' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillLevel = entry.target;
            const targetWidth = skillLevel.style.getPropertyValue('--target-width');
            setTimeout(() => { skillLevel.style.width = targetWidth; }, 300);
          }
        });
      },
      { threshold: 0.5 }
    );

    skillRefsRow1.current.forEach((ref) => { if (ref) skillObserver.observe(ref); });
    skillRefsRow2.current.forEach((ref) => { if (ref) skillObserver.observe(ref); });

    return () => skillObserver.disconnect();
  }, []);

  return (
    <>
      <section id="home" ref={sectionRef} className="hero" aria-label="Hero section">
        <div className="hero-container">
          <div className="hero-background">
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
            <div className="gradient-orb orb-3"></div>
          </div>

          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-line">
                {welcomeChars.map((char, index) => (
                  <span key={`welcome-${index}`} className={`title-char welcome-char ${isVisible ? 'animated' : ''}`} style={{ animationDelay: `${index * 0.05}s`, color: '#FFFFFF' }} aria-hidden="true">
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
                {brandChars.map((char, index) => (
                  <span key={`brand-${index}`} className={`title-char brand-char ${isVisible ? 'animated' : ''}`} style={{ animationDelay: `${(welcomeChars.length + index) * 0.05}s`, color: '#FFD700' }} aria-hidden="true">
                    {char}
                  </span>
                ))}
              </span>
            </h1>

            <div className="hero-subtitle-container">
              <p className="hero-subtitle">
                <span className="subtitle-text">3rd Year Computer Science Student at Injibara University</span>
              </p>
              <p className="hero-subtitle secondary">
                <span className="subtitle-text">Full Stack Developer | Passionate about Creating Digital Solutions</span>
              </p>
            </div>

            <div id="get" className="hero-button-container">
              <a href="#contact-section" onClick={scrollToContact} className="get-in-touch-btn">
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="skills-container">
          {/* ROW 1 */}
          <div className="skills-row">
            <h3 className="skills-row-title">Frontend Development</h3>
            <div className="skills-scroll-container">
              <div className="skills-track row1-track">
                {skillsRow1.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skill.name} className={`skill-box ${skill.class}`}>
                      <div className="skill-icon-wrapper"><IconComponent className="skill-icon" /></div>
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-description">{skill.description}</div>
                      <div className="skill-bar">
                        <div ref={el => skillRefsRow1.current[index] = el} className="skill-level" style={{ '--target-width': skill.level }}></div>
                      </div>
                      <div className="skill-percentage">{skill.level}</div>
                    </div>
                  );
                })}
                {/* Duplicate */}
                {skillsRow1.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={`${skill.name}-dup`} className={`skill-box ${skill.class}`}>
                      <div className="skill-icon-wrapper"><IconComponent className="skill-icon" /></div>
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-description">{skill.description}</div>
                      <div className="skill-bar"><div className="skill-level" style={{ width: skill.level }}></div></div>
                      <div className="skill-percentage">{skill.level}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ROW 2 */}
          <div className="skills-row">
            <h3 className="skills-row-title">Backend & Database</h3>
            <div className="skills-scroll-container">
              <div className="skills-track row2-track">
                {skillsRow2.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skill.name} className={`skill-box ${skill.class}`}>
                      <div className="skill-icon-wrapper"><IconComponent className="skill-icon" /></div>
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-description">{skill.description}</div>
                      <div className="skill-bar">
                        <div ref={el => skillRefsRow2.current[index] = el} className="skill-level" style={{ '--target-width': skill.level }}></div>
                      </div>
                      <div className="skill-percentage">{skill.level}</div>
                    </div>
                  );
                })}
                {/* Duplicate */}
                {skillsRow2.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={`${skill.name}-dup`} className={`skill-box ${skill.class}`}>
                      <div className="skill-icon-wrapper"><IconComponent className="skill-icon" /></div>
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-description">{skill.description}</div>
                      <div className="skill-bar"><div className="skill-level" style={{ width: skill.level }}></div></div>
                      <div className="skill-percentage">{skill.level}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About ክፍል በHome ገጽ ላይ እንዲታይ እዚህ ጋር ተመልሷል */}
      <div id="about">
        <About />
      </div>

      <div id="contact-section">
        <Contact />
      </div>
    </>
  );
};

export default Home;
