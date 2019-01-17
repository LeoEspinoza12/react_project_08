

const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secret = require('../config/keys')
const passport = require('passport')

const User = require('../models/Users')


// @route   POST api/users/register
// @desc    Post/Register
// @access  Public
router.post('/register', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  // set errors objects
  const errors = {};

  User.findOne({email})
    .then((user) => {
      // if email does not exists
      if(user){
        // return error if email exists
        errors.email = 'Email already exists!'
        return res.status(400).json({errors});
      } else {
        // if email does not exists 

        const newUser = new User({email, password});

        // create a salt for a new password
        bcrypt.genSalt(10, (err, salt) => {
          // the salt is returne and then add it to the hash pswrd
          bcrypt.hash(newUser.password, salt, (err, hash) =>{
            if(err) throw err;
              // set the password to a new has
              newUser.password = hash;
              // save the new user to the database
              newUser.save()
                .then(user=>{
                  // return a 200 status with the user
                  res.status(200).json(user);
                })
                // return error if there is an error
                .catch(err => console.log(err));
          });
        });
      };
  }); 
});


// @route   POST api/users/login
// @desc    Post/login
// @access  Public
router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password
  // set errors variables
  const errors = {}
  
  User.findOne({email})
    .then(user => {
      // if user does not exists
      if(!user){
        // return error with status 400
        errors.email = 'Email does not exists!'
        return res.status(400).json({errors})
      } else {
        // if user exists, compare password
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            // if password matched / create a token
        if(isMatch){
          const payload = { id: user.id, email: user.email }
              
          jwt.sign(payload, secret.secretOrKey, {expiresIn: 3600}, (err, token) =>{
            res.json({
              sucess: true,
              token: `Bearer ${token}`
            })
          })
        } else {
          // if not matched, send an error response with 400 status
          errors.password = 'Password is incorrect!'
          return res.status(400).json({errors})
        }
      })
    }
  })
})




module.exports = router