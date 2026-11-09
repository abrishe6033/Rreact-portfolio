import React, { useState } from 'react';
import contactImage from '../images/contact image.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', 
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'subject') {
      const onlyNumbers = value.replace(/[^0-9]/g, '');
      setFormData((prev) => ({ ...prev, [name]: onlyNumbers }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage({ text: '', type: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setResponseMessage({ text: 'Message sent successfully! I will get back to you soon.', type: 'success' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setResponseMessage({ text: data.message || 'Failed to send message. Please try again.', type: 'error' });
      }
    } catch (error) {
      setResponseMessage({ text: 'Network error. Please check your connection and try again.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="custom-contact-wrapper">
      <style>{`
        .custom-contact-wrapper {
          background-color: #3C7A9C !important; 
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 100px 0 60px 10px; /* በግራ 10px ክፍተት */
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          box-sizing: border-box;
        }

        .custom-contact-container {
          max-width: 100%;
          width: 100%;
          margin: 0;
          display: flex;
          flex-direction: row; 
          align-items: center; /* ምስሉ ቁመቱን እንዳይወስድ (Stretch እንዳይሆን) ለውጠነዋል */
          justify-content: space-between;
        }

        /* የምስሉ ክፍል */
        .custom-contact-image-side {
          flex: 1;
          max-width: 45%; 
          display: flex;
          justify-content: flex-start; 
          align-items: center;
        }

        .custom-contact-image {
          width: 100%;
          height: 450px; /* የምስሉ ቁመት ተቀንሷል (100% ሳይሆን 450px) */
          object-fit: cover; 
          border-radius: 20px; 
          box-shadow: 5px 15px 35px rgba(0,0,0,0.4);
          animation: contactFloat 5s ease-in-out infinite;
        }

        @keyframes contactFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        /* የፎርሙ ክፍል */
        .custom-contact-form-side {
          flex: 1;
          max-width: 55%; 
          display: flex;
          flex-direction: column;
          padding: 0 40px 0 30px; 
          justify-content: center;
        }

        .custom-contact-form-side h1 {
          color: #ffffff;
          font-size: 2.8rem;
          margin-bottom: 20px;
          font-weight: 800;
          text-align: left;
        }

        .custom-contact-form {
          background: rgba(255, 255, 255, 0.1); 
          padding: 30px;
          border-radius: 15px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          width: 100%;
        }

        .custom-form-group {
          margin-bottom: 15px;
        }

        .custom-form-group label {
          display: block;
          color: #ffffff !important;
          font-weight: 600;
          margin-bottom: 5px;
          font-size: 0.95rem;
        }

        .custom-form-group input,
        .custom-form-group textarea {
          width: 100%;
          padding: 12px 15px;
          background-color: #3C7A9C !important; 
          color: #ffffff !important; 
          border: 1px solid rgba(255, 255, 255, 0.3) !important; 
          border-radius: 8px;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }

        .custom-form-group input::placeholder,
        .custom-form-group textarea::placeholder {
          color: rgba(255, 255, 255, 0.6) !important;
        }

        .custom-form-group input:focus,
        .custom-form-group textarea:focus {
          border-color: #FFD700 !important; 
          box-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
        }

        .custom-submit-btn {
          width: 100%;
          padding: 14px;
          background-color: #FFD700 !important;
          color: #000000 !important;
          border: none;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 5px;
        }

        .custom-submit-btn:hover {
          background-color: #E6C200 !important;
          transform: translateY(-2px);
        }

        .custom-message-popup {
          padding: 10px;
          margin-bottom: 15px;
          border-radius: 8px;
          text-align: center;
          font-weight: bold;
          font-size: 0.9rem;
        }
        .custom-message-popup.success { background-color: #4caf50; color: white; }
        .custom-message-popup.error { background-color: #f44336; color: white; }

        /* ለስልክ ስክሪን */
        @media (max-width: 968px) {
          .custom-contact-wrapper {
            padding: 100px 20px 60px 20px;
          }
          .custom-contact-container {
            flex-direction: column; 
            text-align: center;
            gap: 30px;
            align-items: center; 
          }
          .custom-contact-image-side, .custom-contact-form-side {
            max-width: 100%;
            width: 100%;
            padding: 0;
          }
          .custom-contact-image {
            height: 300px; /* በስልክ ላይ የበለጠ አነስተኛ */
          }
          .custom-contact-form-side h1 {
            text-align: center;
            font-size: 2.2rem;
          }
        }
      `}</style>

      <div className="custom-contact-container">
        
        {/* ምስል */}
        <div className="custom-contact-image-side">
          <img src={contactImage} alt="Contact" className="custom-contact-image" />
        </div>

        {/* ፎርም */}
        <div className="custom-contact-form-side">
          <h1>Contact Me</h1>
          
          <form className="custom-contact-form" onSubmit={handleSubmit}>
            {responseMessage.text && (
              <div className={`custom-message-popup ${responseMessage.type}`}>
                {responseMessage.text}
              </div>
            )}

            <div className="custom-form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your full name" value={formData.name} onChange={handleChange} required />
            </div>
            
            <div className="custom-form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
            </div>
            
            <div className="custom-form-group">
              <label htmlFor="subject">Phone Number</label>
              <input type="tel" id="subject" name="subject" placeholder="Enter your phone number (e.g., 0912345678)" value={formData.subject} onChange={handleChange} required />
            </div>
            
            <div className="custom-form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Enter your message..." value={formData.message} onChange={handleChange} required rows="3"></textarea>
            </div>
            
            <button type="submit" className="custom-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
