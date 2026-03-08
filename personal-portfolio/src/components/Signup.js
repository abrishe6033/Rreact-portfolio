// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     firstName: '',
//     lastName: '',
//     email: ''
//   });

//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
    
//     // Clear error when user starts typing
//     if (errors[e.target.name]) {
//       setErrors({
//         ...errors,
//         [e.target.name]: ''
//       });
//     }
//   };

//   const validateEmail = (email) => {
//     return email.includes('@') && email.includes('.');
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = {};

//     if (!formData.username) {
//       newErrors.username = 'Username is required';
//     }

//     if (!formData.firstName) {
//       newErrors.firstName = 'First name is required';
//     }

//     if (!formData.lastName) {
//       newErrors.lastName = 'Last name is required';
//     }

//     if (!formData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!validateEmail(formData.email)) {
//       newErrors.email = 'Please include @ and valid domain in the email';
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     // Mock signup logic
//     localStorage.setItem('user', JSON.stringify(formData));
//     alert('Signup successful! Please login with your credentials.');
//     navigate('/login');
//   };

//   const handleReset = () => {
//     setFormData({ username: '', firstName: '', lastName: '', email: '' });
//     setErrors({});
//   };

//   return (
//     <div className="auth-container">
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>Sign Up</h2>
        
//         <div className="form-group">
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//           {errors.username && <span className="error">{errors.username}</span>}
//         </div>
        
//         <div className="form-group">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First Name"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//           />
//           {errors.firstName && <span className="error">{errors.firstName}</span>}
//         </div>
        
//         <div className="form-group">
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Last Name"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//           />
//           {errors.lastName && <span className="error">{errors.lastName}</span>}
//         </div>
        
//         <div className="form-group">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div>
        
//         <div className="form-actions">
//           <button type="submit" className="submit-btn">Sign Up</button>
//           <button type="button" className="reset-btn" onClick={handleReset}>
//             Reset Form
//           </button>
//         </div>
        
//         <div className="form-links">
//           <Link to="/login">Already have an account? Login here</Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;









// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Auth.css';

// const Signup = ({ setIsLoggedIn }) => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validate passwords match
//     if (formData.password !== formData.confirmPassword) {
//       setError('Passwords do not match');
//       return;
//     }

//     setLoading(true);
//     setError('');

//     try {
//       const response = await fetch('http://localhost:5000/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username: formData.username,
//           email: formData.email,
//           password: formData.password
//         })
//       });

//       const data = await response.json();

//       if (data.success) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('user', JSON.stringify(data.user));
//         setIsLoggedIn(true);
//         navigate('/projects');
//       } else {
//         setError(data.message || 'Signup failed');
//       }
//     } catch (error) {
//       setError('Network error. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>Create Account</h2>
//         <p className="auth-subtitle">Sign up to get started</p>
        
//         {error && <div className="error-message">{error}</div>}
        
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
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
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
//             minLength="6"
//           />
//         </div>
        
//         <div className="form-group">
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm Password"
//             value={formData.confirmPassword}
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
//           {loading ? 'Creating Account...' : 'Sign Up'}
//         </button>
        
//         <div className="form-links">
//           <Link to="/login">Already have an account? Login</Link>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;







import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Signup = ({ setIsLoggedIn }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [debugInfo, setDebugInfo] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
    setDebugInfo('');
  };

  const testConnection = async () => {
    try {
      // Test root endpoint
      const rootRes = await fetch('http://localhost:5000/');
      const rootText = await rootRes.text();
      setDebugInfo(`Root response: ${rootText.substring(0, 100)}...`);
      
      try {
        const rootData = JSON.parse(rootText);
        if (rootData.success) {
          setDebugInfo('✅ Backend connected successfully');
          return true;
        }
      } catch (e) {
        setDebugInfo(`❌ Root returned invalid JSON: ${rootText.substring(0, 200)}`);
        return false;
      }
    } catch (err) {
      setDebugInfo(`❌ Connection failed: ${err.message}`);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    setError('');
    setDebugInfo('Testing connection...');

    // First test the connection
    const connected = await testConnection();
    if (!connected) {
      setLoading(false);
      return;
    }

    setDebugInfo('Sending signup request...');

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
      });

      setDebugInfo(prev => prev + `\nResponse status: ${response.status}`);

      // Get the response as text first
      const responseText = await response.text();
      setDebugInfo(prev => prev + `\nRaw response: ${responseText.substring(0, 200)}`);

      // Try to parse as JSON
      let data;
      try {
        data = JSON.parse(responseText);
      } catch (parseError) {
        console.error('Parse error:', parseError);
        console.error('Raw response:', responseText);
        throw new Error(`Invalid JSON response from server. Status: ${response.status}`);
      }

      if (response.ok && data.success) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setIsLoggedIn(true);
        navigate('/projects');
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>
        <p className="auth-subtitle">Sign up to get started</p>
        
        {debugInfo && (
          <div className="debug-info">
            <pre style={{margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-all'}}>
              {debugInfo}
            </pre>
          </div>
        )}
        
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
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password (min 6 characters)"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={loading}
            minLength="6"
          />
        </div>
        
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
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
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
        
        <div className="form-links">
          <Link to="/login">Already have an account? Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;