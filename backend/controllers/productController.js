const productService = require('../services/productService.js')


const createdProduct = async(req,res)=>{
    try {
        const product = await productService.createProduct(req.body);
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}
const deleteProduct = async(req,res)=>{
    const productId = req.params.id
    try {
        const product = await productService.deleteProduct(productId);
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}
const updateProduct = async(req,res)=>{
    const productId = req.params.id
    try {
        const product = await productService.updateProduct(productId);
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}
const findProductById = async(req,res)=>{
    const productId = req.params.id
    try {
        const product = await productService.findProductById(productId);
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}
const getAllProduct = async(req,res)=>{
    try {
        const product = await productService.getAllProduct(req.query);
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}
const createMultipleProducts = async(req,res)=>{
    try {
        await productService.createMultipleProducts(req.body);
        return res.status(201).send({message: 'products added successfully'})
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}


module.exports = {createdProduct,deleteProduct,updateProduct,findProductById,getAllProduct,createMultipleProducts}