const mongoose = require('mongoose')
const validator = require('validator')

const specSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please fill spec\'s name']
  }
})


const Spec = mongoose.model('Spec', specSchema)
module.exports = Spec
