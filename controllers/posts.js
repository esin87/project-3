// const express = require('express');
// const forumRouter= express.Router();
// const Forum = require('./../models/forum');
// CREATE
// POST 

  // DESTROY
  // DELETE /reviews/:id
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
  //module.exports = forumRouter