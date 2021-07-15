const express = require('express');
const forumRouter= express.Router();

const Post = require('../models/forum');
// CREATE
forumRouter.get('/', async (req, res) => {
    try{
        const allPosts = await Post.find();
        res.json(allPosts);
    }catch(err){
        console.log(err)
    }
});

// forumRouter.post('/', async( req, res)=>{
// 	try{
// 		const forumPost = await Post.create(req.body);
// 		res.status(201).json(forumPost);
// 	}catch(err){
// 		console.log(err)
// 	}
// });
// POST 
// forumRouter.post('/', (req, res, next) => {
//     // get the review data from the body of the request
//     const postData = req.body
//     // get the restaurant id from the body
//     const postId = postData.postId
//     // find the restaurant by its id
//     Forum.findById(postId)
//       .then(forum => {
//         // add review to restaurant
//         forum.post.push(postData)
//         // save restaurant
//         return forum.save()
//       })
//       // send responsne back to client
//       .then(forum=> res.status(201).json({forum: forum}))
//       .catch(next)
//   })

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
module.exports = forumRouter;