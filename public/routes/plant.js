// routes/plants.js
const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant'); // Import mô hình Plant

// Thêm cây mới
router.post('/plants', async (req, res) => {
    const { name, price, image, quantity } = req.body;
  
    const newPlant = new Plant({ name, price, image, quantity });
  
    try {
      await newPlant.save(); // Lưu cây vào cơ sở dữ liệu
      res.status(201).json(newPlant); // Trả về cây vừa thêm
    } catch (err) {
      console.error(err); // In ra lỗi trong console server
      res.status(400).json({ message: 'Không thể lưu cây vào cơ sở dữ liệu!' }); // Thông báo lỗi cho client
    }
  });
  

module.exports = router;
