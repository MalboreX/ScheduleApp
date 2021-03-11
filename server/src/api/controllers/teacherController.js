const Teacher = require('./../models/teacherModel')
const AppError = require('./../utils/appError')

exports.getTeachers = async (req, res, next) => {
  try {
    await Teacher.find({}, (err, data) => {
      if(err) {
        return next(new AppError(500, 'fail', 'Sometimes shit happens'), req, res, next)
      } else {
          return res.status(200).json(data)
      }
    })
  }
  catch(err) {
    next(err)
  }
}

exports.addTeachers = async (req, res, next) => {
  try {
    const name = req.body.name
    const spec = req.body.spec

    if(name && spec) {
      const teacher = new Teacher({
        'name': name,
        'spec': spec
      })

      await Teacher.save(teacher)
      .then(result => {
        return res.status(200).json({
          result: 'success'
        })
      })
      .catch(err => {
        return next(new AppError(500, 'fail', 'Sometimes shit happens'), req, res, next)
      })
    } else {
      return next(new AppError(449, 'fail', 'Please provide name and spec'), req, res, next)
    }
  }
  catch(err) {
    next(err)
  }
}
