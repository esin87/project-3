const mongoose = require('mongoose');


const postSchema =  new mongoose.Schema({
    user:{
        type:String,
        required: true,
    },
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

const Post = mongoose.model('Post', postSchema);

module.exports = postSchema;