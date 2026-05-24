const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const bookRoutes = require('../../Booklist/routes/books');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/books', bookRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to BookSky API' });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`BookSky server running on http://localhost:${PORT}`);
});