const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js') 

router.route('/signUp').post(authController.registerUser)
router.route('/signIn').post(authController.login)

module.exports = router;