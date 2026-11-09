







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
