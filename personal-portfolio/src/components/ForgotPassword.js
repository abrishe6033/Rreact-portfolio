import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock password reset logic
    if (formData.username && formData.email) {
      setIsSubmitted(true);
      setTimeout(() => {
        alert('Password reset instructions have been sent to your email!');
      }, 1000);
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleReset = () => {
    setFormData({ username: '', email: '' });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="auth-container">
        <div className="auth-form">
          <h2>Check Your Email</h2>
          <p>Password reset instructions have been sent to your email address.</p>
          <p>Please check your inbox and follow the instructions to reset your password.</p>
          <div className="form-links">
            <Link to="/login">Back to Login</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <p>Enter your username and email to reset your password</p>
        
        <div className="form-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="submit-btn">Reset Password</button>
          <button type="button" className="reset-btn" onClick={handleReset}>
            Clear Form
          </button>
        </div>
        
        <div className="form-links">
          <Link to="/login">Remember your password? Login here</Link>
          <Link to="/signup">Don't have an account? Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;