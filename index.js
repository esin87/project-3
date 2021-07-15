//basic config
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8000;



//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// const mongoURI = process.env.DATABASE_URL;
// const db = mongoose.connection;


// mongoose.connect( mongoURI )
// require('dotenv').config();

// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
// },  function (err, res) {
//         try {
//             console.log('Connected to Database');
//         } catch (err) {
//             throw err;
//         }
//     })

// Redirect
app.get('/', (req, res)=>{
    res.redirect('/forums');
});
//Routes

//Forum routes
const forumController = require('./controllers/forums.js')
app.use('/forums', forumController)

// // Post Routes
// const postController = require('./controllers/posts.js')
// app.use('/post', postController)

app.listen(PORT, ()=>
console.log('forum api is listening on port:'+ PORT )
);