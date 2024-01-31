const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({
    firstName: {
        type: String, 
        required: true 
    },
    lastName: {
        type: String, 
        required: true 
    },
    streetAddress: {
        type: String, 
        required: true 
    },
    city: {
        type: String, 
        required: true 
    },
    state: {
        type: String, 
        required: true 
    },
    zipCode: {
        type: Number, 
    },
    mobile: {
        type: String, 
        required: true 
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user' 
    },
})

const Address = mongoose.model('address',addressSchema)
module.exports=Address;