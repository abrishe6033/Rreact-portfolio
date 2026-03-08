// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // MySQL Database Connection
// const db = mysql.createConnection({
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USER || 'root',
//     password: process.env.DB_PASSWORD || 'root',
//     database: process.env.DB_NAME || 'portfolio_contact'
// });

// // Connect to database
// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to database:', err);
//         return;
//     }
//     console.log('✅ Connected to MySQL database');
// });

// // Test route
// app.get('/', (req, res) => {
//     res.json({ message: 'Backend server is running!' });
// });

// // API endpoint to handle contact form submission
// app.post('/api/contact', async (req, res) => {
//     const { name, email, subject, message } = req.body;

//     // Validate input
//     if (!name || !email || !subject || !message) {
//         return res.status(400).json({ 
//             success: false, 
//             message: 'All fields are required' 
//         });
//     }

//     try {
//         // Save to database
//         const query = 'INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)';
//         db.execute(query, [name, email, subject, message], (err, result) => {
//             if (err) {
//                 console.error('Database error:', err);
//                 return res.status(500).json({ 
//                     success: false, 
//                     message: 'Error saving message to database' 
//                 });
//             }

//             console.log('✅ Message saved to database with ID:', result.insertId);

//             // Send email notification (optional)
//             sendEmailNotification(name, email, subject, message);

//             // Send success response
//             res.status(200).json({ 
//                 success: true, 
//                 message: 'Message sent successfully! I will get back to you soon.' 
//             });
//         });

//     } catch (error) {
//         console.error('Server error:', error);
//         res.status(500).json({ 
//             success: false, 
//             message: 'Failed to send message. Please try again.' 
//         });
//     }
// });

// // API endpoint to get all messages (for admin panel)
// app.get('/api/messages', (req, res) => {
//     const query = 'SELECT * FROM messages ORDER BY created_at DESC';
//     db.execute(query, (err, results) => {
//         if (err) {
//             console.error('Database error:', err);
//             return res.status(500).json({ 
//                 success: false, 
//                 message: 'Error fetching messages' 
//             });
//         }
//         res.json({ success: true, messages: results });
//     });
// });

// // API endpoint to update message status
// app.put('/api/messages/:id', (req, res) => {
//     const { id } = req.params;
//     const { status } = req.body;

//     const query = 'UPDATE messages SET status = ? WHERE id = ?';
//     db.execute(query, [status, id], (err, result) => {
//         if (err) {
//             console.error('Database error:', err);
//             return res.status(500).json({ 
//                 success: false, 
//                 message: 'Error updating message' 
//             });
//         }
//         res.json({ success: true, message: 'Message status updated' });
//     });
// });

// // Email notification function (optional)
// function sendEmailNotification(name, email, subject, message) {
//     // Create transporter
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS
//         }
//     });

//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: 'shiferawabriham@gmail.com', // Your email
//         subject: `New Contact Form Message: ${subject}`,
//         html: `
//             <h3>New Contact Form Submission</h3>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Subject:</strong> ${subject}</p>
//             <p><strong>Message:</strong></p>
//             <p>${message}</p>
//         `
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error('Email error:', error);
//         } else {
//             console.log('✅ Email sent:', info.response);
//         }
//     });
// }

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`✅ Server is running on http://localhost:${PORT}`);
// });












// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // MySQL Database Connection
// const db = mysql.createConnection({
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USER || 'root',
//     password: process.env.DB_PASSWORD || 'root',
//     database: process.env.DB_NAME || 'portfolio_contact'
// });

// // Connect to database
// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to database:', err);
//         return;
//     }
//     console.log('✅ Connected to MySQL database');
    
//     // Create tables if they don't exist
//     createTables();
// });

// // Create necessary tables
// function createTables() {
//     // Users table
//     const createUsersTable = `
//         CREATE TABLE IF NOT EXISTS users (
//             id INT AUTO_INCREMENT PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(100) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//         )
//     `;
    
//     // Messages table
//     const createMessagesTable = `
//         CREATE TABLE IF NOT EXISTS messages (
//             id INT AUTO_INCREMENT PRIMARY KEY,
//             name VARCHAR(100) NOT NULL,
//             email VARCHAR(100) NOT NULL,
//             subject VARCHAR(200) NOT NULL,
//             message TEXT NOT NULL,
//             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//             status ENUM('unread', 'read', 'replied') DEFAULT 'unread'
//         )
//     `;
    
