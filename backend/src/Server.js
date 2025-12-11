require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json()); // To accept JSON on requests
app.use(cors()); // Allows access from different origins (useful for development)

// Default route for API testing
app.get('/', (req, res) => {
  res.send('React Redux ToDo API is working!');
});

// Set a port for the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {console.log('Connected to MongoDB');})
  .catch((err) => {console.error('Error connecting to MongoDB: ', err);});