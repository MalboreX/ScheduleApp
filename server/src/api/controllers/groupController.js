const Group = require('./../models/groupModel')
const AppError = require('./../utils/appError')

exports.getGroups = async (req, res, next) => {
  try {
    await Group.find({}, (err, data) => {
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

exports.addGroups = async (req, res, next) => {
  try {
    const { name, spec } = req.body

    if(name && spec) {
      const disc = new Group({
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
      return next(new AppError(449, 'fail', 'Please provide group name and spec'), req, res, next)
    }
  }
  catch(err) {
    next(err)
  }
}

exports.removeGroups = async (req, res, next) => {
  try {
    const _id = req.body._id
    if(_id) {
      await Group.deleteOne({ '_id': _id })
      .then(result => {
        return res.status(200).json({
          status: 'success'
        })
      })
      .catch(err => {
        return next(new AppError(449, 'fail', 'No group with provided id'), req, res, next)
      })
    } else {
      return next(new AppError(449, 'fail', 'Please provide group\'s id'), req, res, next)
    }
  }
  catch(err) {
    next(err)
  }
}

exports.updateGroups = async (req, res, next) => {
  try {
    const { _id, name, spec } = req.body
    if(_id && name) {
      await Group.updateOne({
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
        return next(new AppError(449, 'fail', 'No group with provided id'), req, res, next)
      })
    } else {
        return next(new AppError(449, 'fail', 'Please provide group\'s id, name and spec'), req, res, next)
    }
  }
  catch(err) {
    next(err)
  }
}