//     db.execute(createUsersTable, (err) => {
//         if (err) console.error('Error creating users table:', err);
//         else console.log('✅ Users table ready');
//     });
    
//     db.execute(createMessagesTable, (err) => {
//         if (err) console.error('Error creating messages table:', err);
//         else console.log('✅ Messages table ready');
//     });
// }

// // JWT Secret Key
// const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';

// // Test route
// app.get('/', (req, res) => {
//     res.json({ 
//         message: 'Backend server is running!',
//         endpoints: {
//             auth: {
//                 signup: 'POST /api/auth/signup',
//                 login: 'POST /api/auth/login'
//             },
//             contact: {
//                 submit: 'POST /api/contact',
//                 getAll: 'GET /api/messages (protected)'
//             }
//         }
//     });
// });

// // ============= AUTHENTICATION ROUTES =============

// // Signup route
// app.post('/api/auth/signup', async (req, res) => {
//     const { username, email, password } = req.body;

//     // Validate input
//     if (!username || !email || !password) {
//         return res.status(400).json({ 
//             success: false, 
//             message: 'All fields are required' 
//         });
//     }

//     try {
//         // Check if user already exists
//         const checkQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
//         db.execute(checkQuery, [username, email], async (err, results) => {
//             if (err) {
//                 console.error('Database error:', err);
//                 return res.status(500).json({ 
//                     success: false, 
//                     message: 'Database error' 
//                 });
//             }

//             if (results.length > 0) {
//                 return res.status(400).json({ 
//                     success: false, 
//                     message: 'Username or email already exists' 
//                 });
//             }

//             // Hash password
//             const hashedPassword = await bcrypt.hash(password, 10);

//             // Insert new user
//             const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
//             db.execute(insertQuery, [username, email, hashedPassword], (err, result) => {
//                 if (err) {
//                     console.error('Database error:', err);
//                     return res.status(500).json({ 
//                         success: false, 
//                         message: 'Error creating user' 
//                     });
//                 }

//                 // Generate JWT token
//                 const token = jwt.sign(
//                     { id: result.insertId, username }, 
//                     JWT_SECRET, 
//                     { expiresIn: '24h' }
//                 );

//                 res.status(201).json({
//                     success: true,
//                     message: 'User created successfully',
//                     token,
//                     user: { id: result.insertId, username, email }
//                 });
//             });
//         });
//     } catch (error) {
//         console.error('Server error:', error);
//         res.status(500).json({ 
//             success: false, 
//             message: 'Server error' 
//         });
//     }
// });

// // Login route
// app.post('/api/auth/login', async (req, res) => {
//     const { username, password } = req.body;

//     // Validate input
//     if (!username || !password) {
//         return res.status(400).json({ 
//             success: false, 
//             message: 'Username and password are required' 
//         });
//     }

//     try {
//         // Find user
//         const query = 'SELECT * FROM users WHERE username = ?';
//         db.execute(query, [username], async (err, results) => {
//             if (err) {
//                 console.error('Database error:', err);
//                 return res.status(500).json({ 
//                     success: false, 
//                     message: 'Database error' 
//                 });
//             }

//             if (results.length === 0) {
//                 return res.status(401).json({ 
//                     success: false, 
//                     message: 'Invalid username or password' 
//                 });
//             }

//             const user = results[0];

//             // Check password
//             const validPassword = await bcrypt.compare(password, user.password);
//             if (!validPassword) {
//                 return res.status(401).json({ 
//                     success: false, 
//                     message: 'Invalid username or password' 
//                 });
//             }

//             // Generate JWT token
//             const token = jwt.sign(
//                 { id: user.id, username: user.username }, 
//                 JWT_SECRET, 
//                 { expiresIn: '24h' }
//             );

//             res.json({
//                 success: true,
//                 message: 'Login successful',
//                 token,
//                 user: { 
//                     id: user.id, 
//                     username: user.username, 
//                     email: user.email 
//                 }
//             });
//         });
//     } catch (error) {
//         console.error('Server error:', error);
//         res.status(500).json({ 
//             success: false, 
//             message: 'Server error' 
//         });
//     }
// });

