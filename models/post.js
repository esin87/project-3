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
}, {
    timestamps: true
});  

module.exports = postSchema;