const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js') 

router.route('/profile').get(userController.getUserProfile)
router.route('/').get(userController.getAlluser)

module.exports = router;