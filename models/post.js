const mongoose = require('mongoose');
const connection = require('../db/connection');

const postSchema =  new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
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