const express = require('express');
const router = express.Router();
const { createFeedback, getAllFeedback } = require('../controllers/feedbackController');

// Route to create feedback
router.post('/', createFeedback);

// Route to get all feedback
router.get('/', getAllFeedback);

module.exports = router;