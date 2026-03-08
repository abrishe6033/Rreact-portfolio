// // // import React, { useEffect, useRef } from 'react';

// // import React, { useEffect, useRef, useState } from 'react';




// // // import React, { useEffect, useRef, useState } from 'react';
// // import './HeroSection.css';

// // // const HeroSection = () => {
  

 
// // // };

// // // export default HeroSection;







// // const Home = () => {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const sectionRef = useRef(null);
  
// //   // Split text into arrays for animation
// //   const welcomeText = "Welcome to ";
// //   const brandText = "Abrams";
  
// //   const welcomeChars = welcomeText.split('');
// //   const brandChars = brandText.split('');
// //   // const skillRefs = useRef([]);


// //   // useEffect(() => {
















// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             const skillLevel = entry.target;
// //             const targetWidth = skillLevel.style.getPropertyValue('--target-width');
// //             setTimeout(() => {
// //               skillLevel.style.width = targetWidth;
// //             }, 300);
// //           }
// //         });
// //       },
// //       { threshold: 0.5 }
// //     );

// //     skillRefs.current.forEach((ref) => {
// //       if (ref) observer.observe(ref);
// //     });

// //     return () => observer.disconnect();
// //   }, []);


// //   useEffect(() => {
// //     // Intersection Observer for scroll-based animation
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setIsVisible(true);
// //           observer.disconnect();
// //         }
// //       },
// //       { threshold: 0.3 }
// //     );

// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }

// //     return () => observer.disconnect();
// //   }, []);
















// //   const skills = [
// //     { 
// //       name: 'HTML', 
// //       level: '90%', 
// //       class: 'html', 
// //       icon: '🌐',
// //       description: 'Semantic HTML5, Web Accessibility, SEO Optimization'
// //     },
// //     { 
// //       name: 'CSS', 
// //       level: '70%', 
// //       class: 'css', 
// //       icon: '🎨',
// //       description: 'Flexbox, Grid, Animations, Responsive Design'
// //     },
// //     { 
// //       name: 'JavaScript', 
// //       level: '65%', 
// //       class: 'js', 
// //       icon: '⚡',
// //       description: 'ES6+, DOM Manipulation, Async Programming'
// //     },
// //     { 
// //       name: 'React', 
// //       level: '72%', 
// //       class: 'react', 
// //       icon: '⚛️',
// //       description: 'Hooks, Context API, Component Lifecycle'
// //     },
// //     { 
// //       name: 'Node.js', 
// //       level: '60%', 
// //       class: 'node', 
// //       icon: '🟢',
// //       description: 'Express.js, REST APIs, Middleware, Authentication'
// //     },
// //     { 
// //       name: 'Express', 
// //       level: '70%', 
// //       class: 'express', 
// //       icon: '🚀',
// //       description: 'Routing, Middleware, Error Handling, Security'
// //     }
// //   ];

// //   return (
// //       {/* <div className="hero-section">
// //         <h1>Welcome to Abrams</h1>
// //         <p>3rd Year Computer Science Student at Injibara University</p>
// //         <p>Full Stack Developer | Passionate about Creating Digital Solutions</p>
// //       </div> */}




 
// //     <section 
// //       ref={sectionRef} 
// //       className="hero"
// //       aria-label="Hero section"
// //     >
// //       <div className="hero-container">
// //         {/* Animated Background Elements */}
// //         <div className="hero-background">
// //           <div className="gradient-orb orb-1"></div>
// //           <div className="gradient-orb orb-2"></div>
// //           <div className="gradient-orb orb-3"></div>
// //         </div>

// //         {/* Main Content */}
// //         <div className="hero-content">
// //           <h1 className="hero-title">
// //             <span className="title-line">
// //               {welcomeChars.map((char, index) => (
// //                 <span
// //                   key={`welcome-${index}`}
// //                   className={`title-char welcome-char ${
// //                     isVisible ? 'animated' : ''
// //                   }`}
// //                   style={{ 
// //                     animationDelay: `${index * 0.05}s`,
// //                     color: '#FFFFFF' // Pure white
// //                   }}
// //                   aria-hidden="true"
// //                 >
// //                   {char === ' ' ? '\u00A0' : char}
// //                 </span>
// //               ))}
// //             </span>
            
// //             <span className="title-line brand-line">
// //               {brandChars.map((char, index) => (
// //                 <span
// //                   key={`brand-${index}`}
// //                   className={`title-char brand-char ${
// //                     isVisible ? 'animated' : ''
// //                   }`}
// //                   style={{ 
// //                     animationDelay: `${(welcomeChars.length + index) * 0.05}s`,
// //                     color: '#FFD700' // Gold/Yellow
// //                   }}
// //                   aria-hidden="true"
// //                 >
// //                   {char}
// //                 </span>
// //               ))}
// //             </span>
// //           </h1>

// //           {/* Typing Effect Subtitle */}
// //           <div className="hero-subtitle-container">
// //             <p className="hero-subtitle">
// //               <span className="subtitle-text">
// //                 3rd Year Computer Science Student at Injibara University
// //               </span>
// //             </p>
// //             <p className="hero-subtitle secondary">
// //               <span className="subtitle-text">
// //                 Full Stack Developer | Passionate about Creating Digital Solutions
// //               </span>
// //             </p>
// //           </div>

         

         
// //         </div>
// //       </div>
// //     </section>
  


// //     <section className="home">



// //       <div className="skills-scroll-container">
// //         <div className="skills-track">
// //           {skills.map((skill, index) => (
// //             <div key={skill.name} className={`skill-box ${skill.class}`}>
// //               <div className="skill-icon">{skill.icon}</div>
// //               <div className="skill-name">{skill.name}</div>
// //               <div className="skill-description">{skill.description}</div>
// //               <div className="skill-bar">
// //                 <div 
// //                   ref={el => skillRefs.current[index] = el}
// //                   className="skill-level"
// //                   style={{ '--target-width': skill.level }}
// //                 ></div>
// //               </div>
// //               <div className="skill-percentage">{skill.level}</div>
// //             </div>
// //           ))}
// //           {/* Duplicate for seamless loop */}
// //           {skills.map((skill, index) => (
// //             <div key={`${skill.name}-dup`} className={`skill-box ${skill.class}`}>
// //               <div className="skill-icon">{skill.icon}</div>
// //               <div className="skill-name">{skill.name}</div>
// //               <div className="skill-description">{skill.description}</div>
// //               <div className="skill-bar">
// //                 <div 
// //                   className="skill-level"
// //                   style={{ width: skill.level }}
// //                 ></div>
// //               </div>
// //               <div className="skill-percentage">{skill.level}</div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Home;















// // import React, { useEffect, useRef, useState } from 'react';
// // import './HeroSection.css';

// // const Home = () => {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const sectionRef = useRef(null);
// //   const skillRefs = useRef([]);
  
// //   // Split text into arrays for animation
// //   const welcomeText = "Welcome to ";
// //   const brandText = "Abrams";
  
// //   const welcomeChars = welcomeText.split('');
// //   const brandChars = brandText.split('');

