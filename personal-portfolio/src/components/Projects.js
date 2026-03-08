// // import React, { useState, useEffect } from 'react';

// // const Projects = () => {
// //   const [currentProject, setCurrentProject] = useState(0);
// //   const [isFlipped, setIsFlipped] = useState(false);

// //   const projects = [
// //     {
// //       id: 1,
// //       title: "Ethiopian Weather App",
// //       description: "Real-time weather information for Ethiopian cities with temperature in Celsius and city images.",
// //       type: "weather",
// //       image: "https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
// //       features: [
// //         "Search any Ethiopian city",
// //         "Display current temperature in °C",
// //         "Show city images",
// //         "Weather forecasts"
// //       ]
// //     },
// //     {
// //       id: 2,
// //       title: "Ethiopian Prime Ministers",
// //       description: "Historical database of Ethiopian Prime Ministers with images and tenure information.",
// //       type: "history",
// //       image: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
// //       features: [
// //         "Search by year",
// //         "Prime Minister details",
// //         "Historical timeline",
// //         "High-quality images"
// //       ]
// //     },
// //     {
// //       id: 3,
// //       title: "E-Commerce Store",
// //       description: "Complete online shopping platform for electronics and Ethiopian traditional clothing.",
// //       type: "ecommerce",
// //       image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
// //       features: [
// //         "Electronics: Phones, Tablets, Laptops",
// //         "Ethiopian Traditional Clothing",
// //         "Secure Payment System",
// //         "User Authentication"
// //       ]
// //     },
// //     {
// //       id: 4,
// //       title: "House Rental System",
// //       description: "Comfortable house rental platform with verified listings across Ethiopia.",
// //       type: "rental",
// //       image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
// //       features: [
// //         "Verified house listings",
// //         "Location-based search",
// //         "Price comparison",
// //         "Booking system"
// //       ]
// //     }
// //   ];

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentProject((prev) => (prev + 1) % projects.length);
// //       setIsFlipped(false);
// //     }, 8000); // Change project every 8 seconds

// //     return () => clearInterval(interval);
// //   }, [projects.length]);

// //   const handleFlip = () => {
// //     if (projects[currentProject].type === 'ecommerce') {
// //       setIsFlipped(!isFlipped);
// //     }
// //   };

// //   const renderProjectContent = (project) => {
// //     if (project.type === 'ecommerce') {
// //       return (
// //         <div className="flip-container" onClick={handleFlip}>
// //           <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
// //             <div className="flip-card-front">
// //               <img src={project.image} alt={project.title} className="project-image" />
// //               <h2>{project.title}</h2>
// //               <p>{project.description}</p>
// //               <p style={{marginTop: '1rem', fontStyle: 'italic'}}>Click to see details</p>
// //             </div>
// //             <div className="flip-card-back">
// //               <h3>E-Commerce Features</h3>
// //               <ul>
// //                 <li>Electronics: Phones ($200-$1000), Tablets ($300-$800)</li>
// //                 <li>Laptops ($500-$2000), iPads ($400-$1200)</li>
// //                 <li>Men's Traditional Clothing: $50-$200</li>
// //                 <li>Women's Traditional Clothing: $60-$250</li>
// //                 <li>Children's Clothing: $20-$80</li>
// //                 <li>Secure Payment Gateway</li>
// //                 <li>Order Tracking System</li>
// //                 <li>Customer Reviews & Ratings</li>
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       );
// //     }

// //     return (
// //       <div className="project-content">
// //         <img src={project.image} alt={project.title} className="project-image" />
// //         <h2>{project.title}</h2>
// //         <p>{project.description}</p>
// //         <div className="project-features">
// //           <h4>Key Features:</h4>
// //           <ul>
// //             {project.features.map((feature, index) => (
// //               <li key={index}>{feature}</li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <section className="projects">
// //       <h1>My Projects</h1>
// //       <div className="project-carousel">
// //         {projects.map((project, index) => (
// //           <div
// //             key={project.id}
// //             className={`project-slide ${index === currentProject ? 'active' : ''}`}
// //           >
// //             {index === currentProject && renderProjectContent(project)}
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;




// import React, { useState, useEffect } from 'react';
// import './pro.css';

