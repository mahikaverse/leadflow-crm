const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const leadRoutes = require('./routes/leadRoutes');
const authRoutes = require('./routes/authRoutes');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
 app.use(
  cors({
    origin: [
      "http://localhost:8080",
      "https://leadflow-crm-red.vercel.app",
      "https://leadflow-dsggd7291-mahikaverses-projects.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', leadRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
