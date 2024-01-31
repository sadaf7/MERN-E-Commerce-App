const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    discountedPrice:{
        type: Number,
        required: true
    },
    discountedPercent:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    brand:{
        type: String
    },
    color:{
        type: String
    },
    sizes:[{
        name:{type: String},
        quantity:{type: Number},
    }],
    imgUrl:{
        type:String
    },
    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'ratings'
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'reviews'
    }],
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },
    numRatings:{
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

const Product = mongoose.model('products',productSchema)
module.exports = Product;