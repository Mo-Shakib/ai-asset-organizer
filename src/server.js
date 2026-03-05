require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors()); // Allows our future frontend to talk to this API
app.use(express.json()); // Allows us to parse JSON payloads
app.use(express.static('public')); // This tells Express to serve files from the 'public' folder
// Health Check Endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: 'AI Asset Organizer API is running smoothly.',
        environment: process.env.NODE_ENV,
        timestamp: new Date().toISOString()
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});