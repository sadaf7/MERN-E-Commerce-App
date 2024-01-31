const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController.js'); 
const { authenticate } = require('../middleware/authMiddleware.js');

router.route('/create').post(authenticate,reviewController.createReview)
router.route('/product/:productId').get(authenticate,reviewController.getReview)


module.exports = router;