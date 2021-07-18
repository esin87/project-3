const mongoose = require('../db/connection');

const postSchema =  new mongoose.Schema({
    title:{
        type:String, 
        required:true,
    },
    body:{
        type:String, 
        required:true, 
    },
    like:{ 
        type:Number, 
        default:0 
    },
}, {
    timestamps: true
});  

module.exports = postSchema;