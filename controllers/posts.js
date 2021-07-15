const express = require('express');
const Forum = require('../models/forum');
const postRouter = express.Router();

// POST 
// postRouter.post('/', (req, res, next) => {
//     // get the post data from the body of the request
//     const postData = req.body
//     // get the forum id from the body
//     const forumId = postData.forumId
//     // find the forum by its id
//     Forum.findById(forumId)
//         .then(forum => {
//             forum.posts.push(postData)
//             return forum.save()
//         })
//         // send response back to client
//         .then(forum => res.status(201).json(forum))
//         .catch(next)
// })

postRouter.post('/', async (req, res, next) => {
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