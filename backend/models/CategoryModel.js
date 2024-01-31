const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    name:{
        type: String,
        required: true,
        maxlength: 50,
    },
    parentCategory:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    },
    // men(lev1)->clothes(lev2)->kurta(lev3)
    level:{
        type: Number,
        required: true
    },
})

const Category = mongoose.model('categories',categorySchema);
module.exports=Category;