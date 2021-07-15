const mongoose = require('mongoose');
const postSchema = require('./post');

const forumSchema=  new mongoose.Schema({
    topic: {
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    posts: [postSchema]
}, {
    timestamps:true
})

const Forum = mongoose.model('Forum', forumSchema);

module.exports = Forum;