// //   // Skills data
// //   const skills = [
// //     { 
// //       name: 'HTML', 
// //       level: '90%', 
// //       class: 'html', 
// //       icon: '🌐',
// //       description: 'Semantic HTML5, Web Accessibility, SEO Optimization'
// //     },
// //     { 
// //       name: 'CSS', 
// //       level: '70%', 
// //       class: 'css', 
// //       icon: '🎨',
// //       description: 'Flexbox, Grid, Animations, Responsive Design'
// //     },
// //     { 
// //       name: 'JavaScript', 
// //       level: '65%', 
// //       class: 'js', 
// //       icon: '⚡',
// //       description: 'ES6+, DOM Manipulation, Async Programming'
// //     },
// //     { 
// //       name: 'React', 
// //       level: '72%', 
// //       class: 'react', 
// //       icon: '⚛️',
// //       description: 'Hooks, Context API, Component Lifecycle'
// //     },
// //     { 
// //       name: 'Node.js', 
// //       level: '60%', 
// //       class: 'node', 
// //       icon: '🟢',
// //       description: 'Express.js, REST APIs, Middleware, Authentication'
// //     },
// //     { 
// //       name: 'Express', 
// //       level: '70%', 
// //       class: 'express', 
// //       icon: '🚀',
// //       description: 'Routing, Middleware, Error Handling, Security'
// //     }
// //   ];

// //   // Observer for hero section animation
// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setIsVisible(true);
// //           observer.disconnect();
// //         }
// //       },
// //       { threshold: 0.3 }
// //     );

// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }

// //     return () => observer.disconnect();
// //   }, []);

// //   // Observer for skills animation
// //   useEffect(() => {
// //     const skillObserver = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             const skillLevel = entry.target;
// //             const targetWidth = skillLevel.style.getPropertyValue('--target-width');
// //             setTimeout(() => {
// //               skillLevel.style.width = targetWidth;
// //             }, 300);
// //           }
// //         });
// //       },
// //       { threshold: 0.5 }
// //     );

// //     skillRefs.current.forEach((ref) => {
// //       if (ref) skillObserver.observe(ref);
// //     });

// //     return () => skillObserver.disconnect();
// //   }, []);

// //   return (
// //     <>
// //       {/* Hero Section */}
// //       <section 
// //         ref={sectionRef} 
// //         className="hero"
// //         aria-label="Hero section"
// //       >
// //         <div className="hero-container">
// //           {/* Animated Background Elements */}
// //           <div className="hero-background">
// //             <div className="gradient-orb orb-1"></div>
// //             <div className="gradient-orb orb-2"></div>
// //             <div className="gradient-orb orb-3"></div>
// //           </div>

// //           {/* Main Content */}
// //           <div className="hero-content">
// //             <h1 className="hero-title">
// //               <span className="title-line">
// //                 {welcomeChars.map((char, index) => (
// //                   <span
// //                     key={`welcome-${index}`}
// //                     className={`title-char welcome-char ${
// //                       isVisible ? 'animated' : ''
// //                     }`}
// //                     style={{ 
// //                       animationDelay: `${index * 0.05}s`,
// //                       color: '#FFFFFF'
// //                     }}
// //                     aria-hidden="true"
// //                   >
// //                     {char === ' ' ? '\u00A0' : char}
// //                   </span>
// //                 ))}
// //               </span>
              
// //               <span className="title-line brand-line">
// //                 {brandChars.map((char, index) => (
// //                   <span
// //                     key={`brand-${index}`}
// //                     className={`title-char brand-char ${
// //                       isVisible ? 'animated' : ''
// //                     }`}
// //                     style={{ 
// //                       animationDelay: `${(welcomeChars.length + index) * 0.05}s`,
// //                       color: '#FFD700'
// //                     }}
// //                     aria-hidden="true"
// //                   >
// //                     {char}
// //                   </span>
// //                 ))}
// //               </span>
// //             </h1>

// //             {/* Subtitle */}
// //             <div className="hero-subtitle-container">
// //               <p className="hero-subtitle">
// //                 <span className="subtitle-text">
// //                   3rd Year Computer Science Student at Injibara University
// //                 </span>
// //               </p>
// //               <p className="hero-subtitle secondary">
// //                 <span className="subtitle-text">
// //                   Full Stack Developer | Passionate about Creating Digital Solutions
// //                 </span>
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Skills Section */}
// //       <section className="skills-section">
// //         <div className="skills-scroll-container">
// //           <div className="skills-track">
// //             {skills.map((skill, index) => (
// //               <div key={skill.name} className={`skill-box ${skill.class}`}>
// //                 <div className="skill-icon">{skill.icon}</div>
// //                 <div className="skill-name">{skill.name}</div>
// //                 <div className="skill-description">{skill.description}</div>
// //                 <div className="skill-bar">
// //                   <div 
// //                     ref={el => skillRefs.current[index] = el}
// //                     className="skill-level"
// //                     style={{ '--target-width': skill.level }}
// //                   ></div>
// //                 </div>
// //                 <div className="skill-percentage">{skill.level}</div>
// //               </div>
// //             ))}
// //             {/* Duplicate for seamless loop */}
// //             {skills.map((skill, index) => (
// //               <div key={`${skill.name}-dup`} className={`skill-box ${skill.class}`}>
// //                 <div className="skill-icon">{skill.icon}</div>
// //                 <div className="skill-name">{skill.name}</div>
// //                 <div className="skill-description">{skill.description}</div>
// //                 <div className="skill-bar">
// //                   <div 
// //                     className="skill-level"
// //                     style={{ width: skill.level }}
// //                   ></div>
// //                 </div>
// //                 <div className="skill-percentage">{skill.level}</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default Home;

















// import React, { useEffect, useRef, useState } from 'react';
// import './HeroSection.css';

// const Home = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const skillRefs = useRef([]);
  
//   // Split text into arrays for animation
//   const welcomeText = "Welcome to ";
//   const brandText = "Abrams";
  
//   const welcomeChars = welcomeText.split('');
//   const brandChars = brandText.split('');

//   // Skills data
//   // const skills = [
//   //   { 
//   //     name: 'HTML', 
//   //     level: '90%', 
//   //     class: 'html', 
//   //     icon: '🌐',
//   //     description: 'Semantic HTML5, Web Accessibility, SEO Optimization'
//   //   },
//   //   { 
//   //     name: 'CSS', 
//   //     level: '70%', 
//   //     class: 'css', 
//   //     icon: '🎨',
//   //     description: 'Flexbox, Grid, Animations, Responsive Design'
//   //   },
//   //   { 
//   //     name: 'JavaScript', 
//   //     level: '65%', 
//   //     class: 'js', 
//   //     icon: '⚡',
//   //     description: 'ES6+, DOM Manipulation, Async Programming'
//   //   },
//   //   { 
//   //     name: 'React', 
//   //     level: '72%', 
//   //     class: 'react', 
//   //     icon: '⚛️',
//   //     description: 'Hooks, Context API, Component Lifecycle'
//   //   },
//   //   { 
//   //     name: 'Node.js', 
//   //     level: '60%', 
//   //     class: 'node', 
//   //     icon: '🟢',
//   //     description: 'Express.js, REST APIs, Middleware, Authentication'
//   //   },
//   //   { 
//   //     name: 'Express', 
//   //     level: '70%', 
//   //     class: 'express', 
//   //     icon: '🚀',
//   //     description: 'Routing, Middleware, Error Handling, Security'
//   //   }
//   // ];



