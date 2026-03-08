// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // const Login = ({ setIsLoggedIn }) => {
// //   const [formData, setFormData] = useState({
// //     username: '',
// //     password: ''
// //   });

// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
    
// //     // Simple authentication simulation
// //     if (formData.username && formData.password) {
// //       const token = 'mock-jwt-token-' + Date.now();
// //       localStorage.setItem('token', token);
// //       localStorage.setItem('username', formData.username);
// //       setIsLoggedIn(true);
// //       alert('Login successful!');
// //       navigate('/projects');
// //     } else {
// //       alert('Please fill in all fields');
// //     }
// //   };

// //   return (
// //     <div className="auth-container">
// //       <form className="auth-form" onSubmit={handleSubmit}>
// //         <h2>Login</h2>
        
// //         <div className="form-group">
// //           <input
// //             type="text"
// //             name="username"
// //             placeholder="Username"
// //             value={formData.username}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
        
// //         <div className="form-group">
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
        
// //         <button type="submit" className="submit-btn">Login</button>
        
// //         <div className="form-links">
// //           <Link to="/signup">Create New Account</Link>
// //           <Link to="/forgot-password">Forgot Password?</Link>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;





// // import React, { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import './Auth.css';

// // const Login = ({ setIsLoggedIn }) => {
// //   const [formData, setFormData] = useState({
// //     username: '',
// //     password: ''
// //   });
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //     setError('');
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError('');

// //     try {
// //       const response = await fetch('http://localhost:5000/api/auth/login', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify(formData)
// //       });

// //       const data = await response.json();

// //       if (data.success) {
// //         localStorage.setItem('token', data.token);
// //         localStorage.setItem('user', JSON.stringify(data.user));
// //         setIsLoggedIn(true);
// //         navigate('/projects');
// //       } else {
// //         setError(data.message || 'Login failed');
// //       }
// //     } catch (error) {
// //       setError('Network error. Please try again.');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="auth-container">
// //       <form className="auth-form" onSubmit={handleSubmit}>
// //         <h2>Welcome Back</h2>
// //         <p className="auth-subtitle">Please login to your account</p>
        
// //         {error && <div className="error-message">{error}</div>}
        
// //         <div className="form-group">
// //           <input
// //             type="text"
// //             name="username"
// //             placeholder="Username"
// //             value={formData.username}
// //             onChange={handleChange}
// //             required
// //             disabled={loading}
// //           />
// //         </div>
        
// //         <div className="form-group">
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             required
// //             disabled={loading}
// //           />
// //         </div>
        
// //         <button 
// //           type="submit" 
// //           className="submit-btn"
// //           disabled={loading}
// //         >
// //           {loading ? 'Logging in...' : 'Login'}
// //         </button>
        
// //         <div className="form-links">
// //           <Link to="/signup">Create New Account</Link>
// //           <Link to="/forgot-password">Forgot Password?</Link>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;









// // import React, { useState, useEffect } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import './Auth.css';

// // const Login = ({ setIsLoggedIn }) => {
// //   const [formData, setFormData] = useState({
// //     username: '',
// //     password: ''
// //   });
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState('');
// //   const [serverStatus, setServerStatus] = useState('');
// //   const navigate = useNavigate();

// //   // Check server connection when component loads
// //   useEffect(() => {
// //     checkServerConnection();
// //   }, []);

// //   const checkServerConnection = async () => {
// //     try {
// //       const response = await fetch('http://localhost:5000/', {
// //         method: 'GET',
// //         headers: {
// //           'Accept': 'application/json',
// //         },
// //       });
      
// //       if (response.ok) {
// //         const data = await response.json();
// //         setServerStatus(`✅ Connected to server: ${data.message}`);
// //       } else {
// //         setServerStatus(`❌ Server responded with status: ${response.status}`);
// //       }
// //     } catch (err) {
// //       setServerStatus('❌ Cannot connect to server. Make sure backend is running on port 5000');
// //     }
// //   };

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //     setError('');
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError('');

// //     try {
// //       console.log('Attempting login with:', formData);
      
// //       const response = await fetch('http://localhost:5000/api/auth/login', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           'Accept': 'application/json',
// //         },
// //         body: JSON.stringify(formData)
// //       });

// //       console.log('Response status:', response.status);
      
// //       // Get response text first for debugging
// //       const responseText = await response.text();
// //       console.log('Raw response:', responseText);

// //       // Try to parse as JSON
// //       let data;
// //       try {
// //         data = JSON.parse(responseText);
// //       } catch (e) {
// //         console.error('Failed to parse JSON:', responseText);
// //         throw new Error('Server returned invalid response');
// //       }

// //       if (response.ok && data.success) {
// //         localStorage.setItem('token', data.token);
// //         localStorage.setItem('user', JSON.stringify(data.user));
// //         setIsLoggedIn(true);
// //         navigate('/projects');
// //       } else {
// //         setError(data.message || 'Login failed');
// //       }
// //     } catch (error) {
// //       console.error('Login error:', error);
// //       setError(`Connection error: ${error.message}`);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="auth-container">
// //       <form className="auth-form" onSubmit={handleSubmit}>
// //         <h2>Welcome Back</h2>
// //         <p className="auth-subtitle">Please login to your account</p>
        