// const Projects = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [flippedId, setFlippedId] = useState(null);

//   // Fetch data from multiple online sources
//   useEffect(() => {
//     const fetchProjectsData = async () => {
//       try {
//         setLoading(true);
        
//         // Fetch weather data from OpenWeatherMap API
//         const weatherResponse = await fetch(
//           'https://api.openweathermap.org/data/2.5/weather?q=Addis%20Ababa&units=metric&appid=YOUR_API_KEY'
//         );
//         const weatherData = await weatherResponse.json();

//         // Fetch historical data from REST Countries API
//         const countriesResponse = await fetch(
//           'https://restcountries.com/v3.1/name/ethiopia'
//         );
//         const countriesData = await countriesResponse.json();

//         // Fetch product data from Fake Store API
//         const productsResponse = await fetch(
//           'https://fakestoreapi.com/products?limit=8'
//         );
//         const productsData = await productsResponse.json();

//         // Combine data with our projects
//         const projectsData = [
//           {
//             id: 1,
//             title: "Ethiopian Weather App",
//             description: `Real-time weather for Ethiopian cities. Current temperature in Addis Ababa: ${weatherData.main?.temp || '20'}°C, ${weatherData.weather?.[0]?.description || 'Sunny'}`,
//             type: "weather",
//             image: "https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//             stats: {
//               temperature: `${weatherData.main?.temp || '20'}°C`,
//               humidity: `${weatherData.main?.humidity || '65'}%`,
//               windSpeed: `${weatherData.wind?.speed || '5'} m/s`,
//               condition: weatherData.weather?.[0]?.description || 'Sunny'
//             },
//             features: [
//               `🌡️ Current temp in Addis: ${weatherData.main?.temp || '20'}°C`,
//               `💧 Humidity: ${weatherData.main?.humidity || '65'}%`,
//               `💨 Wind speed: ${weatherData.wind?.speed || '5'} m/s`,
//               "📍 Search any Ethiopian city",
//               "📅 5-day weather forecast",
//               "🌅 Sunrise/Sunset times"
//             ],
//             technologies: ["React", "OpenWeather API", "Chart.js", "Axios"],
//             demo: "https://weather-app-demo.com",
//             github: "https://github.com/yourusername/weather-app"
//           },
//           {
//             id: 2,
//             title: "Ethiopian Prime Ministers",
//             description: `Historical database of Ethiopian leaders. Population: ${(countriesData[0]?.population / 1000000).toFixed(1) || '120'}M, Capital: ${countriesData[0]?.capital?.[0] || 'Addis Ababa'}`,
//             type: "history",
//             image: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//             stats: {
//               population: `${(countriesData[0]?.population / 1000000).toFixed(1) || '120'}M`,
//               capital: countriesData[0]?.capital?.[0] || 'Addis Ababa',
//               region: countriesData[0]?.region || 'Africa',
//               currency: Object.values(countriesData[0]?.currencies || {})[0]?.name || 'Ethiopian Birr'
//             },
//             features: [
//               `👥 Population: ${(countriesData[0]?.population / 1000000).toFixed(1) || '120'} million`,
//               `🏛️ Capital: ${countriesData[0]?.capital?.[0] || 'Addis Ababa'}`,
//               `💰 Currency: ${Object.values(countriesData[0]?.currencies || {})[0]?.name || 'Ethiopian Birr'}`,
//               "📜 Complete list of PMs from 1942",
//               "📸 Historical images & documents",
//               "⏳ Interactive timeline"
//             ],
//             technologies: ["React", "REST Countries API", "D3.js", "Node.js"],
//             demo: "https://prime-ministers-demo.com",
//             github: "https://github.com/yourusername/prime-ministers"
//           },
//           {
//             id: 3,
//             title: "E-Commerce Store",
//             description: `Online shopping with ${productsData.length || '50+'} products. Starting from $${Math.min(...productsData.map(p => p.price)) || '20'}`,
//             type: "ecommerce",
//             image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//             stats: {
//               products: productsData.length || '50+',
//               minPrice: `$${Math.min(...productsData.map(p => p.price)).toFixed(2) || '20'}`,
//               maxPrice: `$${Math.max(...productsData.map(p => p.price)).toFixed(2) || '1000'}`,
//               categories: [...new Set(productsData.map(p => p.category))].length || '5'
//             },
//             features: [
//               `📦 ${productsData.length || '50+'} products available`,
//               `💰 Price range: $${Math.min(...productsData.map(p => p.price)).toFixed(2) || '20'} - $${Math.max(...productsData.map(p => p.price)).toFixed(2) || '1000'}`,
//               `🏷️ ${[...new Set(productsData.map(p => p.category))].length || '5'} categories`,
//               "📱 Electronics & Traditional Clothing",
//               "💳 Secure payment with Stripe",
//               "🚚 Free shipping over $50"
//             ],
//             technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
//             demo: "https://ecommerce-demo.com",
//             github: "https://github.com/yourusername/ecommerce"
//           }
//         ];