//   // ROW 1 - Frontend Skills
//   const skillsRow1 = [
//     { 
//       name: 'HTML', 
//       level: '90%', 
//       class: 'html', 
//       icon: '🌐',
//       description: 'Semantic HTML, Accessibility'
//     },
//     { 
//       name: 'CSS', 
//       level: '85%', 
//       class: 'css', 
//       icon: '🎨',
//       description: 'Flexbox, Grid, Animations'
//     },
//     { 
//       name: 'JavaScript', 
//       level: '80%', 
//       class: 'js', 
//       icon: '⚡',
//       description: 'ES6+, DOM, Async'
//     },
//     { 
//       name: 'React', 
//       level: '75%', 
//       class: 'react', 
//       icon: '⚛️',
//       description: 'Hooks, Context, Redux'
//     },
//     { 
//       name: 'TypeScript', 
//       level: '70%', 
//       class: 'typescript', 
//       icon: '📘',
//       description: 'Types, Interfaces'
//     },
//     { 
//       name: 'Tailwind', 
//       level: '80%', 
//       class: 'tailwind', 
//       icon: '🎨',
//       description: 'Utility-first CSS'
//     }
//   ];

//   // ROW 2 - Backend Skills
//   const skillsRow2 = [
//     { 
//       name: 'Node.js', 
//       level: '75%', 
//       class: 'node', 
//       icon: '🟢',
//       description: 'Express, REST APIs'
//     },
//     { 
//       name: 'Express', 
//       level: '70%', 
//       class: 'express', 
//       icon: '🚀',
//       description: 'Routing, Middleware'
//     },
//     { 
//       name: 'PHP', 
//       level: '65%', 
//       class: 'php', 
//       icon: '🐘',
//       description: 'Laravel, WordPress'
//     },
//     { 
//       name: 'Python', 
//       level: '60%', 
//       class: 'python', 
//       icon: '🐍',
//       description: 'Django, Flask'
//     },
//     { 
//       name: 'MySQL', 
//       level: '75%', 
//       class: 'mysql', 
//       icon: '🗄️',
//       description: 'Database Design'
//     },
//     { 
//       name: 'MongoDB', 
//       level: '65%', 
//       class: 'mongodb', 
//       icon: '🍃',
//       description: 'NoSQL, Mongoose'
//     }
//   ];

//   // Observer for skills animation
//   useEffect(() => {
//     const skillObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const skillLevel = entry.target;
//             const targetWidth = skillLevel.style.getPropertyValue('--target-width');
//             setTimeout(() => {
//               skillLevel.style.width = targetWidth;
//             }, 300);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     // Observe Row 1 skills
//     skillRefsRow1.current.forEach((ref) => {
//       if (ref) skillObserver.observe(ref);
//     });

//     // Observe Row 2 skills
//     skillRefsRow2.current.forEach((ref) => {
//       if (ref) skillObserver.observe(ref);
//     });

//     return () => skillObserver.disconnect();
//   }, []);

//   return (
//     <>
//       {/* Your hero section here */}

//       {/* Skills Section */}
//       <section className="skills-section">
//         <div className="skills-container">
          
//           {/* ROW 1 - Frontend Skills */}
//           <div className="skills-row">
//             <h3 className="row-title frontend-title">🎨 Frontend Development</h3>
//             <div className="skills-scroll-container">
//               <div className="skills-track row1-track">
//                 {/* Original frontend skills */}
//                 {skillsRow1.map((skill, index) => (
//                   <div key={skill.name} className={`skill-box ${skill.class}`}>
//                     <div className="skill-icon">{skill.icon}</div>
//                     <div className="skill-name">{skill.name}</div>
//                     <div className="skill-description">{skill.description}</div>
//                     <div className="skill-bar">
//                       <div 
//                         ref={el => skillRefsRow1.current[index] = el}
//                         className="skill-level"
//                         style={{ '--target-width': skill.level }}
//                       ></div>
//                     </div>
//                     <div className="skill-percentage">{skill.level}</div>
//                   </div>
//                 ))}
                
//                 {/* Duplicate for infinite animation */}
//                 {skillsRow1.map((skill, index) => (
//                   <div key={`${skill.name}-dup`} className={`skill-box ${skill.class}`}>
//                     <div className="skill-icon">{skill.icon}</div>
//                     <div className="skill-name">{skill.name}</div>
//                     <div className="skill-description">{skill.description}</div>
//                     <div className="skill-bar">
//                       <div 
//                         className="skill-level"
//                         style={{ width: skill.level }}
//                       ></div>
//                     </div>
//                     <div className="skill-percentage">{skill.level}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ROW 2 - Backend Skills */}
//           <div className="skills-row">
//             <h3 className="row-title backend-title">⚙️ Backend & Database</h3>
//             <div className="skills-scroll-container">
//               <div className="skills-track row2-track">
//                 {/* Original backend skills */}
//                 {skillsRow2.map((skill, index) => (
//                   <div key={skill.name} className={`skill-box ${skill.class}`}>
//                     <div className="skill-icon">{skill.icon}</div>
//                     <div className="skill-name">{skill.name}</div>
//                     <div className="skill-description">{skill.description}</div>
//                     <div className="skill-bar">
//                       <div 
//                         ref={el => skillRefsRow2.current[index] = el}
//                         className="skill-level"
//                         style={{ '--target-width': skill.level }}
//                       ></div>
//                     </div>
//                     <div className="skill-percentage">{skill.level}</div>
//                   </div>
//                 ))}
                
//                 {/* Duplicate for infinite animation */}
//                 {skillsRow2.map((skill, index) => (
//                   <div key={`${skill.name}-dup`} className={`skill-box ${skill.class}`}>
//                     <div className="skill-icon">{skill.icon}</div>
//                     <div className="skill-name">{skill.name}</div>
//                     <div className="skill-description">{skill.description}</div>
//                     <div className="skill-bar">
//                       <div 
//                         className="skill-level"
//                         style={{ width: skill.level }}
//                       ></div>
//                     </div>
//                     <div className="skill-percentage">{skill.level}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// };

// // export default Home;








//   // Observer for hero section animation
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   // Observer for skills animation
//   useEffect(() => {
//     const skillObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const skillLevel = entry.target;
//             const targetWidth = skillLevel.style.getPropertyValue('--target-width');
//             setTimeout(() => {
//               skillLevel.style.width = targetWidth;
//             }, 300);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     skillRefs.current.forEach((ref) => {
//       if (ref) skillObserver.observe(ref);
//     });

//     return () => skillObserver.disconnect();
//   }, []);

//   return (
//     <>
//       {/* Hero Section */}
//       {/* <section 
//         ref={sectionRef} 
//         className="hero"
//         aria-label="Hero section"
//       >
//         <div className="hero-container">
//           <div className="hero-background">
//             <div className="gradient-orb orb-1"></div>
//             <div className="gradient-orb orb-2"></div>
//             <div className="gradient-orb orb-3"></div>
//           </div>

//           <div className="hero-content">
//             <h1 className="hero-title">
//               <span className="title-line">
//                 {welcomeChars.map((char, index) => (
//                   <span
//                     key={`welcome-${index}`}
//                     className={`title-char welcome-char ${
//                       isVisible ? 'animated' : ''
//                     }`}
//                     style={{ 
//                       animationDelay: `${index * 0.05}s`,
//                       color: '#FFFFFF'
//                     }}
//                     aria-hidden="true"
//                   >
//                     {char === ' ' ? '\u00A0' : char}
//                   </span>
//                 ))}
//               </span>
              
