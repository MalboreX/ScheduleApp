const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please fill your name']
  },
  email: {
    type: String,
    required: [true, 'Please fill your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please fill your password'],
    minLength: 6,
    select: true //TODO
  }
})

userSchema.methods.checkPassword = async function(typedPassword, originalPassword) {
  return typedPassword === originalPassword
}

const User = mongoose.model('User', userSchema)
module.exports = User
