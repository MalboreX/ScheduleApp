const mongoose = require('mongoose')
const validator = require('validator')

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please fill group\'s name']
  },
  spec: {
    type: String,
    required: [true, 'Please provide spec']
  }
})


const Group = mongoose.model('Group', groupSchema)
module.exports = Group
