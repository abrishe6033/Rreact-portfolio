import React from "react";
import aboutImage from '../images/about image.jpg';

const About = () => {
  return (
    <section className="custom-about-wrapper">
      <style>{`
        .custom-about-wrapper {
          background-color: #3C7A9C !important; 
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          /* የላይኛው ሜኑ እንዳይደብቀው padding-top ተጨምሯል */
          padding: 120px 40px 60px 40px; 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          box-sizing: border-box;
        }

        .custom-about-container {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto; /* ገጹን በመሃል ለማድረግ */
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 60px; /* በጽሑፉና በምስሉ መካከል ክፍተት */
        }

        .custom-about-text {
          flex: 1;
          max-width: 55%;
        }

        .custom-about-text h1 {
          font-size: 3.5rem;
          color: #ffffff;
          margin-bottom: 10px;
          font-weight: 800;
          line-height: 1.1;
        }

        .custom-about-text h2 {
          font-size: 2rem;
          color: #FFD700; 
          margin-bottom: 25px;
        }

        .custom-about-text p {
          color: #f8f9fa;
          font-size: 1.15rem;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .custom-about-image-container {
          flex: 1;
          display: flex;
          justify-content: flex-end; /* ምስሉ ወደ ቀኝ እንዲጠጋ */
          max-width: 45%;
        }

        .custom-about-image {
          width: 100%;
          max-width: 550px;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.4);
          animation: customFloat 5s ease-in-out infinite;
        }

        @keyframes customFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }

        /* ለስልክ እና ለታብሌት ስክሪን */
        @media (max-width: 968px) {
          .custom-about-wrapper {
            padding-top: 100px;
          }
          .custom-about-container {
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }
          .custom-about-text, .custom-about-image-container {
            max-width: 100%;
          }
          .custom-about-image-container {
            justify-content: center;
          }
          .custom-about-text h1 {
            font-size: 2.8rem;
          }
        }
      `}</style>

      <div className="custom-about-container">
        
        {/* የግራ በኩል ጽሑፍ */}
        <div className="custom-about-text">
          <h1>About Me</h1>
          <h2>Abrihame Shiferaw</h2>
          <p>
            <strong>4th Year Computer Science Student at Injibara University</strong>
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
        </div>

        {/* የቀኝ በኩል ምስል */}
        <div className="custom-about-image-container">
          <img 
            src={aboutImage} 
            alt="Developer Workspace" 
            className="custom-about-image" 
          />
        </div>

      </div>
    </section>
  );
};

export default About;
