// import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // EmailJS configuration (you need to set up EmailJS account)
//     emailjs.send(
//       'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
//       'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
//       formData,
//       'YOUR_USER_ID' // Replace with your EmailJS user ID
//     ).then((result) => {
//       alert('Message sent successfully! I will get back to you soon.');
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     }, (error) => {
//       alert('Failed to send message. Please try again or contact me directly.');
//     }).finally(() => {
//       setIsSubmitting(false);
//     });
//   };

//   return (
//     <section className="contact">
//       <h1>Contact Me</h1>
      
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Full Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Enter your full name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="email">Email Address</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="subject">Subject</label>
//           <input
//             type="text"
//             id="subject"
//             name="subject"
//             placeholder="Enter the subject"
//             value={formData.subject}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea
//             id="message"
//             name="message"
//             placeholder="Enter your message..."
//             value={formData.message}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
        
//         <button type="submit" className="submit-btn" disabled={isSubmitting}>
//           {isSubmitting ? 'Sending...' : 'Send Message'}
//         </button>
//       </form>
      
//       <div className="contact-info">
//         <h3>Direct Contact Information</h3>
//         <p>📞 Phone: +251 960 336 993</p>
//         <p>📧 Email: shiferawabriham@gmail.com</p>
//         <p>📍 Location: Injibara University, Ethiopia</p>
//         <p style={{marginTop: '1rem', fontStyle: 'italic'}}>
//           Feel free to reach out to me for any collaborations, projects, or just to say hello!
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Contact;











import React, { useState } from 'react';

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage({ text: '', type: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setResponseMessage({ 
          text: 'Message sent successfully! I will get back to you soon.', 
          type: 'success' 
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setResponseMessage({ 
          text: data.message || 'Failed to send message. Please try again.', 
          type: 'error' 
        });
      }
    } catch (error) {
      setResponseMessage({ 
        text: 'Network error. Please check your connection and try again.', 
        type: 'error' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact">
      <h1>Contact Me</h1>
      
      {responseMessage.text && (
        <div className={`message-popup ${responseMessage.type}`}>
          {responseMessage.text}
        </div>
      )}
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter the subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message..."
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
          ></textarea>
        </div>
        
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      
      <div className="contact-info">
        <h3>Direct Contact Information</h3>
        <p>📞 Phone: +251 960 336 993</p>
        <p>📧 Email: shiferawabriham@gmail.com</p>
        <p>📍 Location: Injibara University, Ethiopia</p>
        <p style={{marginTop: '1rem', fontStyle: 'italic'}}>
          Feel free to reach out to me for any collaborations, projects, or just to say hello!
        </p>
      </div>
    </section>
  );
};

export default Contact;