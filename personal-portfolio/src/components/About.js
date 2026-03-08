import React, { useEffect } from "react";
import abrishee from '../images/abrishee.jpg'
const About = () => {
  // const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // const techIcons = [
  //   { name: "HTML", icon: "🌐", class: "html-icon" },
  //   { name: "CSS", icon: "🎨", class: "css-icon" },
  //   { name: "JavaScript", icon: "⚡", class: "js-icon" },
  //   { name: "React", icon: "⚛️", class: "react-icon" },
  //   { name: "Node.js", icon: "🟢", class: "node-icon" },
  //   { name: "Express", icon: "🚀", class: "express-icon" },
  //   { name: "PHP", icon: "", class: "php-icon" },
  //   { name: "Database", icon: "🗄️", class: "db-icon" },



    
  // ];

  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h1>About Me</h1>
          <h2>Abrihame Shiferaw</h2>
          <p>
            <strong>
              3rd Year Computer Science Student at Injibara University
            </strong>
          </p>
          <p>
            I am a passionate Full Stack Developer with a strong foundation in
            modern web technologies. My journey in computer science has equipped
            me with comprehensive knowledge in both frontend and backend
            development.
          </p>
          <p>
            I specialize in creating responsive, user-friendly web applications
            using the latest technologies. My expertise includes React.js for
            frontend development, Node.js and Express for backend services, and
            various databases for data management.
          </p>
          <p>
            {/* I'm constantly learning and adapting to new technologies to stay
            ahead in the rapidly evolving tech landscape. I enjoy solving
            complex problems and turning ideas into reality through code. */}
          </p>
          <p>
            {/* When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or learning about AI and
            machine learning. */}
          </p>
        </div>

        <div className="about-image">
          <img
            src={abrishee}
            alt="Abrihame Shiferaw"
            className="profile-img"
          />

          {/* {showContent && (
            <div className="tech-icons-circle">
              {techIcons.map((tech, index) => (
                <div key={tech.name} className="tech-icon" title={tech.name}>
                  {tech.icon}
                </div>
              ))}
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default About;
