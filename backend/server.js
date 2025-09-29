const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));

// Basic route
app.get('/', (req, res) => {
  res.send('UrbanClear API is running...');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});