const Review = require('../models/ReviewModel.js');
const Product = require('../models/productModel');
const productService = require('../services/productService.js')


async function createReview(reqData,user){
    try {
        const product = await productService.findProductById(reqData.productId);

        const review = new Review({
            product: product._id,
            user: user._id,
            review: reqData.review,
            createdAt: new Date()
        })
        await product.save();
        return await review.save()
    } catch (error) {
        throw new Error(error.message)
    }
}

async function getAllReview(productId){
    const product = await productService.findProductById(productId);
    
    return Review.find({product: product._id}).populate('user')
}

module.exports = {createReview,getAllReview}