//         setProjects(projectsData);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         setError("Failed to load project data. Using fallback data.");
        
//         // Fallback data if API fails
//         setProjects([
//           {
//             id: 1,
//             title: "Ethiopian Weather App",
//             description: "Real-time weather for Ethiopian cities. Current temperature: 22°C, Sunny",
//             type: "weather",
//             image: "https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//             stats: { temperature: "22°C", humidity: "65%", windSpeed: "5 m/s", condition: "Sunny" },
//             features: ["🌡️ Current temp: 22°C", "💧 Humidity: 65%", "💨 Wind: 5 m/s", "📍 City search", "📅 5-day forecast"],
//             technologies: ["React", "OpenWeather API", "Chart.js"],
//             demo: "#",
//             github: "#"
//           },
//           {
//             id: 2,
//             title: "Ethiopian Prime Ministers",
//             description: "Historical database of Ethiopian leaders. Population: 120M, Capital: Addis Ababa",
//             type: "history",
//             image: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//             stats: { population: "120M", capital: "Addis Ababa", region: "Africa" },
//             features: ["👥 Population: 120M", "🏛️ Capital: Addis Ababa", "📜 PMs from 1942", "📸 Historical images"],
//             technologies: ["React", "REST Countries API", "D3.js"],
//             demo: "#",
//             github: "#"
//           },
//           {
//             id: 3,
//             title: "E-Commerce Store",
//             description: "Online shopping with 50+ products. Starting from $20",
//             type: "ecommerce",
//             image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
//             stats: { products: "50+", minPrice: "$20", maxPrice: "$1000", categories: "5" },
//             features: ["📦 50+ products", "💰 $20 - $1000", "🏷️ 5 categories", "💳 Secure payment"],
//             technologies: ["React", "Redux", "Node.js", "MongoDB"],
//             demo: "#",
//             github: "#"
//           }
//         ]);
//         setLoading(false);
//       }
//     };

//     fetchProjectsData();
//   }, []);

//   const handleFlip = (id) => {
//     setFlippedId(flippedId === id ? null : id);
//   };

//   if (loading) {
//     return (
//       <section className="projects-section">
//         <div className="projects-container">
//           <h1 className="projects-title">My Projects</h1>
//           <div className="loading-spinner">
//             <div className="spinner"></div>
//             <p>Fetching live project data...</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="projects-section">
//       <div className="projects-container">
//         <h1 className="projects-title">My Projects</h1>
//         {error && <div className="error-message">{error}</div>}
        
//         <div className="projects-grid">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className={`project-card ${project.type} ${flippedId === project.id ? 'flipped' : ''}`}
//               onClick={() => project.type === 'ecommerce' && handleFlip(project.id)}
//             >
//               <div className="card-inner">
//                 {/* Front of card */}
//                 <div className="card-front">
//                   <div className="card-image-container">
//                     <img 
//                       src={project.image} 
//                       alt={project.title}
//                       className="card-image"
//                       loading="lazy"
//                     />
//                     <div className="card-overlay">
//                       <span className="project-type">{project.type}</span>
//                     </div>
//                   </div>
                  
//                   <div className="card-content">
//                     <h3 className="card-title">{project.title}</h3>
//                     <p className="card-description">{project.description}</p>
                    
