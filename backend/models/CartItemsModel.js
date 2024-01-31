const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartItemsSchema = new Schema({
    // this cartItems related to which cart
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'cart',
        required: true
    },
    // products added as cartItems
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'products',
        required: true
    },
    size:{
        type:String,
        required: true
    },
    // how many products added
    quantity:{
        type:Number,
        required: true,
        default: 1
    },
    price:{
        type:Number,
        required: true
    },
    discountedPrice:{
        type:Number,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
})

const CartItems = mongoose.model('cartItems',cartItemsSchema);
module.exports=CartItems;