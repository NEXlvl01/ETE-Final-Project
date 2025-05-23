const Feedback = require('../models/Feedback');

const createFeedback = async (req, res) => {
  try {
    const { userName, rating, feedbackText } = req.body;

    if (!userName || !rating || !feedbackText) {
      return res.status(400).json({ 
        error: 'All fields are required' 
      });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ 
        error: 'Rating must be between 1 and 5' 
      });
    }

    const newFeedback = new Feedback({
      userName,
      rating,
      feedbackText
    });

    const savedFeedback = await newFeedback.save();
    
    res.status(201).json({
      message: 'Feedback submitted successfully!',
      feedback: savedFeedback
    });

  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to save feedback',
      details: error.message 
    });
    console.log(error);
  }
};

const getAllFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch feedback',
      details: error.message 
    });
    console.log(error);
  }
};

module.exports = {
  createFeedback,
  getAllFeedback
};