//               <span className="title-line brand-line">
//                 {brandChars.map((char, index) => (
//                   <span
//                     key={`brand-${index}`}
//                     className={`title-char brand-char ${
//                       isVisible ? 'animated' : ''
//                     }`}
//                     style={{ 
//                       animationDelay: `${(welcomeChars.length + index) * 0.05}s`,
//                       color: '#FFD700'
//                     }}
//                     aria-hidden="true"
//                   >
//                     {char}
//                   </span>
//                 ))}
//               </span>
//             </h1>

//             <div className="hero-subtitle-container">
//               <p className="hero-subtitle">
//                 <span className="subtitle-text">
//                   3rd Year Computer Science Student at Injibara University
//                 </span>
//               </p>
//               <p className="hero-subtitle secondary">
//                 <span className="subtitle-text">
//                   Full Stack Developer | Passionate about Creating Digital Solutions
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section> */}

















// <section 
//   ref={sectionRef} 
//   className="hero"
//   aria-label="Hero section"
// >
//   <div className="hero-container">
//     {/* Animated Background Elements */}
//     <div className="hero-background">
//       <div className="gradient-orb orb-1"></div>
//       <div className="gradient-orb orb-2"></div>
//       <div className="gradient-orb orb-3"></div>
//     </div>

//     {/* Main Content */}
//     <div className="hero-content">
//       <h1 className="hero-title">
//         {/* Welcome to Abrams - All in one line */}
//         <span className="title-line">
//           {welcomeChars.map((char, index) => (
//             <span
//               key={`welcome-${index}`}
//               className={`title-char welcome-char ${
//                 isVisible ? 'animated' : ''
//               }`}
//               style={{ 
//                 animationDelay: `${index * 0.05}s`,
//                 color: '#FFFFFF'
//               }}
//               aria-hidden="true"
//             >
//               {char === ' ' ? '\u00A0' : char}
//             </span>
//           ))}
//           {brandChars.map((char, index) => (
//             <span
//               key={`brand-${index}`}
//               className={`title-char brand-char ${
//                 isVisible ? 'animated' : ''
//               }`}
//               style={{ 
//                 animationDelay: `${(welcomeChars.length + index) * 0.05}s`,
//                 color: '#FFD700'
//               }}
//               aria-hidden="true"
//             >
//               {char}
//             </span>
//           ))}
//         </span>
//       </h1>

//       {/* Subtitle */}
//       <div className="hero-subtitle-container">
//         <p className="hero-subtitle">
//           <span className="subtitle-text">
//             3rd Year Computer Science Student at Injibara University
//           </span>
//         </p>
//         <p className="hero-subtitle secondary">
//           <span className="subtitle-text">
//             Full Stack Developer | Passionate about Creating Digital Solutions
//           </span>
//         </p>
//       </div>
//     </div>
//   </div>
// </section>
// {/* 
//        <section className="skills-section">
//       //   <div className="skills-container">
//       //     <div className="skills-scroll-container">
//       //       <div className="skills-track">
//       //         {skills.map((skill, index) => (
//       //           <div key={skill.name} className={`skill-box ${skill.class}`}>
//       //             <div className="skill-icon">{skill.icon}</div>
//       //             <div className="skill-name">{skill.name}</div>
//       //             <div className="skill-description">{skill.description}</div>
//       //             <div className="skill-bar">
//       //               <div 
//       //                 ref={el => skillRefs.current[index] = el}
//       //                 className="skill-level"
//       //                 style={{ '--target-width': skill.level }}
//       //               ></div>
//       //             </div>
//       //             <div className="skill-percentage">{skill.level}</div>
//       //           </div>
//       //         ))}
//       //         {skills.map((skill, index) => (
//       //           <div key={`${skill.name}-dup`} className={`skill-box ${skill.class}`}>
//       //             <div className="skill-icon">{skill.icon}</div>
//       //             <div className="skill-name">{skill.name}</div>
//       //             <div className="skill-description">{skill.description}</div>
//       //             <div className="skill-bar">
//       //               <div 
//       //                 className="skill-level"
//       //                 style={{ width: skill.level }}
//       //               ></div>
//       //             </div>
//       //             <div className="skill-percentage">{skill.level}</div>
//       //           </div>
//       //         ))}
//       //       </div>
//       //     </div>
//       //   </div>
//        </section>  */}



// <section className="skills-section">
//   <div className="skills-container">
    
//     {/* ROW 1 - Frontend Skills */}
//     <div className="skills-row">
//       <h3 className="row-title frontend-title">🎨 Frontend Development</h3>
//       <div className="skills-scroll-container">
//         <div className="skills-track row1-track">
//           {/* Original frontend skills */}
//           {skillsRow1.map((skill, index) => (
//             <div key={skill.name} className={`skill-box ${skill.class}`}>
//               <div className="skill-icon">{skill.icon}</div>
//               <div className="skill-name">{skill.name}</div>
//               <div className="skill-description">{skill.description}</div>
//               <div className="skill-bar">
//                 <div 
//                   ref={el => skillRefsRow1.current[index] = el}
//                   className="skill-level"
//                   style={{ '--target-width': skill.level }}
//                 ></div>
//               </div>
//               <div className="skill-percentage">{skill.level}</div>
//             </div>
//           ))}
          
//           {/* Duplicate for infinite animation */}
//           {skillsRow1.map((skill, index) => (
//             <div key={`${skill.name}-dup`} className={`skill-box ${skill.class}`}>
//               <div className="skill-icon">{skill.icon}</div>
//               <div className="skill-name">{skill.name}</div>
//               <div className="skill-description">{skill.description}</div>
//               <div className="skill-bar">
//                 <div 
//                   className="skill-level"
//                   style={{ width: skill.level }}
//                 ></div>
//               </div>
//               <div className="skill-percentage">{skill.level}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>

//     {/* ROW 2 - Backend Skills */}
//     <div className="skills-row">
//       <h3 className="row-title backend-title">⚙️ Backend & Database</h3>
//       <div className="skills-scroll-container">
//         <div className="skills-track row2-track">
//           {/* Original backend skills */}
//           {skillsRow2.map((skill, index) => (
//             <div key={skill.name} className={`skill-box ${skill.class}`}>
//               <div className="skill-icon">{skill.icon}</div>
//               <div className="skill-name">{skill.name}</div>
//               <div className="skill-description">{skill.description}</div>
//               <div className="skill-bar">
//                 <div 
//                   ref={el => skillRefsRow2.current[index] = el}
//                   className="skill-level"
//                   style={{ '--target-width': skill.level }}
//                 ></div>
//               </div>
//               <div className="skill-percentage">{skill.level}</div>
//             </div>
//           ))}
          
//           {/* Duplicate for infinite animation */}
//           {skillsRow2.map((skill, index) => (
//             <div key={`${skill.name}-dup`} className={`skill-box ${skill.class}`}>
//               <div className="skill-icon">{skill.icon}</div>
//               <div className="skill-name">{skill.name}</div>
//               <div className="skill-description">{skill.description}</div>
//               <div className="skill-bar">
//                 <div 
//                   className="skill-level"
//                   style={{ width: skill.level }}
//                 ></div>
//               </div>
//               <div className="skill-percentage">{skill.level}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>

//   </div>
// </section>



