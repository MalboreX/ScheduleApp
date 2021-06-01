const jwt = require('../utils/jwt')
const config = require('config')

const User = require('./../models/userModel')
const Visit = require('./../models/visitModel')
const AppError = require('./../utils/appError')

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
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

    if (!user || !await user.checkPassword(password, user.password)) {
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

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    await Visit.update({
      date: today
    },
      { $inc: { count: 1 } }, { upsert: true }
    )

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
        })
      }
    }
    else {
      return res.status(401).json({
        status: 'fail'
      })
    }
  }
  catch (err) {
    next(err)
  }
}

exports.getInfo = async(req, res, next) => {
  try {
    await User.findOne({})
    .then(result => {
      return res.status(200).json(result)
    })
  }
  catch (err) {
    next(err)
  }
}

exports.protect = async (req, res, next) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
      return next(
        new AppError(
          401,
          "fail",
          "You are not logged in! Please login in to continue",
        ),
        req,
        res,
        next,
      )
    }

    if (jwt.verifyToken(token)) {
      next()
    } else {
      return next(
        new AppError(
          401,
          "fail",
          "You are not logged in! Please login in to continue",
        ),
        req,
        res,
        next,
      )
    }
  }
  catch (err) {
    next(err)
  }
}
