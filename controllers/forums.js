const express = require('express');
const forumRouter = express.Router();

const Forum = require('../models/forum');

// Index
forumRouter.get('/', async (req, res) => {
    try{
        const allForum = await Forum.find();
        res.json(allForum);
    }catch(err){
        console.log(err)
    }
    // res.send("welcome to the forum API")
});

// Show
forumRouter.get('/:id', async (req, res)=>{
	try{
		const forumId = await Forum.findById(req.params.id)
		res.json(forumId);
	}catch(err){
		console.log(err)
	}
});
//Create
forumRouter.post('/', async( req, res)=>{
	try{
		const forumPost = await Forum.create(req.body);
		res.status(201).json(forumPost);
	}catch(err){
		console.log(err)
	}
});
//Put
forumRouter.put('/:id', async(req, res)=> {
	try{
		const updateForum = await Forum.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new:true } 
		);
		res.status(201).json(updateForum)
	}catch(err){
		console.log(err)
	}
});
//Delete
forumRouter.delete('/:id', async (req, res)=>{
	try{
		const deletedForum = await Forum.findByIdAndDelete(req.params.id)
		console.log(deletedForum);
		res.sendStatus(204);
	} catch(err) {
		console.log(err)
	}
})

module.exports = forumRouter;