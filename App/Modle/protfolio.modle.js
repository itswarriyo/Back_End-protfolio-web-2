const mongoose = require("mongoose");

const enquerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },

  phone: {
    type: String,
    required: true,
    trim: true
  },

  subject: {
    type: String,
    trim: true
  },

  country: {
    type: String,
    trim: true
  },

  services: {
    type: String,
    trim: true
  },
    message: {
    type: String,
    trim: true
  }

}, {
  timestamps: true
});

module.exports = mongoose.model("PortfolioResponse", enquerySchema);