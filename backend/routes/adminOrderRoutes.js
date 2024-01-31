const express = require('express');
const router = express.Router();
const orderController = require('../controllers/adminOrderController.js'); 
const { authenticate } = require('../middleware/authMiddleware.js');

router.route('/').get(authenticate,orderController.getAllOrders)
router.route('/:orderId/confirmed').put(authenticate,orderController.confirmedOrder)
router.route('/:orderId/ship').put(authenticate,orderController.shipOrder)
router.route('/:orderId/deliver').put(authenticate,orderController.deliverOrder)
router.route('/:orderId/delete').put(authenticate,orderController.deleteOrder)
router.route('/:orderId/cancel').put(authenticate,orderController.cancelledOrder)

module.exports = router;