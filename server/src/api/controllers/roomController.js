const Room = require('./../models/roomModel')
const AppError = require('./../utils/appError')

exports.getRooms = async (req, res, next) => {
  try {
    await Room.find({}, (err, data) => {
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

exports.addRooms = async (req, res, next) => {
  try {
    const name = req.body.name

    if(name) {
      const room = new Room({
        'name': name
      })

      await room.save()
      .then(result => {
        return res.status(200).json({
          status: 'success'
        })
      })
      .catch(err => {
        return next(new AppError(500, 'fail', 'Sometimes shit happens'), req, res, next)
      })
    } else {
      return next(new AppError(449, 'fail', 'Please provide room\'s name'), req, res, next)
    }
  }
  catch(err) {
    next(err)
  }
}

exports.removeRooms = async(req, res, next) => {
  try {
    const roomId = req.body._id
    if(roomId) {
      await Room.deleteOne({ '_id': roomId })
      .then(result => {
        return res.status(200).json({
          status: 'success'
        })
      })
      .catch(err => {
        return next(new AppError(449, 'fail', 'No room with provided id'), req, res, next)
      })
    } else {
      return next(new AppError(449, 'fail', 'Please provide room\'s id'), req, res, next)
    }
  }
  catch(err) {
    next(err)
  }
}

exports.updateRooms = async(req, res, next) => {
  try {
    const { _id, name } = req.body
    if(_id && name) {
      await Room.updateOne({
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
        return next(new AppError(449, 'fail', 'No room with provided id'), req, res, next)
      })
    } else {
        return next(new AppError(449, 'fail', 'Please provide room\'s id, name'), req, res, next)
    }
  }
  catch(err) {
    next(err)
  }
}
