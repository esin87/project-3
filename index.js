//basic config
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose =require('mongoose');
const cors = require('cors');
const connection = require('./db/connection');
const PORT = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const mongoURI= process.env.DATABASE_URL;
const db = mongoose.connection;

//connection to the mongo
mongoose.connect(mongoURI);

//routes

//redirect
app.get('/', (req, res)=>{
    res.redirect('/forums');
});

//forum routes

app.listen(PORT, ()=>
console.log('forum api is listening on port:'+ PORT )
);