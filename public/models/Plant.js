// models/Plant.js
const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const Plant = mongoose.model('Plant', plantSchema);

module.exports = Plant;
