const express = require('express');
const router = express.Router();
const ratingController = require('../controllers/ratingController.js'); 
const { authenticate } = require('../middleware/authMiddleware.js');

router.route('/create').post(authenticate,ratingController.createRating)
router.route('/product/:productId').get(authenticate,ratingController.getRating)


module.exports = router;