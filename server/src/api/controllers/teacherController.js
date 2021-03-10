const Teacher = require('./../models/teacherModel')
const AppError = require('./../utils/appError')

exports.getTeachers = async (req, res, next) => {
  try {
    await Teacher.find({}, (err, data) => {
      if(err) {
        return next(
          new AppError(500, 'fail', 'Sometimes shit happens'),
          req,
          res,
          next
        )
      } else {
          return res.status(200).json(data)
      }
    })
  }
  catch(err) {
    next(err)
  }
}
