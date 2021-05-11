const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    dateInsert:{
        type: Date,
        default: Date.now()
    },
    code: {
        type:String,
        unique:true,
        required:true
    },
    description: {
        type:String
    },
    discontinued:{
        type:Boolean,
        default:false
    },
    unit:{
        type:String,
        default:"pz."
    },
    suggestedPrice:{
        type:Number,
        default:0
    }
});

module.exports = model('Product', productSchema)