// // Middleware to verify token
// function authenticateToken(req, res, next) {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1];

//     if (!token) {
//         return res.status(401).json({ 
//             success: false, 
//             message: 'Access denied. No token provided.' 
//         });
//     }

//     jwt.verify(token, JWT_SECRET, (err, user) => {
//         if (err) {
//             return res.status(403).json({ 
//                 success: false, 
//                 message: 'Invalid or expired token' 
//             });
//         }
//         req.user = user;
//         next();
//     });
// }

// // ============= CONTACT FORM ROUTES =============

// // Submit contact form (public)
// app.post('/api/contact', async (req, res) => {
//     const { name, email, subject, message } = req.body;

//     // Validate input
//     if (!name || !email || !subject || !message) {
//         return res.status(400).json({ 
//             success: false, 
//             message: 'All fields are required' 
//         });
//     }

//     try {
//         // Save to database
//         const query = 'INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)';
//         db.execute(query, [name, email, subject, message], (err, result) => {
//             if (err) {
//                 console.error('Database error:', err);
//                 return res.status(500).json({ 
//                     success: false, 
//                     message: 'Error saving message to database' 
//                 });
//             }

//             console.log('✅ Message saved to database with ID:', result.insertId);

//             // Send email notification (if configured)
//             sendEmailNotification(name, email, subject, message);

//             res.status(200).json({ 
//                 success: true, 
//                 message: 'Message sent successfully! I will get back to you soon.' 
//             });
//         });

//     } catch (error) {
//         console.error('Server error:', error);
//         res.status(500).json({ 
//             success: false, 
//             message: 'Failed to send message. Please try again.' 
//         });
//     }
// });

// // Get all messages (protected - requires token)
// app.get('/api/messages', authenticateToken, (req, res) => {
//     const query = 'SELECT * FROM messages ORDER BY created_at DESC';
//     db.execute(query, (err, results) => {
//         if (err) {
//             console.error('Database error:', err);
//             return res.status(500).json({ 
//                 success: false, 
//                 message: 'Error fetching messages' 
//             });
//         }
//         res.json({ success: true, messages: results });
//     });
// });

// // Update message status (protected)
// app.put('/api/messages/:id', authenticateToken, (req, res) => {
//     const { id } = req.params;
//     const { status } = req.body;

//     const query = 'UPDATE messages SET status = ? WHERE id = ?';
//     db.execute(query, [status, id], (err, result) => {
//         if (err) {
//             console.error('Database error:', err);
//             return res.status(500).json({ 
//                 success: false, 
//                 message: 'Error updating message' 
//             });
//         }
//         res.json({ success: true, message: 'Message status updated' });
//     });
// });

// // Email notification function
// function sendEmailNotification(name, email, subject, message) {
//     // Skip if email credentials are not configured
//     if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
//         console.log('📧 Email notification skipped - credentials not configured');
//         return;
//     }

//     // Create transporter
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS
//         }
//     });

//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: 'shiferawabriham@gmail.com',
//         subject: `New Contact Form Message: ${subject}`,
//         html: `
//             <h3>New Contact Form Submission</h3>
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Subject:</strong> ${subject}</p>
//             <p><strong>Message:</strong></p>
//             <p>${message}</p>
//         `
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error('Email error:', error.message);
//         } else {
//             console.log('✅ Email sent:', info.response);
//         }
//     });
// }

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`✅ Server is running on http://localhost:${PORT}`);
// });















// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const app = express();

// // Middleware - order matters!
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // CORS configuration
// app.use(cors({
//     origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
//     credentials: true
// }));

// // Request logger middleware
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// });

// // MySQL Database Connection
// const db = mysql.createConnection({
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USER || 'root',
//     password: process.env.DB_PASSWORD || 'root',
//     database: process.env.DB_NAME || 'portfolio_contact'
// });

// // Connect to database
// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to database:', err);
//         return;
//     }
//     console.log('✅ Connected to MySQL database');
//     createTables();
// });

// function createTables() {
//     const createUsersTable = `
//         CREATE TABLE IF NOT EXISTS users (
//             id INT AUTO_INCREMENT PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(100) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//         )
//     `;
    
