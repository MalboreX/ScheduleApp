const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please fill teacher\'s name']
  }
})


const Teacher = mongoose.model('Teacher', teacherSchema)
module.exports = Teacher
