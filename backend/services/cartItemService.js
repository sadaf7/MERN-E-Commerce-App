const CartItems = require('../models/CartItemsModel');
const userService = require('../services/userService.js')


async function updateCartItem(userId,cartItemId,cartItemData){
    try {
        const item = await findCartItemById(cartItemId);
        if(!item){
            throw new Error('The cart item does not exist');
        }
        const user = await userService.findUserById(userId);
        if(!user){
            throw new Error("Invalid userId");
        }
        if(user._id.toString() === userId.toString()){
            item.quantity = cartItemData.quantity;
            item.price = item.quantity * item.product.price;
            item.discountedPrice = item.quantity * item.product.discountedPrice

            let updatedCartItem = await item.save();
            return updatedCartItem;
        } else{
            throw new Error("You do not have permission to perform this action")
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

async function removeCartItem(userId,cartItemId){
    const cartItem = await findCartItemById(cartItemId);

    const user = await userService.findUserById(userId)

    if(user._id.toString() ===  userId.toString()){
        return await CartItems.findByIdAndDelete(cartItemId)
    } else{
        throw new Error ('This is not your item!')
    }
}
async function findCartItemById(cartItemId){
    const cartItem = await CartItems.findById(cartItemId).populate('product');
    if (!cartItem) {
        throw new Error('No cart Item found with that ID');
    } else{
        return cartItem;
    }
}

module.exports = {updateCartItem,removeCartItem,findCartItemById}