//     const createMessagesTable = `
//         CREATE TABLE IF NOT EXISTS messages (
//             id INT AUTO_INCREMENT PRIMARY KEY,
//             name VARCHAR(100) NOT NULL,
//             email VARCHAR(100) NOT NULL,
//             subject VARCHAR(200) NOT NULL,
//             message TEXT NOT NULL,
//             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//             status ENUM('unread', 'read', 'replied') DEFAULT 'unread'
//         )
//     `;
    
//     db.execute(createUsersTable, (err) => {
//         if (err) console.error('Error creating users table:', err);
//         else console.log('✅ Users table ready');
//     });
    
//     db.execute(createMessagesTable, (err) => {
//         if (err) console.error('Error creating messages table:', err);
//         else console.log('✅ Messages table ready');
//     });
// }

// const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';

// // ============= TEST ROUTES =============
// app.get('/', (req, res) => {
//     res.json({ 
//         success: true,
//         message: 'Backend server is running!',
//         timestamp: new Date().toISOString()
//     });
// });

// app.get('/api/test', (req, res) => {
//     res.json({
//         success: true,
//         message: 'API is working',
//         data: { test: 'value' }
//     });
// });

// // ============= AUTH ROUTES =============
// app.post('/api/auth/signup', async (req, res) => {
//     console.log('📝 Signup request received:', req.body);
    
//     try {
//         const { username, email, password } = req.body;

//         if (!username || !email || !password) {
//             return res.status(400).json({ 
//                 success: false, 
//                 message: 'All fields are required'
//             });
//         }

//         // Check if user exists
//         const checkQuery = 'SELECT * FROM users WHERE username = ? OR email = ?';
//         db.execute(checkQuery, [username, email], async (err, results) => {
//             if (err) {
//                 console.error('Database error:', err);
//                 return res.status(500).json({ 
//                     success: false, 
//                     message: 'Database error'
//                 });
//             }

//             if (results.length > 0) {
//                 return res.status(400).json({ 
//                     success: false, 
//                     message: 'Username or email already exists' 
//                 });
//             }

//             try {
//                 const hashedPassword = await bcrypt.hash(password, 10);

//                 const insertQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
//                 db.execute(insertQuery, [username, email, hashedPassword], (err, result) => {
//                     if (err) {
//                         console.error('Insert error:', err);
//                         return res.status(500).json({ 
//                             success: false, 
//                             message: 'Error creating user'
//                         });
//                     }

//                     const token = jwt.sign(
//                         { id: result.insertId, username }, 
//                         JWT_SECRET, 
//                         { expiresIn: '24h' }
//                     );

//                     console.log('✅ User created successfully:', result.insertId);

//                     res.status(201).json({
//                         success: true,
//                         message: 'User created successfully',
//                         token,
//                         user: { 
//                             id: result.insertId, 
//                             username, 
//                             email 
//                         }
//                     });
//                 });
//             } catch (hashError) {
//                 console.error('Password hash error:', hashError);
//                 res.status(500).json({ 
//                     success: false, 
//                     message: 'Error processing password'
//                 });
//             }
//         });
//     } catch (error) {
//         console.error('Signup error:', error);
//         res.status(500).json({ 
//             success: false, 
//             message: 'Server error'
//         });
//     }
// });

// app.post('/api/auth/login', async (req, res) => {
//     console.log('🔑 Login request received:', req.body);
    
//     try {
//         const { username, password } = req.body;

//         if (!username || !password) {
//             return res.status(400).json({ 
//                 success: false, 
//                 message: 'Username and password are required' 
//             });
//         }

//         const query = 'SELECT * FROM users WHERE username = ?';
//         db.execute(query, [username], async (err, results) => {
//             if (err) {
//                 console.error('Database error:', err);
//                 return res.status(500).json({ 
//                     success: false, 
//                     message: 'Database error' 
//                 });
//             }

//             if (results.length === 0) {
//                 return res.status(401).json({ 
//                     success: false, 
//                     message: 'Invalid username or password' 
//                 });
//             }

//             const user = results[0];
//             const validPassword = await bcrypt.compare(password, user.password);

//             if (!validPassword) {
//                 return res.status(401).json({ 
//                     success: false, 
//                     message: 'Invalid username or password' 
//                 });
//             }

//             const token = jwt.sign(
//                 { id: user.id, username: user.username }, 
//                 JWT_SECRET, 
//                 { expiresIn: '24h' }
//             );

