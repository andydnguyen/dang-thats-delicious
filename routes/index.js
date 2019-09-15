const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController.js');

// Do work here
router.get('/', storeController.myMiddleware, storeController.homePage);

module.exports = router;
