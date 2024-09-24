const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '..')));

// Sample products data (replace with database queries when ready)
const products = [
  { id: 1, name: 'Product 1', price: 19.99 },
  { id: 2, name: 'Product 2', price: 29.99 },
  { id: 3, name: 'Product 3', price: 39.99 }
];

// API Routes
app.get('/api/products', (req, res) => {
  res.json(products);
});

// For any other route, serve the index.html from the root directory
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// MongoDB connection (uncomment and update with your MongoDB URI when ready)
// mongoose.connect('your_mongodb_uri_here', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log('MongoDB connection error:', err));

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
