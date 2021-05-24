const Spec = require('./../models/SpecModel')
const AppError = require('./../utils/appError')

exports.getSpecs = async (req, res, next) => {
  try {
    await Spec.find({}, (err, data) => {
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

exports.addSpecs = async (req, res, next) => {
  try {
    const name = req.body.name

    if(name) {
      const spec = new Spec({
        'name': name
      })

      await spec.save()
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

exports.removeSpecs = async(req, res, next) => {
  try {
    const specId = req.body._id
    if(specId) {
      await Spec.deleteOne({ '_id': specId })
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

exports.updateSpecs = async(req, res, next) => {
  try {
    const { _id, name } = req.body
    if(_id && name) {
      await Spec.updateOne({
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
