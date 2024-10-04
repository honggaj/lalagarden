// server.js hoặc app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const plantsRouter = require('./routes/plants'); // Import routes

const app = express();
const PORT = process.env.PORT || 5000;

// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/LaLagarden', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json()); // Cho phép phân tích dữ liệu JSON

// Sử dụng routes
app.use('/api', plantsRouter); // Định tuyến API

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
