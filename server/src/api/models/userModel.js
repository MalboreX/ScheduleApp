const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

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
    select: false
  }
})

userSchema.pre('save', async (next) => {
  if(!this.isModified('password')) {
    return next()
  }

  this.password = await bcrypt.hash(this.password, 12)
  next()
})

userSchema.methods.isCorrectPassword = async function(typedPassword, originalPassword) {
  return await bcrypt.compare(typedPassword, originalPassword)
}

const User = mongoose.model('User', userSchema)
module.exports = User
