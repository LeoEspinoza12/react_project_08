const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ListSchema = new Schema({
  list: {
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
})

module.exports = List = mongoose.model('lists', ListSchema)