const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js'); 
const { authenticate } = require('../middleware/authMiddleware.js');

router.route('/').put(authenticate,productController.createdProduct)
router.route('/create').post(authenticate,productController.createMultipleProducts)
router.route('/:id').delete(authenticate,productController.deleteProduct)
router.route('/:id').put(authenticate,productController.updateProduct)



module.exports = router;