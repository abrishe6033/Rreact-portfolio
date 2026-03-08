import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
// import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleBackgroundChange = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
        <Header 
          isLoggedIn={isLoggedIn} 
          setIsLoggedIn={setIsLoggedIn}
          onBackgroundChange={handleBackgroundChange}
          isDarkMode={isDarkMode}
        />
        <main className="main-content">
           <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />




 <Route 
              path="/" 
              element={isLoggedIn ? <Projects /> : <Login setIsLoggedIn={setIsLoggedIn} />} 
            />

            <Route 
              path="/projects" 
              element={isLoggedIn ? <Projects /> : <Login setIsLoggedIn={setIsLoggedIn} />} 
            />
            <Route path="/contact" element={<Contact />} />
            <Route 
              path="/login" 
              element={<Login setIsLoggedIn={setIsLoggedIn} />} 
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </main>


            

        <Footer />
      </div>
    </Router> 




// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/about" element={<About />} />
  
//   <Route 
//     path="/" 
//     element={isLoggedIn ? <Projects /> : <Login setIsLoggedIn={setIsLoggedIn} />} 
//   />

//   <Route 
//     path="/projects" 
//     element={isLoggedIn ? <Projects /> : <Login setIsLoggedIn={setIsLoggedIn} />} 
//   />
  
//   <Route path="/contact" element={<Contact />} />
  
//   <Route 
//     path="/login" 
//     element={<Login setIsLoggedIn={setIsLoggedIn} />} 
//   />
  
//   {/* FIX: Add setIsLoggedIn to Signup route */}
//   <Route 
//     path="/signup" 
//     element={<Signup setIsLoggedIn={setIsLoggedIn} />} 
//   />
  
//   <Route path="/forgot-password" element={<ForgotPassword />} />
// </Routes>






  );
}

export default App;



