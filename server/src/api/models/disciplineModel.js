const mongoose = require('mongoose')
const validator = require('validator')

const disciplineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please fill discipline\'s name']
  },
  spec: {
    type: String,
    required: [true, 'Please provide spec']
  }
})


const Discipline = mongoose.model('Discipline', disciplineSchema)
module.exports = Discipline