// //         {/* Server Status */}
// //         <div className={`server-status ${serverStatus.includes('✅') ? 'success' : 'error'}`}>
// //           {serverStatus}
// //           {!serverStatus.includes('✅') && (
// //             <button 
// //               type="button" 
// //               onClick={checkServerConnection}
// //               className="retry-btn"
// //               style={{marginLeft: '10px', padding: '2px 8px'}}
// //             >
// //               Retry
// //             </button>
// //           )}
// //         </div>
        
// //         {error && <div className="error-message">{error}</div>}
        
// //         <div className="form-group">
// //           <input
// //             type="text"
// //             name="username"
// //             placeholder="Username"
// //             value={formData.username}
// //             onChange={handleChange}
// //             required
// //             disabled={loading}
// //           />
// //         </div>
        
// //         <div className="form-group">
// //           <input
// //             type="password"
// //             name="password"
// //             placeholder="Password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             required
// //             disabled={loading}
// //           />
// //         </div>
        
// //         <button 
// //           type="submit" 
// //           className="submit-btn"
// //           disabled={loading || !serverStatus.includes('✅')}
// //         >
// //           {loading ? 'Logging in...' : 'Login'}
// //         </button>
        
// //         <div className="form-links">
// //           <Link to="/signup">Create New Account</Link>
// //           <Link to="/forgot-password">Forgot Password?</Link>
// //         </div>

// //         {/* Debug Info */}
// //         <div className="debug-info" style={{marginTop: '20px', fontSize: '12px'}}>
// //           <p>Backend URL: http://localhost:5000</p>
// //           <p>Make sure backend is running with: node server.js</p>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;









// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Auth.css';

// const Login = ({ setIsLoggedIn }) => {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [debug, setDebug] = useState('');

//   const navigate = useNavigate();

//   useEffect(() => {
//     testConnection();
//   }, []);

//   const testConnection = async () => {
//   //   try {
//   //     setDebug('Testing connection...');
      
//   //     // Test root
//   //     const rootRes = await fetch('http://localhost:5000/');
//   //     const rootText = await rootRes.text();
//   //     setDebug(`Root response: ${rootText.substring(0, 100)}`);
      
//   //     // Test debug endpoint
//   //     // const debugRes = await fetch('http://localhost:5000/api/debug');
//   //     // const debugText = await debugRes.text();
//   //     // setDebug(prev => prev + `\nDebug response: ${debugText.substring(0, 100)}`);
      
//   //   } catch (err) {
//   //     setDebug(`Connection failed: ${err.message}`);
//   //   }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setDebug('');

//     try {
//       console.log('Sending login request...');
      
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//         },
//         body: JSON.stringify(formData)
//       });

//       console.log('Response status:', response.status);
      
//       // Get response as text first
//       const responseText = await response.text();
//       console.log('Raw response:', responseText);
//       setDebug(`Status: ${response.status}\nResponse: ${responseText.substring(0, 200)}`);

//       // Try to parse JSON
//       let data;
//       try {
//         data = JSON.parse(responseText);
//       } catch (e) {
//         console.error('JSON parse error:', e);
//         throw new Error(`Invalid JSON response. Status: ${response.status}`);
//       }

//       if (response.ok && data.success) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('user', JSON.stringify(data.user));
//         setIsLoggedIn(true);
//         navigate('/projects');
//       } else {
//         setError(data.message || 'Login failed');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setError(`Error: ${error.message}`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>Welcome Back</h2>
//         <p className="auth-subtitle">Please login to your account</p>
        
//         {error && <div className="error-message">{error}</div>}
        
//         {/* Debug info */}
//         {debug && (
//           <div className="debug-box">
//             <pre style={{margin: 0, fontSize: '11px', whiteSpace: 'pre-wrap'}}>
//               {debug}
//             </pre>
//             <button type="button" onClick={testConnection} style={{marginTop: '5px'}}>
//               Test Connection
//             </button>
//           </div>
//         )}
        
//         <div className="form-group">
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//             disabled={loading}
//           />
//         </div>
        
//         <div className="form-group">
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             disabled={loading}
//           />
//         </div>
        
//         <button 
//           type="submit" 
//           className="submit-btn"
//           disabled={loading}
//         >
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
        
//         <div className="form-links">
//           <Link to="/signup">Create New Account</Link>
//           <Link to="/forgot-password">Forgot Password?</Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;











import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log('Sending login request...');
      
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log('Response status:', response.status);
      
      // Get response as text first
      const responseText = await response.text();
      console.log('Raw response:', responseText);

      // Try to parse JSON
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (e) {
        console.error('JSON parse error:', e);
        throw new Error(`Invalid JSON response. Status: ${response.status}`);
      }

      if (response.ok && data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setIsLoggedIn(true);
        navigate('/projects');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Welcome Back</h2>
        <p className="auth-subtitle">Please login to your account</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        
        <button 
          type="submit" 
          className="submit-btn"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        
        <div className="form-links">
          <Link to="/signup">Create New Account</Link>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;