//             res.json({
//                 success: true,
//                 message: 'Login successful',
//                 token,
//                 user: { 
//                     id: user.id, 
//                     username: user.username, 
//                     email: user.email 
//                 }
//             });
//         });
//     } catch (error) {
//         console.error('Login error:', error);
//         res.status(500).json({ 
//             success: false, 
//             message: 'Server error' 
//         });
//     }
// });

// // ============= CONTACT ROUTES =============
// app.post('/api/contact', async (req, res) => {
//     const { name, email, subject, message } = req.body;

//     if (!name || !email || !subject || !message) {
//         return res.status(400).json({ 
//             success: false, 
//             message: 'All fields are required' 
//         });
//     }

//     try {
//         const query = 'INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)';
//         db.execute(query, [name, email, subject, message], (err, result) => {
//             if (err) {
//                 console.error('Database error:', err);
//                 return res.status(500).json({ 
//                     success: false, 
//                     message: 'Error saving message' 
//                 });
//             }

//             console.log('✅ Message saved with ID:', result.insertId);
//             res.status(200).json({ 
//                 success: true, 
//                 message: 'Message sent successfully!' 
//             });
//         });
//     } catch (error) {
//         console.error('Server error:', error);
//         res.status(500).json({ 
//             success: false, 
//             message: 'Failed to send message' 
//         });
//     }
// });

// // ============= 404 HANDLER (FIXED) =============
// // This handles any undefined routes - using a function, not a string pattern
// app.use((req, res) => {
//     console.log('404 Not Found:', req.method, req.url);
//     res.status(404).json({
//         success: false,
//         message: 'Route not found',
//         path: req.originalUrl
//     });
// });

// // ============= ERROR HANDLER =============
// app.use((err, req, res, next) => {
//     console.error('Server error:', err);
//     res.status(500).json({
//         success: false,
//         message: 'Internal server error',
//         error: err.message
//     });
// });

// // ============= START SERVER =============
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`✅ Server is running on http://localhost:${PORT}`);
//     console.log(`📝 Test the API:`);
//     console.log(`   - GET  http://localhost:${PORT}/`);
//     console.log(`   - GET  http://localhost:${PORT}/api/test`);
//     console.log(`   - POST http://localhost:${PORT}/api/auth/signup`);
//     console.log(`   - POST http://localhost:${PORT}/api/auth/login`);
//     console.log(`   - POST http://localhost:${PORT}/api/contact`);
// });













// const express = require('express');
// const mysql = require('mysql2');
// const cors = require('cors');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const app = express();

// // Essential middleware - ORDER MATTERS!
// app.use(express.json()); // This replaces body-parser
// app.use(express.urlencoded({ extended: true }));

// // CORS - allow all for debugging (you can restrict later)
// app.use(cors({
//     origin: '*',
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
// }));

// // Request logger
// app.use((req, res, next) => {
//     console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
//     if (req.method === 'POST') {
//         console.log('Body:', req.body);
//     }
//     next();
// });

// // Force JSON responses
// app.use((req, res, next) => {
//     res.setHeader('Content-Type', 'application/json');
//     next();
// });

// // Database connection
// const db = mysql.createConnection({
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USER || 'root',
//     password: process.env.DB_PASSWORD || 'root',
//     database: process.env.DB_NAME || 'portfolio_contact'
// });

// db.connect((err) => {
//     if (err) {
//         console.error('❌ Database connection failed:', err);
//     } else {
//         console.log('✅ Connected to MySQL database');
//         createTables();
//     }
// });

// function createTables() {
//     const createUsersTable = `
//         CREATE TABLE IF NOT EXISTS users (
//             id INT AUTO_INCREMENT PRIMARY KEY,
//             username VARCHAR(50) UNIQUE NOT NULL,
//             email VARCHAR(100) UNIQUE NOT NULL,
//             password VARCHAR(255) NOT NULL,
//             created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//         )
//     `;
    
//     db.execute(createUsersTable, (err) => {
//         if (err) console.error('Error creating users table:', err);
//         else console.log('✅ Users table ready');
//     });
// }

// const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';

// // ============= PUBLIC ROUTES =============

