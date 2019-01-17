

const express = require('express')
const passport = require('passport')
const router = express.Router()

const Lists = require('../models/Lists')

// @route   GET api/lists
// @desc    GET/Lists
// @access  Private
router.get('/', passport.authenticate('jwt', {session: false}),  (req, res) => {
  const mesg = {}  
  Lists.find({user: req.user.id})
    .sort({date: 'descending'})
    .populate('user')
    .then(lists=>{
      if(lists.length === 0){
        mesg.message=`You don't have any lists.`
        return res.status(200).json({mesg})
      } else {
        return res.status(200).json({lists})
      }
    })
    .catch(err =>{

    })
})


// @route   POST api/lists/create
// @desc    POSTT/Lists
// @access  Private
router.post('/create', passport.authenticate('jwt', {session: false}),(req, res) =>{
  const text = req.body.list
  const mesg = {}
  const newList = new Lists({
    list: text,
    user: req.user.id
  })
  newList.save().then(list => {
    return res.status(200).json({list})
  })
  .catch(err => {
    mesg.error = err
    return res.status(400).json({mesg})
  })
})


// @route   POST api/lists/update:id
// @desc    POST/Lists
// @access  Private
router.put('/update/:id', passport.authenticate('jwt', {session:false}), (req, res) => {
  const id = req.params.id
  const text = req.body.text
  const mesg = {}

  List.findById({_id: id})
    .populate('user')
      .then(list =>{
        if(!list){
          mesg.error = 'List is not found!'
          return res.status(400).json({mesg})
        } else {
          list.list = text
          list.save()
            .then(newList =>{
              List.find({user: req.user.id})
                .sort({date: 'descending'})
                .populate('user')
                .then(lists=>{
                  return res.status(200).json({lists})
                })
            })
        }
      })
      .catch(err => {
        mesg.error = err
        res.status(400).json({mesg})
      })
})


// @route   DELETE api/lists/delete:id
// @desc    DELETE/Lists
// @access  Private
router.delete('/delete/:id', passport.authenticate('jwt', {session: false}), (req, res) => {

  const id = req.params.id
  const mesg = {}

  List.findOneAndDelete({_id: id})
    .then(list=>{
        if(!list){
          mesg.error = 'List is not found!'
          return res.status(200).json({mesg})
        } else {
          List.find({user: req.user.id})
          .sort({date: 'descending'})
          .populate('user')
          .then(lists=>{
            return res.status(200).json({lists})
          })
        }
    })
    .catch(err=>{
      mesg.error = err
      res.status(400).json({mesg})
    })
})


module.exports = router