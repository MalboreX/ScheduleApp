const mongoose = require('mongoose')
const validator = require('validator')

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please fill teacher\'s name']
  },
  spec: {
    type: String,
    required: [true, 'Please fill teacher\'s speciality']
  }
})


const Teacher = mongoose.model('Teacher', teacherSchema)
module.exports = Teacher
