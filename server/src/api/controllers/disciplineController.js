const Discipline = require('./../models/disciplineModel')
const AppError = require('./../utils/appError')

exports.getDisciplines = async (req, res, next) => {
  try {
    await Discipline.find({}, (err, data) => {
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

exports.addDisciplines = async (req, res, next) => {
  try {
    const { name, spec } = req.body

    if(name && spec) {
      const disc = new Discipline({
        'name': name,
        'spec': spec
      })
      await disc.save()
      .then(result => {
        return res.status(200).json({
          status: 'success'
        })
      })
      .catch(err => {
        return next(new AppError(500, 'fail', 'Sometimes shit happens'), req, res, next)
      })
    } else {
      return next(new AppError(449, 'fail', 'Please provide name and specId'), req, res, next)
    }
  }
  catch(err) {
    next(err)
  }
}

exports.removeDisciplines = async (req, res, next) => {
  try {
    const _id = req.body._id
    if(_id) {
      await Discipline.deleteOne({ '_id': _id })
      .then(result => {
        return res.status(200).json({
          status: 'success'
        })
      })
      .catch(err => {
        return next(new AppError(449, 'fail', 'No discipline with provided id'), req, res, next)
      })
    } else {
      return next(new AppError(449, 'fail', 'Please provide discipline\'s id'), req, res, next)
    }
  }
  catch(err) {
    next(err)
  }
}

exports.updateDisciplines = async (req, res, next) => {
  try {
    const { _id, name } = req.body
    if(_id && name) {
      await Discipline.updateOne({
        '_id': _id
      },
      {
        'name': name
      })
      .then(result => {
        return res.status(200).json({
          status: 'success'
        })
      })
      .catch(err => {
        return next(new AppError(449, 'fail', 'No discipline with provided id'), req, res, next)
      })
    } else {
        return next(new AppError(449, 'fail', 'Please provide discipline\'s id, name and spec'), req, res, next)
    }
  }
  catch(err) {
    next(err)
  }
}
