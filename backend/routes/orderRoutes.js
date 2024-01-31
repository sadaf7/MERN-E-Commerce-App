const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController.js'); 
const { authenticate } = require('../middleware/authMiddleware.js');

router.route('/').post(authenticate,orderController.createOrder)
router.route('/user').get(authenticate,orderController.orderHistory)
router.route('/:id').get(authenticate,orderController.findOrderById)


module.exports = router;