//       {/* Tips Section */}
//       {/* <section className="tips-section">
//         <div className="tips-background">
//           <div className="tips-orb tips-orb-1"></div>
//           <div className="tips-orb tips-orb-2"></div>
//         </div>
//         <div className="tips-container">
//           {tips.map((tip, index) => (
//             <div key={index} className="tip-card">
//               <div className="tip-icon">{tip.icon}</div>
//               <h3 className="tip-title">{tip.title}</h3>
//               <p 
//                 className="tip-content"
//                 dangerouslySetInnerHTML={{ __html: tip.content }}
//               ></p>
//             </div>
//           ))}
//         </div>
//       </section> */}
//     </>
//   );
// };

// export default Home;











// import React, { useEffect, useRef, useState } from 'react';
// // import './Hero.css';
// import './dark.css'
// import Contact from './Contact';
// import About from './About';

// const Home = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const skillRefsRow1 = useRef([]);
//   const skillRefsRow2 = useRef([]);
  
//   // Split text into arrays for animation
//   const welcomeText = "Welcome to ";
//   const brandText = "Abrams";
  
//   const welcomeChars = welcomeText.split('');
//   const brandChars = brandText.split('');




// const scrollToContact = (e) => {
//   e.preventDefault();
//   const contactSection = document.getElementById('contact-section');
//   if (contactSection) {
//     contactSection.scrollIntoView({ 
//       behavior: 'smooth',
//       block: 'start'
//     });
//   }
// };


//   // ROW 1 - Frontend Skills
//   const skillsRow1 = [
//     { 
//       name: 'HTML', 
//       level: '90%', 
//       class: 'html', 
//       icon: '🌐',
//       description: 'Semantic HTML, Accessibility'
//     },
//     { 
//       name: 'CSS', 
//       level: '85%', 
//       class: 'css', 
//       icon: '🎨',
//       description: 'Flexbox, Grid, Animations'
//     },
//     { 
//       name: 'JavaScript', 
//       level: '80%', 
//       class: 'js', 
//       icon: '⚡',
//       description: 'ES6+, DOM, Async'
//     },
//     { 
//       name: 'React', 
//       level: '75%', 
//       class: 'react', 
//       icon: '⚛️',
//       description: 'Hooks, Context, Redux'
//     },
//     { 
//       name: 'TypeScript', 
//       level: '70%', 
//       class: 'typescript', 
//       icon: '📘',
//       description: 'Types, Interfaces'
//     },
//     { 
//       name: 'Tailwind', 
//       level: '80%', 
//       class: 'tailwind', 
//       icon: '🎨',
//       description: 'Utility-first CSS'
//     }
//   ];

//   // ROW 2 - Backend Skills
//   const skillsRow2 = [
//     { 
//       name: 'Node.js', 
//       level: '75%', 
//       class: 'node', 
//       icon: '🟢',
//       description: 'Express, REST APIs'
//     },
//     { 
//       name: 'Express', 
//       level: '70%', 
//       class: 'express', 
//       icon: '🚀',
//       description: 'Routing, Middleware'
//     },
//     { 
//       name: 'PHP', 
//       level: '65%', 
//       class: 'php', 
//       icon: '🐘',
//       description: 'Laravel, WordPress'
//     },
//     { 
//       name: 'Python', 
//       level: '60%', 
//       class: 'python', 
//       icon: '🐍',
//       description: 'Django, Flask'
//     },
//     { 
//       name: 'MySQL', 
//       level: '75%', 
//       class: 'mysql', 
//       icon: '🗄️',
//       description: 'Database Design'
//     },
//     { 
//       name: 'MongoDB', 
//       level: '65%', 
//       class: 'mongodb', 
//       icon: '🍃',
//       description: 'NoSQL, Mongoose'
//     }
//   ];

//   // Observer for hero section animation
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   // Observer for skills animation (both rows)
//   useEffect(() => {
//     const skillObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const skillLevel = entry.target;
//             const targetWidth = skillLevel.style.getPropertyValue('--target-width');
//             setTimeout(() => {
//               skillLevel.style.width = targetWidth;
//             }, 300);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     // Observe Row 1 skills
//     skillRefsRow1.current.forEach((ref) => {
//       if (ref) skillObserver.observe(ref);
//     });

//     // Observe Row 2 skills
//     skillRefsRow2.current.forEach((ref) => {
//       if (ref) skillObserver.observe(ref);
//     });

//     return () => skillObserver.disconnect();
//   }, []);

//   return (
//     <>
//       {/* Hero Section */}
//       <section 
//         ref={sectionRef} 
//         className="hero"
//         aria-label="Hero section"
//       >
//         <div className="hero-container">
//           {/* Animated Background Elements */}
//           <div className="hero-background">
//             <div className="gradient-orb orb-1"></div>
//             <div className="gradient-orb orb-2"></div>
//             <div className="gradient-orb orb-3"></div>
//           </div>

//           {/* Main Content */}
//           <div className="hero-content">
//             <h1 className="hero-title">
//               {/* Welcome to Abrams - All in one line */}
//               <span className="title-line">
//                 {welcomeChars.map((char, index) => (
//                   <span
//                     key={`welcome-${index}`}
//                     className={`title-char welcome-char ${
//                       isVisible ? 'animated' : ''
//                     }`}
//                     style={{ 
//                       animationDelay: `${index * 0.05}s`,
//                       color: '#FFFFFF'
//                     }}
//                     aria-hidden="true"
//                   >
//                     {char === ' ' ? '\u00A0' : char}
//                   </span>
//                 ))}
//                 {brandChars.map((char, index) => (
//                   <span
//                     key={`brand-${index}`}
//                     className={`title-char brand-char ${
//                       isVisible ? 'animated' : ''
//                     }`}
//                     style={{ 
//                       animationDelay: `${(welcomeChars.length + index) * 0.05}s`,
//                       color: '#FFD700'
//                     }}
//                     aria-hidden="true"
//                   >
//                     {char}
//                   </span>
//                 ))}
//               </span>
//             </h1>

//             {/* Subtitle */}
//             {/* <div className="hero-subtitle-container">
//               <p className="hero-subtitle">
//                 <span className="subtitle-text">
//                   3rd Year Computer Science Student at Injibara University
//                 </span>
//               </p>
//               <p className="hero-subtitle secondary">
//                 <span className="subtitle-text">
//                   Full Stack Developer | Passionate about Creating Digital Solutions
//                 </span>
//               </p>
//             </div> */}

// {/* Subtitle */}
// <div className="hero-subtitle-container">
//   <p className="hero-subtitle">
//     <span className="subtitle-text">
//       3rd Year Computer Science Student at Injibara University
//     </span>
//   </p>
//   <p className="hero-subtitle secondary">
//     <span className="subtitle-text">
//       Full Stack Developer | Passionate about Creating Digital Solutions
//     </span>
//   </p>
// </div>

// {/* Get In Touch Button */}
// <div className="hero-button-container">
//  <a href="#contact-section" onClick={scrollToContact} className="get-in-touch-btn">
//   GET IN TOUCH
// </a>
// </div>

//           </div>
//         </div>
//       </section>

//       {/* Skills Section - Two Rows with Different Skills */}

      
     



// <section className="skills-section">
//   <div className="skills-container">
    
