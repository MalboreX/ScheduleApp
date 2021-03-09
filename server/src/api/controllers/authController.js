const jwt = require('jsonwebtoken')
const config = require('config')

const User = require('./../models/userModel')
const AppError = require('./../utils/appError')

exports.login = async (req, res, next) => {
  const { email, password } = req.body

  if(!email || !password) {
    return next(
      new AppError(404, "fail", "Please provide email or password"),
      req,
      res,
      next
    )
  }

  const user = await User.findOne({
    email
  }).select("+password")

  if(!user || !await user.correctPassword(password, user.password)) {
    return next(
      new AppError(401, "fail", "Email or password is wrong"),
      req,
      res,
      next
    )
  }

  const token = jwt.createToken(user.id)
}
