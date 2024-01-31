const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
    // this cart belongs to which user
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    // cartItems of users
    cartItems:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'cartItems',
        required: true
    }],
    // sum of all cartItems which are added to cart
    totalPrice:{
        type:Number,
        default:0,
        required: true
    },
    // total cartItems in this cart 
    totalItem:{
        type:Number,
        default:0,
        required: true
    },
    // total discounted price after adding all items
    totalDiscountedPrice:{
        type:Number,
        default:0,
        required: true
    },
    discount:{
        type:Number,
        default:0,
        required: true
    },
})

const Cart = mongoose.model('cart',cartSchema);
module.exports=Cart;