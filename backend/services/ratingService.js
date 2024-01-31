const Rating = require('../models/RatingModel.js');
const Product = require('../models/productModel');
const productService = require('../services/productService.js')


async function createRating(reqData,user){
    try {
        const product = await productService.findProductById(reqData.productId);

        const rating = new Rating({
            product: product._id,
            user: user._id,
            rating: reqData.rating,
            createdAt: new Date()
        })
        await product.save();
        return await rating.save()
    } catch (error) {
        throw new Error(error.message)
    }
}

async function getAllRating(productId){
    const product = await productService.findProductById(productId);
    
    return Rating.find({product: product._id}).populate('user')
}

module.exports = {createRating,getAllRating}