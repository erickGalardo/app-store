const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    username: {
        type:String,
        require:true,
        unique:true
    },
    password: {
        type: String,
        require: true,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    enabl: {
        type: Boolean,
        default: true
    }
});


module.exports = model('User', userSchema)