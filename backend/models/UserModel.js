const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: {
        type: String, 
        required: true 
    },
    lastName: {
        type: String, 
        required: true 
    },
    password: {
        type: String, 
        required: true 
    },
    email: {
        type: String, 
        required: true 
    },
    role: {
        type: String, 
        required: true,
        default: 'CUSTOMER'
    },
    mobile: {
        type: String,
    },
    address:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'address'
    }],
    paymentInformation:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'paymentInformation'
    }],
    ratings:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'ratings'
    }],
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'reviews'
    }],
    createdAt:{
        type: Date,
        default: Date.now()
    }
})

const User = mongoose.model('user',userSchema);
module.exports=User;