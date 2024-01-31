const CartItems = require("../models/CartItemsModel");
const Cart = require("../models/CartModel");
const Product = require("../models/productModel");

async function createCart(user){
    try {
        const cart = new Cart({user})
        const createdCart = await cart.save();
        return createdCart;
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function findUserCart(user){
    try {
        // find cart with userId
        let cart = await Cart.findOne({user: user});

        // find cartItems with this cart._id
        let cartItems = await CartItems.find({cart: cart._id}).populate('product')

        cart.cartItems = cartItems;

        let  totalPrice= 0;
        let totalDiscountedPrice = 0;
        let totalItem = 0;

        for (let cartItem of cart.cartItems) {
            totalPrice += cartItem.price;
            totalDiscountedPrice += cartItem.discountedPrice;
            totalItem += cartItem.quantity;
        }
        cart.totalPrice = totalPrice;
        cart.discount = totalPrice-totalDiscountedPrice;
        cart.totalItem = totalItem;

        return cart;

    } catch (error) {
        throw new Error(error.message)
    }
}

async function addCartItem(userId,req){
    try {
        // in which cart items going to be added
        const cart = await Cart.findOne({user: userId});

        // which product  is going to be added into the cart
        const product = await Product.findById(req.productId)

        // checking if cartItem already present or not if not then create
        const isPresent = await CartItems.findOne({cart: cart._id, product: product._id, userId})

        if(!isPresent){
            let cartItem = new CartItems ({
                quantity : 1 ,
                product: product._id,
                price : product.price,
                discountedPrice: product.discountedPrice,
                user: userId ,
                size: req.size,
                cart: cart._id
            })

            let createdCartItem = await cartItem.save();
            cart.cartItems.push(createdCartItem)
            await cart.save();
            return 'item added to cart'
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = {createCart,findUserCart,addCartItem}