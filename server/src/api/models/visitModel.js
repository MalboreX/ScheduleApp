const mongoose = require('mongoose')
const validator = require('validator')

const visitSchema = new mongoose.Schema({
  count: {
    type: Number,
    required: [false, '']
  },
  date: {
      type: Date,
      required: [true, 'Please fill date']
  }
})


const Visit = mongoose.model('Visit', visitSchema)
module.exports = Visit
