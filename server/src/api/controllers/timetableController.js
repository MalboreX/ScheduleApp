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

exports.addTimetables = async(req, res, next) => {
  try {
    const timetable = new Timetable(req.body)
    await timetable.save()
    .then(result => {
      return res.status(200).json({
        status: 'success'
      })
    })
    .catch(error => {
      return next(new AppError(500, 'fail', 'Sometimes shit happens'), req, res, next)
    })

  }
  catch(err) {
    next(err)
  }
}

exports.removeTimetables = async(req, res, next) => {
  try {
    const { _id } = req.body
    if(_id) {
      await Timetable.deleteOne({'_id': _id})
      .then(result => {
        return res.status(200).json({
          status: 'success'
        })
      })
      .catch(error => {
        console.log(error)
        return next(new AppError(419, 'fail', 'No timetable with provided id'), req, res, next)
      })
    } else {
      return next(new AppError(419, 'fail', 'Please provide id of timetable'), req, res, next)
    }
  }
  catch(err) {
    next(err)
  }
}
