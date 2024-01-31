const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }, 
        // this order contains how many items
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orderItems'
    }], 
    orderDate:{
        type: Date,
        required: true,
        default: Date.now()
    },
    deliverDate:{
        type: Date,
    },
    shippingAddress:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'address'
    },
    paymentDetails:{
        paymentMethod:{
            type: String,
        },
        transactionId:{
            type: String,
        },
        paymentId:{
            type: String,
        },
        paymentStatus:{
            type: String,
            default: "PENDING"
        },
    },
    // summation of all items contains in this order
    totalPrice:{
        type: Number,
        required: true
    },
    totalDiscountedPrice:{
        type: Number,
        required: true
    },
    discount:{
        type: Number,
        required: true
    },
    orderStatus:{
        type: String,
        required: true,
        default: "PENDING"
    },
    totalItem:{
        type: Number,
        required: true
    },
    orderDate:{
        type: Date,
        default: Date.now()
    },
})

const Order = mongoose.model('order',orderSchema);
module.exports=Order;