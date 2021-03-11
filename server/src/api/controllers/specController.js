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
