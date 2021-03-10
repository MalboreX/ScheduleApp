const jwt = require('../utils/jwt')
const config = require('config')

const User = require('./../models/userModel')
const AppError = require('./../utils/appError')

exports.login = async (req, res, next) => {
  try {
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

    if(!user || !await user.checkPassword(password, user.password)) {
      return next(
        new AppError(401, "fail", "Email or password is wrong"),
        req,
        res,
        next
      )
    }

    const token = jwt.createToken(user.id)
    return res.status(200).json({
      status: 'success',
      token: token
    })
  } catch (err) {
    next(err)
  }
}

exports.verifyToken = async (req, res, next) => {
  try {
    if (typeof req.headers.authorization !== undefined) {
      const token = req.headers.authorization.split(' ')[1]
      if (jwt.verifyToken(token)) {
        return res.status(200).json({
          status: 'success'
        })
      }
      else {
      return res.status(401).json({
        status: 'fail'
      })}
    }
  }
  catch (err) {
    next(err)
  }
}