// // Root endpoint
// app.get('/', (req, res) => {
//     res.json({ 
//         success: true,
//         message: 'Backend server is running!',
//         endpoints: {
//             test: '/api/test',
//             debug: '/api/debug',
//             signup: 'POST /api/auth/signup',
//             login: 'POST /api/auth/login'
//         }
//     });
// });

// // Test endpoint
// app.get('/api/test', (req, res) => {
//     res.json({
//         success: true,
//         message: 'API test endpoint working',
//         data: { test: 'value' }
//     });
// });

// // Debug endpoint
// app.get('/api/debug', (req, res) => {
//     res.json({
//         success: true,
//         message: 'Debug endpoint working',
//         timestamp: new Date().toISOString()
//     });
// });

// // Echo endpoint for testing POST
// app.post('/api/debug/echo', (req, res) => {
//     console.log('Echo received:', req.body);
//     res.json({
//         success: true,
//         received: req.body,
//         headers: req.headers['content-type']
//     });
// });

// // ============= AUTH ROUTES =============

// // Signup
// app.post('/api/auth/signup', async (req, res) => {
//     console.log('📝 Signup request:', req.body);
    
//     try {
//         const { username, email, password } = req.body;

//         // Validation
//         if (!username || !email || !password) {
//             return res.status(400).json({ 
//                 success: false, 
//                 message: 'All fields are required'
//             });
//         }

//         // Check existing user
//         db.execute(
//             'SELECT * FROM users WHERE username = ? OR email = ?',
//             [username, email],
//             async (err, results) => {
//                 if (err) {
//                     console.error('Database error:', err);
//                     return res.status(500).json({ 
//                         success: false, 
//                         message: 'Database error'
//                     });
//                 }

//                 if (results.length > 0) {
//                     return res.status(400).json({ 
//                         success: false, 
//                         message: 'Username or email already exists' 
//                     });
//                 }

//                 try {
//                     const hashedPassword = await bcrypt.hash(password, 10);

//                     db.execute(
//                         'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
//                         [username, email, hashedPassword],
//                         (err, result) => {
//                             if (err) {
//                                 console.error('Insert error:', err);
//                                 return res.status(500).json({ 
//                                     success: false, 
//                                     message: 'Error creating user'
//                                 });
//                             }

//                             const token = jwt.sign(
//                                 { id: result.insertId, username }, 
//                                 JWT_SECRET, 
//                                 { expiresIn: '24h' }
//                             );

//                             console.log('✅ User created:', result.insertId);

//                             res.status(201).json({
//                                 success: true,
//                                 message: 'User created successfully',
//                                 token,
//                                 user: { 
//                                     id: result.insertId, 
//                                     username, 
//                                     email 
//                                 }
//                             });
//                         }
//                     );
//                 } catch (hashError) {
//                     console.error('Hash error:', hashError);
//                     res.status(500).json({ 
//                         success: false, 
//                         message: 'Error processing password'
//                     });
//                 }
//             }
//         );
//     } catch (error) {
//         console.error('Signup error:', error);
//         res.status(500).json({ 
//             success: false, 
//             message: 'Server error'
//         });
//     }
// });

// // Login
// app.post('/api/auth/login', async (req, res) => {
//     console.log('🔑 Login request:', req.body);
    
//     try {
//         const { username, password } = req.body;

//         if (!username || !password) {
//             return res.status(400).json({ 
//                 success: false, 
//                 message: 'Username and password are required' 
//             });
//         }

//         db.execute(
//             'SELECT * FROM users WHERE username = ?',
//             [username],
//             async (err, results) => {
//                 if (err) {
//                     console.error('Database error:', err);
//                     return res.status(500).json({ 
//                         success: false, 
//                         message: 'Database error' 
//                     });
//                 }

//                 if (results.length === 0) {
//                     return res.status(401).json({ 
//                         success: false, 
//                         message: 'Invalid username or password' 
//                     });
//                 }

//                 const user = results[0];
//                 const validPassword = await bcrypt.compare(password, user.password);

//                 if (!validPassword) {
//                     return res.status(401).json({ 
//                         success: false, 
//                         message: 'Invalid username or password' 
//                     });
//                 }

//                 const token = jwt.sign(
//                     { id: user.id, username: user.username }, 
//                     JWT_SECRET, 
//                     { expiresIn: '24h' }
//                 );

//                 console.log('✅ Login successful:', username);