//                     {/* Stats Section */}
//                     <div className="project-stats">
//                       {Object.entries(project.stats).map(([key, value]) => (
//                         <div key={key} className="stat-item">
//                           <span className="stat-label">{key}:</span>
//                           <span className="stat-value">{value}</span>
//                         </div>
//                       ))}
//                     </div>
                    
//                     {/* Technologies */}
//                     <div className="tech-stack">
//                       {project.technologies.slice(0, 3).map((tech, index) => (
//                         <span key={index} className="tech-tag">{tech}</span>
//                       ))}
//                       {project.technologies.length > 3 && (
//                         <span className="tech-tag more">+{project.technologies.length - 3}</span>
//                       )}
//                     </div>
                    
//                     {/* Features Preview */}
//                     <div className="features-preview">
//                       <h4>Key Features:</h4>
//                       <ul>
//                         {project.features.slice(0, 3).map((feature, index) => (
//                           <li key={index}>{feature}</li>
//                         ))}
//                       </ul>
//                     </div>
                    
//                     {/* Action Buttons */}
//                     <div className="card-actions">
//                       <a 
//                         href={project.demo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="btn demo-btn"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         Live Demo
//                       </a>
//                       <a 
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="btn github-btn"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         GitHub
//                       </a>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Back of card (only for e-commerce) */}
//                 {project.type === 'ecommerce' && (
//                   <div className="card-back">
//                     <h3 className="back-title">Complete E-Commerce Features</h3>
//                     <div className="back-features">
//                       <div className="feature-category">
//                         <h4>📱 Electronics</h4>
//                         <ul>
//                           <li>Smartphones: $200 - $1000</li>
//                           <li>Tablets: $300 - $800</li>
//                           <li>Laptops: $500 - $2000</li>
//                           <li>Accessories: $20 - $150</li>
//                         </ul>
//                       </div>
//                       <div className="feature-category">
//                         <h4>👘 Traditional Clothing</h4>
//                         <ul>
//                           <li>Men's Habesha: $50 - $200</li>
//                           <li>Women's Habesha: $60 - $250</li>
//                           <li>Children's: $20 - $80</li>
//                           <li>Accessories: $10 - $50</li>
//                         </ul>
//                       </div>
//                       <div className="feature-category">
//                         <h4>⚙️ Platform Features</h4>
//                         <ul>
//                           <li>Secure Payment Gateway</li>
//                           <li>Real-time Order Tracking</li>
//                           <li>Customer Reviews & Ratings</li>
//                           <li>Wishlist & Favorites</li>
//                           <li>Flash Sales & Discounts</li>
//                         </ul>
//                       </div>
//                     </div>
//                     <div className="back-actions">
//                       <a 
//                         href={project.demo}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="btn demo-btn"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         Live Demo
//                       </a>
//                       <a 
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="btn github-btn"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         GitHub
//                       </a>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;





