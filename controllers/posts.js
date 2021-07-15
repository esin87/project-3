const express = require('express');
const Forum = require('../models/forum');
const postRouter= express.Router();

const Posts = require('../models/post');

//CREATE
postRouter.get('/', async (req, res) => {
    try{
        const allPosts = await Forum.find();
        res.json(allPosts);
    }catch(err){
        console.log(err)
    }
});

// POST 
postRouter.post('/', (req, res, next) => {
    // get the post data from the body of the request
    const postData = req.body
    // get the forum id from the body
    const postId = postData.postId
    // find the forum by its id
    Forum.findById(postId)
      .then(forum => {
        // add review to restaurant
        forum.post.push(postData)
        // save restaurant
        return forum.save()
      })
      // send response back to client
      .then(forum=> res.status(201).json({forum: forum}))
      .catch(next)
  })

  // DESTROY
  //DELETE /reviews/:id
//   forumRouter.delete('/:id', (req, res, next) => {
//     const id = req.params.id
//     Forum.findOne({ 'post._id': id })
//       .then(forum => {
//         forum.posts.id(id).remove()
//         return forum.save()
//       })
//       .then(() => res.sendStatus(204))
//       .catch(next)
//   })
  // UPDATE
  // PATCH /post/:id
//   forumRouter.patch('/:id', (req, res, next) => {
//     const id = req.params.id
//     const postData = req.body
//     Forum.findOne({
//       'reviews._id': id,
//     })
//       .then(forum => {
//         const review = forum.posts.id(id)
//         review.set(postData)
//         return forum.save()
//       })
//       .then(() => res.sendStatus(204))
//       .catch(next)
//   })
module.exports = postRouter;