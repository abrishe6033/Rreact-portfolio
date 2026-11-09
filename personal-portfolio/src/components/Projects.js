import React, { useState } from 'react';
import './pro.css';

const Projects = () => {
  const [flippedId, setFlippedId] = useState(null);

  // =========================================================================
  // 👇 አዲሶቹን ፕሮጀክቶችዎን እዚህ ያስገቡ (Insert your new projects here)
  // =========================================================================
  const projects = [
    // 
    // --- የፕሮጀክት አስገቢ ምሳሌ (Example Template) ---
    // ከታች ያለውን ምሳሌ ኮፒ አድርገው በራስዎ መረጃ ይሙሉት።
    //
    // {
    //   id: 1,
    //   title: "የፕሮጀክቱ ርዕስ (Project Title)",
    //   description: "ስለ ፕሮጀክቱ አጭር መግለጫ እዚህ ይጻፉ...",
    //   type: "web", 
    //   image: "https://የምስሉ-ሊንክ.jpg", 
    //   videoUrl: "https://www.youtube.com/watch?v=...", 
    //   stats: {
    //     status: "Completed",
    //     users: "100+"
    //   },
    //   features: [
    //     "የፕሮጀክቱ ባህሪ 1",
    //     "የፕሮጀክቱ ባህሪ 2",
    //     "የፕሮጀክቱ ባህሪ 3"
    //   ],
    //   technologies: ["React", "Node.js", "CSS"],
    //   demo: "https://የላይቭ-ዴሞ-ሊንክ.com", 
    //   github: "https://github.com/የእርስዎ-ስም/የፕሮጀክቱ-ስም" 
    // }
    // =========================================================================
  ];

  const handleFlip = (id) => {
    setFlippedId(flippedId === id ? null : id);
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        
        {/* ፕሮጀክት ካልተጨመረ የሚታይ መልእክት */}
        {projects.length === 0 && (
          <div style={{ textAlign: 'center', color: '#fff', marginTop: '2rem' }}>
<p>Coming Soon... (በቅርቡ ይመጣል)</p>
          </div>
        )}

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${project.type} ${flippedId === project.id ? 'flipped' : ''}`}
            >
              <div className="card-inner">
                {/* Front of card */}
                <div className="card-front">
                  <div className="card-image-container">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="card-image"
                      loading="lazy"
                    />
                    <div className="card-overlay">
                      <span className="project-type">{project.type}</span>
                    </div>
                    
                    {/* YouTube Link Button */}
                    {project.videoUrl && (
                      <a 
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="video-play-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="play-icon">▶</span>
                        Watch Video
                      </a>
                    )}
                  </div>
                  
                  <div className="card-content">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-description">{project.description}</p>
                    
                    {/* Stats Section */}
                    <div className="project-stats">
                      {project.stats && Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="stat-item">
                          <span className="stat-label">{key}:</span>
                          <span className="stat-value">{value}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Technologies */}
                    <div className="tech-stack">
                      {project.technologies && project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                      {project.technologies && project.technologies.length > 3 && (
                        <span className="tech-tag more">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                    
                    {/* Features Preview */}
                    <div className="features-preview">
                      <h4>Key Features:</h4>
                      <ul>
                        {project.features && project.features.slice(0, 3).map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="card-actions">
                      {project.demo && (
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn demo-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn github-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          GitHub
                        </a>
                      )}
                      {project.videoUrl && (
                        <a 
                          href={project.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn video-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Watch Video
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Back of card (ለ e-commerce አይነት ፕሮጀክቶች ብቻ የሚሰራ) */}
                {project.type === 'ecommerce' && (
                  <div className="card-back" onClick={() => handleFlip(project.id)}>
                    <h3 className="back-title">Complete E-Commerce Features</h3>
                    <div className="back-features">
                      <div className="feature-category">
                        <h4>📱 Platform Features</h4>
                        <ul>
                          <li>Secure Payment Gateway</li>
                          <li>Real-time Order Tracking</li>
                          <li>Customer Reviews & Ratings</li>
                          <li>Wishlist & Favorites</li>
                        </ul>
                      </div>
                    </div>
                    <div className="back-actions">
                      {project.demo && (
                        <a 
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn demo-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn github-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
