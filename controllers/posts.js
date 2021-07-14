const express = require('express');
const forumRouter= express.Router();

const Forum = require('./../models/forum');

// CREATE
// POST 
forumRouter.post('/', (req, res, next) => {
    // get the  data from the body of the request
    const postData = req.body
    // get the id from the body
    const postId = postData.postId
    // find the by its id
    Forum.findById(postId)
      .then(forum => {
        // add 
        forum.post.push(postData)
        // save 
        return forum.save()
      })
      // send response back to client
      .then(forum => res.status(201).json({forum: forum}))
      .catch(next)
  })
  // DESTROY
  // DELETE /reviews/:id
  forumRouter.delete('/:id', (req, res, next) => {
    const id = req.params.id
    Forum.findOne({ 'post._id': id })
      .then(forum => {
        forum.posts.id(id).remove()
        return forum.save()
      })
      .then(() => res.sendStatus(204))
      .catch(next)
  })
  // UPDATE
  // PATCH /reviews/:id
  forumRouter.patch('/:id', (req, res, next) => {
    const id = req.params.id
    const postData = req.body
    Forum.findOne({
      'reviews._id': id,
    })
      .then(forum => {
        const review = forum.posts.id(id)
        review.set(postData)
        return forum.save()
      })
      .then(() => res.sendStatus(204))
      .catch(next)
  })

  module.exports = forumRouter