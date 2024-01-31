const cartItemService = require('../services/cartItemService.js')


const updateCartItem=async(req,res)=>{
    const user = req.user;
    try {
        const updatedCartItem = await cartItemService.updateCartItem(user._id,req.params.id,req.body)
        res.status(201).send(updatedCartItem)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}

const removeCartItem=async(req,res)=>{
    const user = req.user;
    try {
        await cartItemService.removeCartItem(user._id,req.params.id)
        res.status(201).send({message: 'cartItem removed successfully'})
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}
const findCartItem=async(req,res)=>{
    const user = req.user;
    try {
        const cartItem = await cartItemService.findCartItemById(req.params.id)
        res.status(201).send(cartItem)
    } catch (error) {
        return res.status(500).send({error: error.message})
    }
}


module.exports = {updateCartItem,removeCartItem,findCartItem}