//     {/* ROW 1 - Frontend Skills */}
//     <div className="skills-row">
//       <div className="skills-scroll-container">
//         <div className="skills-track row1-track">
//           {/* Original frontend skills */}
//           {skillsRow1.map((skill, index) => (
//             <div key={skill.name} className={`skill-box ${skill.class}`}>
//               <div className="skill-icon">{skill.icon}</div>
//               <div className="skill-name">{skill.name}</div>
//               <div className="skill-description">{skill.description}</div>
//               <div className="skill-bar">
//                 <div 
//                   ref={el => skillRefsRow1.current[index] = el}
//                   className="skill-level"
//                   style={{ '--target-width': skill.level }}
//                 ></div>
//               </div>
//               <div className="skill-percentage">{skill.level}</div>
//             </div>
//           ))}
          
//           {/* Duplicate for infinite animation */}
//           {skillsRow1.map((skill, index) => (
//             <div key={`${skill.name}-dup`} className={`skill-box ${skill.class}`}>
//               <div className="skill-icon">{skill.icon}</div>
//               <div className="skill-name">{skill.name}</div>
//               <div className="skill-description">{skill.description}</div>
//               <div className="skill-bar">
//                 <div 
//                   className="skill-level"
//                   style={{ width: skill.level }}
//                 ></div>
//               </div>
//               <div className="skill-percentage">{skill.level}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>

//     {/* ROW 2 - Backend Skills */}
//     <div className="skills-row">
//       <div className="skills-scroll-container">
//         <div className="skills-track row2-track">
//           {/* Original backend skills */}
//           {skillsRow2.map((skill, index) => (
//             <div key={skill.name} className={`skill-box ${skill.class}`}>
//               <div className="skill-icon">{skill.icon}</div>
//               <div className="skill-name">{skill.name}</div>
//               <div className="skill-description">{skill.description}</div>
//               <div className="skill-bar">
//                 <div 
//                   ref={el => skillRefsRow2.current[index] = el}
//                   className="skill-level"
//                   style={{ '--target-width': skill.level }}
//                 ></div>
//               </div>
//               <div className="skill-percentage">{skill.level}</div>
//             </div>
//           ))}
          
//           {/* Duplicate for infinite animation */}
//           {skillsRow2.map((skill, index) => (
//             <div key={`${skill.name}-dup`} className={`skill-box ${skill.class}`}>
//               <div className="skill-icon">{skill.icon}</div>
//               <div className="skill-name">{skill.name}</div>
//               <div className="skill-description">{skill.description}</div>
//               <div className="skill-bar">
//                 <div 
//                   className="skill-level"
//                   style={{ width: skill.level }}
//                 ></div>
//               </div>
//               <div className="skill-percentage">{skill.level}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>






//   </div>
// </section>
// <About />
// {/* <Contact /> */}
// <div id="contact-section">
//   <Contact />
// </div>
//     </>
//   );
// };

// export default Home;
















// import React, { useEffect, useRef, useState } from 'react';
// // import './Hero.css';
// import './dark.css'
// import Contact from './Contact';
// import About from './About';
// import StorageIcon from '@mui/icons-material/Storage'; // Add this

// // Material Icons imports - ONLY VALID ICONS
// import CodeIcon from '@mui/icons-material/Code';
// import CssIcon from '@mui/icons-material/Css';
// import JavascriptIcon from '@mui/icons-material/Javascript';
// import ReactIcon from '@mui/icons-material/Code'; // React icon doesn't exist, using Code as fallback
// // import DataUsageIcon from '@mui/icons-material/DataUsage';
// // Then use DataUsageIcon in your skills arrayimport RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import PhpIcon from '@mui/icons-material/Php';
// // import StorageIcon from '@mui/icons-material/Storage';
// // Then use StorageIcon in your skills arrayimport PsychologyIcon from '@mui/icons-material/Psychology'; // For Python/ML
// import CloudIcon from '@mui/icons-material/Cloud'; // For MongoDB
// import StyleIcon from '@mui/icons-material/Style'; // For Tailwind
// import DeveloperModeIcon from '@mui/icons-material/DeveloperMode'; // Alternative for TypeScript






// import React, { useEffect, useRef, useState } from 'react';
// // import './Hero.css';
// import './dark.css'
// import Contact from './Contact';
// import About from './About';

// // Material Icons imports
// import CodeIcon from '@mui/icons-material/Code';
// import CssIcon from '@mui/icons-material/Css';
// import JavascriptIcon from '@mui/icons-material/Javascript';
// import StorageIcon from '@mui/icons-material/Storage';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import PhpIcon from '@mui/icons-material/Php';
// import PsychologyIcon from '@mui/icons-material/Psychology';
// import CloudIcon from '@mui/icons-material/Cloud';
// import StyleIcon from '@mui/icons-material/Style';
// import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
// import DataUsageIcon from '@mui/icons-material/DataUsage';

// const Home = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   const skillRefsRow1 = useRef([]);
//   const skillRefsRow2 = useRef([]);
  
//   // Split text into arrays for animation
//   const welcomeText = "Welcome to ";
//   const brandText = "Abrams";
  
//   const welcomeChars = welcomeText.split('');
//   const brandChars = brandText.split('');

//   const scrollToContact = (e) => {
//     e.preventDefault();
//     const contactSection = document.getElementById('contact-section');
//     if (contactSection) {
//       contactSection.scrollIntoView({ 
//         behavior: 'smooth',
//         block: 'start'
//       });
//     }
//   };

//   // ROW 1 - Frontend Skills
//   const skillsRow1 = [
//     { 
//       name: 'HTML', 
//       level: '90%', 
//       class: 'html', 
//       icon: CodeIcon,
//       description: 'Semantic HTML, Accessibility'
//     },
//     { 
//       name: 'CSS', 
//       level: '85%', 
//       class: 'css', 
//       icon: CssIcon,
//       description: 'Flexbox, Grid, Animations'
//     },
//     { 
//       name: 'JavaScript', 
//       level: '80%', 
//       class: 'js', 
//       icon: JavascriptIcon,
//       description: 'ES6+, DOM, Async'
//     },
//     { 
//       name: 'React', 
//       level: '75%', 
//       class: 'react', 
//       icon: DeveloperModeIcon,
//       description: 'Hooks, Context, Redux'
//     },
//     { 
//       name: 'TypeScript', 
//       level: '70%', 
//       class: 'typescript', 
//       icon: CodeIcon,
//       description: 'Types, Interfaces'
//     },
//     { 
//       name: 'Tailwind', 
//       level: '80%', 
//       class: 'tailwind', 
//       icon: StyleIcon,
//       description: 'Utility-first CSS'
//     }
//   ];

//   // ROW 2 - Backend Skills - ADD THIS ARRAY (it was missing)
//   const skillsRow2 = [
//     { 
//       name: 'Node.js', 
//       level: '75%', 
//       class: 'node', 
//       icon: StorageIcon,
//       description: 'Express, REST APIs'
//     },
//     { 
//       name: 'Express', 
//       level: '70%', 
//       class: 'express', 
//       icon: RocketLaunchIcon,
//       description: 'Routing, Middleware'
//     },
//     { 
//       name: 'PHP', 
//       level: '65%', 
//       class: 'php', 
//       icon: PhpIcon,
//       description: 'Laravel, WordPress'
//     },
//     { 
//       name: 'Python', 
//       level: '60%', 
//       class: 'python', 
//       icon: PsychologyIcon,
//       description: 'Django, Flask'
//     },
//     { 
//       name: 'MySQL', 
//       level: '75%', 
//       class: 'mysql', 
//       icon: DataUsageIcon,
//       description: 'Database Design'
//     },
//     { 
//       name: 'MongoDB', 
//       level: '65%', 
//       class: 'mongodb', 
//       icon: CloudIcon,
//       description: 'NoSQL, Mongoose'
//     }
//   ];

