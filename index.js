//basic config
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8080;


//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Mongo URL and Connection
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

db.on('open', () => {
	console.log('✅ mongo connection made!');
});



// Redirect
app.get('/', (req, res)=>{
    res.redirect('/forums');
});
//Routes

//Forum routes
const forumController = require('./controllers/forums.js')
app.use('/forums', forumController)

// Post Routes
const postController = require('./controllers/posts.js')
app.use('/post', postController)

app.listen(PORT, ()=>
console.log('forum api is listening on port:'+ PORT )
);