const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController.js'); 
const { authenticate } = require('../middleware/authMiddleware.js');

router.route('/').get(authenticate,cartController.findUserCart)
router.route('/add').put(authenticate,cartController.addItemToCart)


module.exports = router;