//   // Observer for hero section animation
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect();
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   // Observer for skills animation (both rows)
//   useEffect(() => {
//     const skillObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const skillLevel = entry.target;
//             const targetWidth = skillLevel.style.getPropertyValue('--target-width');
//             setTimeout(() => {
//               skillLevel.style.width = targetWidth;
//             }, 300);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     // Observe Row 1 skills
//     skillRefsRow1.current.forEach((ref) => {
//       if (ref) skillObserver.observe(ref);
//     });

//     // Observe Row 2 skills
//     skillRefsRow2.current.forEach((ref) => {
//       if (ref) skillObserver.observe(ref);
//     });

//     return () => skillObserver.disconnect();
//   }, []);

//   return (
//     <>
//       {/* Hero Section */}
//       <section 
//         ref={sectionRef} 
//         className="hero"
//         aria-label="Hero section"
//       >
//         <div className="hero-container">
//           {/* Animated Background Elements */}
//           <div className="hero-background">
//             <div className="gradient-orb orb-1"></div>
//             <div className="gradient-orb orb-2"></div>
//             <div className="gradient-orb orb-3"></div>
//           </div>

//           {/* Main Content */}
//           <div className="hero-content">
//             <h1 className="hero-title">
//               {/* Welcome to Abrams - All in one line */}
//               <span className="title-line">
//                 {welcomeChars.map((char, index) => (
//                   <span
//                     key={`welcome-${index}`}
//                     className={`title-char welcome-char ${
//                       isVisible ? 'animated' : ''
//                     }`}
//                     style={{ 
//                       animationDelay: `${index * 0.05}s`,
//                       color: '#FFFFFF'
//                     }}
//                     aria-hidden="true"
//                   >
//                     {char === ' ' ? '\u00A0' : char}
//                   </span>
//                 ))}
//                 {brandChars.map((char, index) => (
//                   <span
//                     key={`brand-${index}`}
//                     className={`title-char brand-char ${
//                       isVisible ? 'animated' : ''
//                     }`}
//                     style={{ 
//                       animationDelay: `${(welcomeChars.length + index) * 0.05}s`,
//                       color: '#FFD700'
//                     }}
//                     aria-hidden="true"
//                   >
//                     {char}
//                   </span>
//                 ))}
//               </span>
//             </h1>

//             {/* Subtitle */}
//             <div className="hero-subtitle-container">
//               <p className="hero-subtitle">
//                 <span className="subtitle-text">
//                   3rd Year Computer Science Student at Injibara University
//                 </span>
//               </p>
//               <p className="hero-subtitle secondary">
//                 <span className="subtitle-text">
//                   Full Stack Developer | Passionate about Creating Digital Solutions
//                 </span>
//               </p>
//             </div>

//             {/* Get In Touch Button */}
//             <div className="hero-button-container">
//               <a href="#contact-section" onClick={scrollToContact} className="get-in-touch-btn">
//                 GET IN TOUCH
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section with Material Icons */}
//       <section className="skills-section">
//         <div className="skills-container">
          
//           {/* ROW 1 - Frontend Skills */}
//           <div className="skills-row">
//             <h3 className="skills-row-title">Frontend Development</h3>
//             <div className="skills-scroll-container">
//               <div className="skills-track row1-track">
//                 {/* Original frontend skills */}
//                 {skillsRow1.map((skill, index) => {
//                   const IconComponent = skill.icon;
//                   return (
//                     <div key={skill.name} className={`skill-box ${skill.class}`}>
//                       <div className="skill-icon-wrapper">
//                         <IconComponent className="skill-icon" />
//                       </div>
//                       <div className="skill-name">{skill.name}</div>
//                       <div className="skill-description">{skill.description}</div>
//                       <div className="skill-bar">
//                         <div 
//                           ref={el => skillRefsRow1.current[index] = el}
//                           className="skill-level"
//                           style={{ '--target-width': skill.level }}
//                         ></div>
//                       </div>
//                       <div className="skill-percentage">{skill.level}</div>
//                     </div>
//                   );
//                 })}
                
//                 {/* Duplicate for infinite animation */}
//                 {skillsRow1.map((skill, index) => {
//                   const IconComponent = skill.icon;
//                   return (
//                     <div key={`${skill.name}-dup`} className={`skill-box ${skill.class}`}>
//                       <div className="skill-icon-wrapper">
//                         <IconComponent className="skill-icon" />
//                       </div>
//                       <div className="skill-name">{skill.name}</div>
//                       <div className="skill-description">{skill.description}</div>
//                       <div className="skill-bar">
//                         <div 
//                           className="skill-level"
//                           style={{ width: skill.level }}
//                         ></div>
//                       </div>
//                       <div className="skill-percentage">{skill.level}</div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* ROW 2 - Backend Skills */}
//           <div className="skills-row">
//             <h3 className="skills-row-title">Backend & Database</h3>
//             <div className="skills-scroll-container">
//               <div className="skills-track row2-track">
//                 {/* Original backend skills */}
//                 {skillsRow2.map((skill, index) => {
//                   const IconComponent = skill.icon;
//                   return (
//                     <div key={skill.name} className={`skill-box ${skill.class}`}>
//                       <div className="skill-icon-wrapper">
//                         <IconComponent className="skill-icon" />
//                       </div>
//                       <div className="skill-name">{skill.name}</div>
//                       <div className="skill-description">{skill.description}</div>
//                       <div className="skill-bar">
//                         <div 
//                           ref={el => skillRefsRow2.current[index] = el}
//                           className="skill-level"
//                           style={{ '--target-width': skill.level }}
//                         ></div>
//                       </div>
//                       <div className="skill-percentage">{skill.level}</div>
//                     </div>
//                   );
//                 })}
                
//                 {/* Duplicate for infinite animation */}
//                 {skillsRow2.map((skill, index) => {
//                   const IconComponent = skill.icon;
//                   return (
//                     <div key={`${skill.name}-dup`} className={`skill-box ${skill.class}`}>
//                       <div className="skill-icon-wrapper">
//                         <IconComponent className="skill-icon" />
//                       </div>
//                       <div className="skill-name">{skill.name}</div>
//                       <div className="skill-description">{skill.description}</div>
//                       <div className="skill-bar">
//                         <div 
//                           className="skill-level"
//                           style={{ width: skill.level }}
//                         ></div>
//                       </div>
//                       <div className="skill-percentage">{skill.level}</div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//         </div>
//       </section>


//       <About />

//       <div id="contact-section">
//         <Contact />
//       </div>
//     </>
//   );
// };

// export default Home;















