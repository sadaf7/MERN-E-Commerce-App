const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js'); 
const { authenticate } = require('../middleware/authMiddleware.js');

router.route('/').get(authenticate,productController.getAllProduct)
router.route('/id/:id').get(authenticate,productController.findProductById)


module.exports = router;