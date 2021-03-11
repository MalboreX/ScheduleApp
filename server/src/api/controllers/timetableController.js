const Timetable = require('./../models/timetableModel')
const AppError = require('./../utils/appError')


exports.getTimetables = async(req, res, next) => {
  try {
    await Timetable.find({}, (error, result) => {
      if (error) {
        return next(new AppError(500, 'fail', 'Sometimes shit happens'), req, res, next)
      } else {
        return res.status(200).json(result)
      }
    })
  }
  catch(err) {
    next(err)
  }
}
