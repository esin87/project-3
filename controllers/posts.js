const express = require('express');
const forumRouter = express.Router();

const Forum = require('./../models/forum');


// Forum.findOneAndUpdate(

//     { name: 'Number' }, // search criteria of what to update
//     { $push: { post: req.body } }, // how to update it
//     { new: true }, // tells findOneAndUpdate to return modified article, not the original
//     (err, vampires) => {
//         console.log(vampires);
//         db.close();
//     });
// CREATE
// POST
        forumRouter.findOneAndUpdate('/', async (req, res) => {
            try {
            { _id: req.params.id }, // search criteria of what to update
            { $push: { post: req.body } }, // how to update it
            { new: true }, // tells findOneAndUpdate to return modified article, not the original
            (err, forums) => {
                console.log(forums);
                db.close();
            });
            res.status(201).json(forums)
            } catch(err) {
                console.log(err)
            }
        })
        


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
//   // UPDATE
//   // PATCH /reviews/:id
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

module.exports = forumRouter