import React, { useEffect, useRef, useState } from 'react';
import './dark.css';
import Contact from './Contact';
import About from './About';

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
  
  // Split text into arrays for animation
  const welcomeText = "Welcome to ";
  const brandText = "ABS";
  
  const welcomeChars = welcomeText.split('');
  const brandChars = brandText.split('');

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // ROW 1 - Frontend Skills
  const skillsRow1 = [
    { 
      name: 'HTML', 
      level: '90%', 
      class: 'html', 
      icon: CodeIcon,
      description: 'Semantic HTML, Accessibility'
    },
    { 
      name: 'CSS', 
      level: '85%', 
      class: 'css', 
      icon: CssIcon,
      description: 'Flexbox, Grid, Animations'
    },
    { 
      name: 'JavaScript', 
      level: '80%', 
      class: 'js', 
      icon: JavascriptIcon,
      description: 'ES6+, DOM, Async'
    },
    { 
      name: 'React', 
      level: '75%', 
      class: 'react', 
      icon: DeveloperModeIcon,
      description: 'Hooks, Context, Redux'
    },
    { 
      name: 'TypeScript', 
      level: '70%', 
      class: 'typescript', 
      icon: CodeIcon,
      description: 'Types, Interfaces'
    },
    { 
      name: 'Tailwind', 
      level: '80%', 
      class: 'tailwind', 
      icon: StyleIcon,
      description: 'Utility-first CSS'
    }
  ];

  // ROW 2 - Backend Skills
  const skillsRow2 = [
    { 
      name: 'Node.js', 
      level: '75%', 
      class: 'node', 
      icon: StorageIcon,
      description: 'Express, REST APIs'
    },
    { 
      name: 'Express', 
      level: '70%', 
      class: 'express', 
      icon: RocketLaunchIcon,
      description: 'Routing, Middleware'
    },
    { 
      name: 'PHP', 
      level: '65%', 
      class: 'php', 
      icon: PhpIcon,
      description: 'Laravel, WordPress'
    },
    { 
      name: 'Python', 
      level: '60%', 
      class: 'python', 
      icon: PsychologyIcon,
      description: 'Django, Flask'
    },
    { 
      name: 'MySQL', 
      level: '75%', 
      class: 'mysql', 
      icon: DataUsageIcon,
      description: 'Database Design'
    },
    { 
      name: 'MongoDB', 
      level: '65%', 
      class: 'mongodb', 
      icon: CloudIcon,
      description: 'NoSQL, Mongoose'
    }
  ];

  // Observer for hero section animation
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Observer for skills animation (both rows)
  useEffect(() => {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillLevel = entry.target;
            const targetWidth = skillLevel.style.getPropertyValue('--target-width');
            setTimeout(() => {
              skillLevel.style.width = targetWidth;
            }, 300);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe Row 1 skills
    skillRefsRow1.current.forEach((ref) => {
      if (ref) skillObserver.observe(ref);
    });

    // Observe Row 2 skills
    skillRefsRow2.current.forEach((ref) => {
      if (ref) skillObserver.observe(ref);
    });

    return () => skillObserver.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section with id="home" */}
      <section 
        id="home"
        ref={sectionRef} 
        className="hero"
        aria-label="Hero section"
      >
        <div className="hero-container">
          {/* Animated Background Elements */}
          <div className="hero-background">
            <div className="gradient-orb orb-1"></div>
            <div className="gradient-orb orb-2"></div>
            <div className="gradient-orb orb-3"></div>
          </div>

          {/* Main Content */}
          <div className="hero-content">
            <h1 className="hero-title">
              {/* Welcome to Abrams - All in one line */}
              <span className="title-line">
                {welcomeChars.map((char, index) => (
                  <span
                    key={`welcome-${index}`}
                    className={`title-char welcome-char ${
                      isVisible ? 'animated' : ''
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.05}s`,
                      color: '#FFFFFF'
                    }}
                    aria-hidden="true"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
                {brandChars.map((char, index) => (
                  <span
                    key={`brand-${index}`}
                    className={`title-char brand-char ${
                      isVisible ? 'animated' : ''
                    }`}
                    style={{ 
                      animationDelay: `${(welcomeChars.length + index) * 0.05}s`,
                      color: '#FFD700'
                    }}
                    aria-hidden="true"
                  >
                    {char}
                  </span>
                ))}
              </span>
            </h1>

            {/* Subtitle */}
            <div className="hero-subtitle-container">
              <p className="hero-subtitle">
                <span className="subtitle-text">
                  3rd Year Computer Science Student at Injibara University
                </span>
              </p>
              <p className="hero-subtitle secondary">
                <span className="subtitle-text">
                  Full Stack Developer | Passionate about Creating Digital Solutions
                </span>
              </p>
            </div>

            {/* Get In Touch Button */}
            <div id="get" className="hero-button-container">
              <a href="#contact-section" onClick={scrollToContact} className="get-in-touch-btn">
                GET IN TOUCH
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with id="skills" */}
      <section id="skills" className="skills-section">
        <div className="skills-container">
          
          {/* ROW 1 - Frontend Skills */}
          <div className="skills-row">
            <h3 className="skills-row-title">Frontend Development</h3>
            <div className="skills-scroll-container">
              <div className="skills-track row1-track">
                {/* Original frontend skills */}
                {skillsRow1.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skill.name} className={`skill-box ${skill.class}`}>
                      <div className="skill-icon-wrapper">
                        <IconComponent className="skill-icon" />
                      </div>
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-description">{skill.description}</div>
                      <div className="skill-bar">
                        <div 
                          ref={el => skillRefsRow1.current[index] = el}
                          className="skill-level"
                          style={{ '--target-width': skill.level }}
                        ></div>
                      </div>
                      <div className="skill-percentage">{skill.level}</div>
                    </div>
                  );
                })}
                
                {/* Duplicate for infinite animation */}
                {skillsRow1.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={`${skill.name}-dup`} className={`skill-box ${skill.class}`}>
                      <div className="skill-icon-wrapper">
                        <IconComponent className="skill-icon" />
                      </div>
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-description">{skill.description}</div>
                      <div className="skill-bar">
                        <div 
                          className="skill-level"
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                      <div className="skill-percentage">{skill.level}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ROW 2 - Backend Skills */}
          <div className="skills-row">
            <h3 className="skills-row-title">Backend & Database</h3>
            <div className="skills-scroll-container">
              <div className="skills-track row2-track">
                {/* Original backend skills */}
                {skillsRow2.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skill.name} className={`skill-box ${skill.class}`}>
                      <div className="skill-icon-wrapper">
                        <IconComponent className="skill-icon" />
                      </div>
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-description">{skill.description}</div>
                      <div className="skill-bar">
                        <div 
                          ref={el => skillRefsRow2.current[index] = el}
                          className="skill-level"
                          style={{ '--target-width': skill.level }}
                        ></div>
                      </div>
                      <div className="skill-percentage">{skill.level}</div>
                    </div>
                  );
                })}
                
                {/* Duplicate for infinite animation */}
                {skillsRow2.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={`${skill.name}-dup`} className={`skill-box ${skill.class}`}>
                      <div className="skill-icon-wrapper">
                        <IconComponent className="skill-icon" />
                      </div>
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-description">{skill.description}</div>
                      <div className="skill-bar">
                        <div 
                          className="skill-level"
                          style={{ width: skill.level }}
                        ></div>
                      </div>
                      <div className="skill-percentage">{skill.level}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About Section with id="about" */}
      <div id="about">
        <About />
      </div>

      {/* Projects Section with id="projects" */}
    



      {/* Contact Section with id="contact-section" */}
      <div id="contact-section">
        <Contact />
      </div>
    </>


  );
};

export default Home;