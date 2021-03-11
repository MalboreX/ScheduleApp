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

      await teacher.save()
      .then(result => {
        return res.status(200).json({
          status: 'success'
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

exports.removeTeachers = async(req, res, next) => {
  try {
    const teacherId = req.body._id
    if(teacherId) {
      await Teacher.deleteOne({ '_id': teacherId })
      .then(result => {
        return res.status(200).json({
          status: 'success'
        })
      })
      .catch(err => {
        return next(new AppError(449, 'fail', 'No teacher with provided id'), req, res, next)
      })
    } else {
      return next(new AppError(449, 'fail', 'Please provide teacher\'s id'), req, res, next)
    }
  }
  catch(err) {
    next(err)
  }
}

exports.updateTeachers = async(req, res, next) => {
  try {
    const { _id, name, spec } = req.body
    if(_id && name && spec) {
      await Teacher.updateOne({
        '_id': _id
      },
      {
        'name': name,
        'spec': spec
      })
      .then(result => {
        return res.status(200).json({
          status: 'success'
        })
      })
      .catch(err => {
        return next(new AppError(449, 'fail', 'No teacher with provided id'), req, res, next)
      })
    } else {
        return next(new AppError(449, 'fail', 'Please provide teacher\'s id, name and spec'), req, res, next)
    }
  }
  catch(err) {
    next(err)
  }
}
