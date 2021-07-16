const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')

const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOneAndUpdate({ email });

    if(!existingUser) return res.status(404).json({ message: 'user dosnt exist'});

    let isPasswordCorrect ;

    if(password == existingUser.password) {
      isPasswordCorrect = true
    }
    
    if(!isPasswordCorrect) return res.status(400).json({ message: "invalid credentials" })

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', {expiresIn: "1h"})

    res.status(200).json({ result: existingUser, token })
  } catch (err) {
    console.log(err)
  }
}

const signup = async (req, res) => {
  const { email, password, username } = req.body;

  try {

    const existingUser = await User.findOne({ email });

    if(existingUser) return res.status(400).json({ message: 'user already exist'});

    // const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create(req.body)

    const token = jwt.sign({ email: result.email, id: result._id }, 'test', {expiresIn: "1h"})

    res.status(201).json({ result, token })
    

  } catch (err) {
      console.log(err)
  }
}

router.post('/signup', signup);

router.post('/login', signin)

router.get('/', async (req, res) => {
  try{
      const allForum = await User.find();
      res.json(allForum);
  }catch(err){
      console.log(err)
  }
  // res.send("welcome to the forum API")
});

module.exports = router;


// router.get('/', (req, res, next) => {
//   User.find({})
//     .then((users) => res.json(users))
//     .catch(next);
// });
// router.post('/signin', (req, res, next) => {
//   User.create(req.body)
//     .then((user) => res.status(201).json(user))
//     .catch(next);
// });

// module.exports = router;