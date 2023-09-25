const express = require('express');

const router = express.Router();

// get all chatbots
router.get('/', (req, res) => {
    res.json({mssg: 'Get all chatbots'});
});

// get single chatbot
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get single chatbot'});
});

// Post new chatbot
router.post('/', (req, res) => {
    res.json({mssg: 'Create new chatbot'});
});

// Delete chatbot
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a chatbot'});
});

// update a chatbot
router.patch('/:id', (req, res) => {
    res.json({mssg: 'update a chatbot'});
});

module.exports = router;