//                 res.json({
//                     success: true,
//                     message: 'Login successful',
//                     token,
//                     user: { 
//                         id: user.id, 
//                         username: user.username, 
//                         email: user.email 
//                     }
//                 });
//             }
//         );
//     } catch (error) {
//         console.error('Login error:', error);
//         res.status(500).json({ 
//             success: false, 
//             message: 'Server error'
//         });
//     }
// });

// // 404 handler
// app.use((req, res) => {
//     console.log('404:', req.method, req.url);
//     res.status(404).json({
//         success: false,
//         message: 'Route not found',
//         path: req.originalUrl
//     });
// });

// // Error handler
// app.use((err, req, res, next) => {
//     console.error('Server error:', err);
//     res.status(500).json({
//         success: false,
//         message: 'Internal server error',
//         error: err.message
//     });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`✅ Server running on http://localhost:${PORT}`);
//     console.log(`📝 Test endpoints:`);
//     console.log(`   GET  http://localhost:${PORT}/`);
//     console.log(`   GET  http://localhost:${PORT}/api/test`);
//     console.log(`   GET  http://localhost:${PORT}/api/debug`);
//     console.log(`   POST http://localhost:${PORT}/api/debug/echo`);
//     console.log(`   POST http://localhost:${PORT}/api/auth/signup`);
//     console.log(`   POST http://localhost:${PORT}/api/auth/login`);
// });













const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ============= MIDDLEWARE =============
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS - allow all for development
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

// Request logger
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    if (req.method === 'POST') {
        console.log('Request body:', req.body);
    }
    next();
});

// ============= DATABASE CONNECTION =============
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_NAME || 'portfolio_contact'
});

db.connect((err) => {
    if (err) {
        console.error('❌ Database connection failed:', err);
    } else {
        console.log('✅ Connected to MySQL database');
        createTables();
    }
});

function createTables() {
    const createUsersTable = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;
    
    db.execute(createUsersTable, (err) => {
        if (err) console.error('Error creating users table:', err);
        else console.log('✅ Users table ready');
    });
}

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';

// ============= ROUTES =============
// Note: All routes must be defined BEFORE the 404 handler

// Root endpoint
app.get('/', (req, res) => {
    console.log('✓ Root route hit');
    res.json({ 
        success: true,
        message: 'Backend server is running!',
        timestamp: new Date().toISOString()
    });
});

// Test endpoint
app.get('/api/test', (req, res) => {
    console.log('✓ Test route hit');
    res.json({
        success: true,
        message: 'API test endpoint is working!',
        data: { 
            test: 'value',
            time: new Date().toISOString()
        }
    });
});

// Debug endpoint
app.get('/api/debug', (req, res) => {
    console.log('✓ Debug route hit');
    res.json({
        success: true,
        message: 'Debug endpoint working',
        timestamp: new Date().toISOString(),
        routes: getRegisteredRoutes()
    });
});

// Helper function to get registered routes
function getRegisteredRoutes() {
    const routes = [];
    app._router.stack.forEach(middleware => {
        if (middleware.route) {
            routes.push({
                path: middleware.route.path,
                methods: Object.keys(middleware.route.methods)
            });
        }
    });
    return routes;
}

// Echo endpoint for testing POST
app.post('/api/debug/echo', (req, res) => {
    console.log('✓ Echo route hit');
    console.log('Received body:', req.body);
    res.json({
        success: true,
        received: req.body,
        headers: req.headers['content-type']
    });
});

