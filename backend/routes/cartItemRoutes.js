const express = require('express');
const router = express.Router();
const cartItemController = require('../controllers/cartItemController.js'); 
const { authenticate } = require('../middleware/authMiddleware.js');

router.route('/:id').put(authenticate,cartItemController.updateCartItem)
router.route('/:id').delete(authenticate,cartItemController.removeCartItem)


module.exports = router;