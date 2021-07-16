const express = require('express');
const Forum = require('../models/forum');
const postRouter = express.Router();
const Post = require('../models/post');

postRouter.post('/', async (req, res) => {
    try {
        // get the post data from the body of the request
        const postData = req.body
        // get the forum id from the body
        const forumId = postData.forumId
        // find the forum by its id
        const forum = await Forum.findById(forumId)
        forum.posts.push(postData)
        const updatedForum = await forum.save()
        res.status(201).json(updatedForum)
    } catch (err) {
        console.log(err)
    }
})

postRouter.delete('/:id', async (req, res)=>{
    try{
        //get id 
        const postId = req.params.id
        const forum = await Forum.findOne({'posts._id': postId})
        forum.posts.id(postId).remove()
        const deletedForum = await forum.save()
        res.sendStatus(204).json(deletedForum);
    }catch(err){
        console.log(err)
    }
})


postRouter.patch('/:id', async (req, res)=>{
    try{
        const postId = req.params.id
        const postData = req.body
        const forum = await Forum.findOne({'posts._id': postId})
        const post = forum.posts.id(postId)
        post.set(postData)
        const updatedPost = await forum.save();
        res.status(201).json(updatedPost);
    }catch(err){
        console.log(err)
    }
})

module.exports = postRouter;