import React, { useState, useEffect } from 'react';
import './pro.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [flippedId, setFlippedId] = useState(null);

  // Fetch data from multiple online sources
  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        setLoading(true);
        
        // Fetch weather data from OpenWeatherMap API
        const weatherResponse = await fetch(
          'https://api.openweathermap.org/data/2.5/weather?q=Addis%20Ababa&units=metric&appid=YOUR_API_KEY'
        );
        const weatherData = await weatherResponse.json();

        // Fetch historical data from REST Countries API
        const countriesResponse = await fetch(
          'https://restcountries.com/v3.1/name/ethiopia'
        );
        const countriesData = await countriesResponse.json();

        // Fetch product data from Fake Store API
        const productsResponse = await fetch(
          'https://fakestoreapi.com/products?limit=8'
        );
        const productsData = await productsResponse.json();

        // Combine data with our projects
        const projectsData = [
          {
            id: 1,
            title: "Ethiopian Weather App",
            description: `Real-time weather for Ethiopian cities. Current temperature in Addis Ababa: ${weatherData.main?.temp || '20'}°C, ${weatherData.weather?.[0]?.description || 'Sunny'}`,
            type: "weather",
            image: "https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            videoUrl: "https://www.youtube.com/watch?v=8F6noLk0pGY",
            stats: {
              temperature: `${weatherData.main?.temp || '20'}°C`,
              humidity: `${weatherData.main?.humidity || '65'}%`,
              windSpeed: `${weatherData.wind?.speed || '5'} m/s`,
              condition: weatherData.weather?.[0]?.description || 'Sunny'
            },
            features: [
              `🌡️ Current temp in Addis: ${weatherData.main?.temp || '20'}°C`,
              `💧 Humidity: ${weatherData.main?.humidity || '65'}%`,
              `💨 Wind speed: ${weatherData.wind?.speed || '5'} m/s`,
              "📍 Search any Ethiopian city",
              "📅 5-day weather forecast",
              "🌅 Sunrise/Sunset times"
            ],
            technologies: ["React", "OpenWeather API", "Chart.js", "Axios"],
            demo: "https://weather-app-demo.com",
            github: "https://github.com/yourusername/weather-app",
            videoTitle: "Weather App Demo"
          },
          {
            id: 2,
            title: "Ethiopian Prime Ministers",
            description: `Historical database of Ethiopian leaders. Population: ${(countriesData[0]?.population / 1000000).toFixed(1) || '120'}M, Capital: ${countriesData[0]?.capital?.[0] || 'Addis Ababa'}`,
            type: "history",
            image: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            videoUrl: "https://www.youtube.com/watch?v=0sE8yZbTj7c",
            stats: {
              population: `${(countriesData[0]?.population / 1000000).toFixed(1) || '120'}M`,
              capital: countriesData[0]?.capital?.[0] || 'Addis Ababa',
              region: countriesData[0]?.region || 'Africa',
              currency: Object.values(countriesData[0]?.currencies || {})[0]?.name || 'Ethiopian Birr'
            },
            features: [
              `👥 Population: ${(countriesData[0]?.population / 1000000).toFixed(1) || '120'} million`,
              `🏛️ Capital: ${countriesData[0]?.capital?.[0] || 'Addis Ababa'}`,
              `💰 Currency: ${Object.values(countriesData[0]?.currencies || {})[0]?.name || 'Ethiopian Birr'}`,
              "📜 Complete list of PMs from 1942",
              "📸 Historical images & documents",
              "⏳ Interactive timeline"
            ],
            technologies: ["React", "REST Countries API", "D3.js", "Node.js"],
            demo: "https://prime-ministers-demo.com",
            github: "https://github.com/yourusername/prime-ministers",
            videoTitle: "Historical Timeline Demo"
          },
          {
            id: 3,
            title: "E-Commerce Store",
            description: `Online shopping with ${productsData.length || '50+'} products. Starting from $${Math.min(...productsData.map(p => p.price)) || '20'}`,
            type: "ecommerce",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            videoUrl: "https://www.youtube.com/watch?v=H9wXWoG3O0Y",
            stats: {
              products: productsData.length || '50+',
              minPrice: `$${Math.min(...productsData.map(p => p.price)).toFixed(2) || '20'}`,
              maxPrice: `$${Math.max(...productsData.map(p => p.price)).toFixed(2) || '1000'}`,
              categories: [...new Set(productsData.map(p => p.category))].length || '5'
            },
            features: [
              `📦 ${productsData.length || '50+'} products available`,
              `💰 Price range: $${Math.min(...productsData.map(p => p.price)).toFixed(2) || '20'} - $${Math.max(...productsData.map(p => p.price)).toFixed(2) || '1000'}`,
              `🏷️ ${[...new Set(productsData.map(p => p.category))].length || '5'} categories`,
              "📱 Electronics & Traditional Clothing",
              "💳 Secure payment with Stripe",
              "🚚 Free shipping over $50"
            ],
            technologies: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
            demo: "https://ecommerce-demo.com",
            github: "https://github.com/yourusername/ecommerce",
            videoTitle: "E-Commerce Platform Demo"
          }
        ];

        setProjects(projectsData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load project data. Using fallback data.");
        
        // Fallback data if API fails
        setProjects([
          {
            id: 1,
            title: "Ethiopian Weather App",
            description: "Real-time weather for Ethiopian cities. Current temperature: 22°C, Sunny",
            type: "weather",
            image: "https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            videoUrl: "https://www.youtube.com/watch?v=8F6noLk0pGY",
            stats: { temperature: "22°C", humidity: "65%", windSpeed: "5 m/s", condition: "Sunny" },
            features: ["🌡️ Current temp: 22°C", "💧 Humidity: 65%", "💨 Wind: 5 m/s", "📍 City search", "📅 5-day forecast"],
            technologies: ["React", "OpenWeather API", "Chart.js"],
            demo: "#",
            github: "#",
            videoTitle: "Weather App Demo"
          },
          {
            id: 2,
            title: "Ethiopian Prime Ministers",
            description: "Historical database of Ethiopian leaders. Population: 120M, Capital: Addis Ababa",
            type: "history",
            image: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            videoUrl: "https://www.youtube.com/watch?v=0sE8yZbTj7c",
            stats: { population: "120M", capital: "Addis Ababa", region: "Africa" },
            features: ["👥 Population: 120M", "🏛️ Capital: Addis Ababa", "📜 PMs from 1942", "📸 Historical images"],
            technologies: ["React", "REST Countries API", "D3.js"],
            demo: "#",
            github: "#",
            videoTitle: "Historical Timeline Demo"
          },
          {
            id: 3,
            title: "E-Commerce Store",
            description: "Online shopping with 50+ products. Starting from $20",
            type: "ecommerce",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
            videoUrl: "https://www.youtube.com/watch?v=H9wXWoG3O0Y",
            stats: { products: "50+", minPrice: "$20", maxPrice: "$1000", categories: "5" },
            features: ["📦 50+ products", "💰 $20 - $1000", "🏷️ 5 categories", "💳 Secure payment"],
            technologies: ["React", "Redux", "Node.js", "MongoDB"],
            demo: "#",
            github: "#",
            videoTitle: "E-Commerce Platform Demo"
          }
        ]);
        setLoading(false);
      }
    };

    fetchProjectsData();
  }, []);

  const handleFlip = (id) => {
    setFlippedId(flippedId === id ? null : id);
  };

  if (loading) {
    return (
      <section className="projects-section">
        <div className="projects-container">
          <h1 className="projects-title">My Projects</h1>
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Fetching live project data...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        {error && <div className="error-message">{error}</div>}
        
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
                  </div>
                  
                  <div className="card-content">
                    <h3 className="card-title">{project.title}</h3>
                    <p className="card-description">{project.description}</p>
                    
                    {/* Stats Section */}
                    <div className="project-stats">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="stat-item">
                          <span className="stat-label">{key}:</span>
                          <span className="stat-value">{value}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Technologies */}
                    <div className="tech-stack">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-tag more">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                    
                    {/* Features Preview */}
                    <div className="features-preview">
                      <h4>Key Features:</h4>
                      <ul>
                        {project.features.slice(0, 3).map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="card-actions">
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn demo-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </a>
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn github-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                      <a 
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn video-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Watch Video
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Back of card (only for e-commerce) */}
                {project.type === 'ecommerce' && (
                  <div className="card-back" onClick={() => handleFlip(project.id)}>
                    <h3 className="back-title">Complete E-Commerce Features</h3>
                    <div className="back-features">
                      <div className="feature-category">
                        <h4>📱 Electronics</h4>
                        <ul>
                          <li>Smartphones: $200 - $1000</li>
                          <li>Tablets: $300 - $800</li>
                          <li>Laptops: $500 - $2000</li>
                          <li>Accessories: $20 - $150</li>
                        </ul>
                      </div>
                      <div className="feature-category">
                        <h4>👘 Traditional Clothing</h4>
                        <ul>
                          <li>Men's Habesha: $50 - $200</li>
                          <li>Women's Habesha: $60 - $250</li>
                          <li>Children's: $20 - $80</li>
                          <li>Accessories: $10 - $50</li>
                        </ul>
                      </div>
                      <div className="feature-category">
                        <h4>⚙️ Platform Features</h4>
                        <ul>
                          <li>Secure Payment Gateway</li>
                          <li>Real-time Order Tracking</li>
                          <li>Customer Reviews & Ratings</li>
                          <li>Wishlist & Favorites</li>
                          <li>Flash Sales & Discounts</li>
                        </ul>
                      </div>
                    </div>
                    <div className="back-actions">
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn demo-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Live Demo
                      </a>
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn github-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                      <a 
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn video-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Watch Video
                      </a>
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