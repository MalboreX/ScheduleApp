const mongoose = require('mongoose')
const validator = require('validator')

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please fill room\'s name']
  }
})


const Room = mongoose.model('Room', roomSchema)
module.exports = Room