// Signup
app.post('/api/auth/signup', async (req, res) => {
    console.log('✓ Signup route hit');
    console.log('Signup data:', req.body);
    
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ 
                success: false, 
                message: 'All fields are required'
            });
        }

        db.execute(
            'SELECT * FROM users WHERE username = ? OR email = ?',
            [username, email],
            async (err, results) => {
                if (err) {
                    console.error('Database error:', err);
                    return res.status(500).json({ 
                        success: false, 
                        message: 'Database error'
                    });
                }

                if (results.length > 0) {
                    return res.status(400).json({ 
                        success: false, 
                        message: 'Username or email already exists' 
                    });
                }

                try {
                    const hashedPassword = await bcrypt.hash(password, 10);

                    db.execute(
                        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
                        [username, email, hashedPassword],
                        (err, result) => {
                            if (err) {
                                console.error('Insert error:', err);
                                return res.status(500).json({ 
                                    success: false, 
                                    message: 'Error creating user'
                                });
                            }

                            const token = jwt.sign(
                                { id: result.insertId, username }, 
                                JWT_SECRET, 
                                { expiresIn: '24h' }
                            );

                            console.log('✅ User created:', result.insertId);

                            res.status(201).json({
                                success: true,
                                message: 'User created successfully',
                                token,
                                user: { 
                                    id: result.insertId, 
                                    username, 
                                    email 
                                }
                            });
                        }
                    );
                } catch (hashError) {
                    console.error('Hash error:', hashError);
                    res.status(500).json({ 
                        success: false, 
                        message: 'Error processing password'
                    });
                }
            }
        );
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Server error'
        });
    }
});

// Login
app.post('/api/auth/login', async (req, res) => {
    console.log('✓ Login route hit');
    console.log('Login data:', req.body);
    
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ 
                success: false, 
                message: 'Username and password are required' 
            });
        }

        db.execute(
            'SELECT * FROM users WHERE username = ?',
            [username],
            async (err, results) => {
                if (err) {
                    console.error('Database error:', err);
                    return res.status(500).json({ 
                        success: false, 
                        message: 'Database error' 
                    });
                }

                if (results.length === 0) {
                    return res.status(401).json({ 
                        success: false, 
                        message: 'Invalid username or password' 
                    });
                }

                const user = results[0];
                const validPassword = await bcrypt.compare(password, user.password);

                if (!validPassword) {
                    return res.status(401).json({ 
                        success: false, 
                        message: 'Invalid username or password' 
                    });
                }

                const token = jwt.sign(
                    { id: user.id, username: user.username }, 
                    JWT_SECRET, 
                    { expiresIn: '24h' }
                );

                console.log('✅ Login successful:', username);

                res.json({
                    success: true,
                    message: 'Login successful',
                    token,
                    user: { 
                        id: user.id, 
                        username: user.username, 
                        email: user.email 
                    }
                });
            }
        );
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Server error'
        });
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    console.log('✓ Contact route hit');
    console.log('Contact data:', req.body);
    
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
            success: false, 
            message: 'All fields are required' 
        });
    }

    try {
        const query = 'INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)';
        db.execute(query, [name, email, subject, message], (err, result) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ 
                    success: false, 
                    message: 'Error saving message' 
                });
            }

            console.log('✅ Message saved with ID:', result.insertId);
            res.status(200).json({ 
                success: true, 
                message: 'Message sent successfully!' 
            });
        });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send message' 
        });
    }
});

// Get all messages (protected)
app.get('/api/messages', (req, res) => {
    console.log('✓ Get messages route hit');
    
    const query = 'SELECT * FROM messages ORDER BY created_at DESC';
    db.execute(query, (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ 
                success: false, 
                message: 'Error fetching messages' 
            });
        }
        res.json({ success: true, messages: results });
    });
});

// For Express 5+, use this format instead of '*'
app.use((req, res) => {
    console.log('❌ 404 Not Found:', req.method, req.originalUrl);
    res.status(404).json({
        success: false,
        message: 'Route not found',
        path: req.originalUrl,
        method: req.method
    });
});





// // ============= 404 HANDLER - This must be LAST =============
// app.use('*', (req, res) => {
//     console.log('❌ 404 Not Found:', req.method, req.originalUrl);
//     res.status(404).json({
//         success: false,
//         message: 'Route not found',
//         path: req.originalUrl,
//         method: req.method
//     });
// });

// ============= ERROR HANDLER =============
app.use((err, req, res, next) => {
    console.error('❌ Server error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: err.message
    });
});

// ============= START SERVER =============
app.listen(PORT, () => {
    console.log('\n' + '='.repeat(50));
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log('='.repeat(50));
    console.log('\n📝 Available endpoints:');
    console.log('   GET  /');
    console.log('   GET  /api/test');
    console.log('   GET  /api/debug');
    console.log('   POST /api/debug/echo');
    console.log('   POST /api/auth/signup');
    console.log('   POST /api/auth/login');
    console.log('   POST /api/contact');
    console.log('   GET  /api/messages');
    console.log('='.repeat(50) + '\n');
});