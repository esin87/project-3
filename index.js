//basic config
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));



// Redirect
app.get('/', (req, res)=>{
    res.redirect('/forums');
});
//Routes

//Forum routes
const forumController = require('./controllers/forums.js');
app.use('/forums', forumController)

//Post Routes
const postController = require('./controllers/posts.js');
app.use('/posts', postController)

//user routes 
// const usersController = require('./controllers/users.js');
// app.use('/users', usersController);

app.listen(PORT, ()=>
console.log('forum api is listening on port:'+ PORT )
);