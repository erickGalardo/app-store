const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type:String
    },
    code: {
        type:String
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
