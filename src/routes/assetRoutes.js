const express = require('express');
const router = express.Router();
const { addAsset } = require('../controllers/assetController');

// This handles POST requests to /api/assets
router.post('/', addAsset);

module.exports = router;