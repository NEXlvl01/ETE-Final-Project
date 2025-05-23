const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    trim: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  feedbackText: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true 
});

module.exports = mongoose.model('Feedback', feedbackSchema);