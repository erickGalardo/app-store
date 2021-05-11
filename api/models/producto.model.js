const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type:String,
        trim: true,
        maxlength:60,
        require:true
    },
    code: {
        type:String,
        trim: true,
        maxlength:15,
        require:true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    description: {
        type:String
    },
    discontinued:{
        type:Boolean,
        default:false,
        require:true
    },
    unit:{
        type:String,
        default:"pz.",
        require:true
    },
    suggestedPrice:{
        type:Number,
        default:0,
        require:true
    }
});

module.exports = model('Product', productSchema)
