const Timetable = require('./../models/timetableModel')
const Group = require('./../models/groupModel')
const AppError = require('./../utils/appError')


exports.getTimetables = async(req, res, next) => {
  try {
    if(!req.params.date) {
      return next(new AppError(419, 'fail', 'Please provide date'), req, res, next)
    }

    const gte = new Date(req.params.date)
    const lt = new Date(req.params.date)
    lt.setDate(lt.getDate() + 1)
    const query =  {
      date: {
        $gte: gte,
        $lt: lt
      }
    }
    //

    const promiseGroup = Group.find({}).then(_groups => _groups.map(x => x.name))

    const promiseTT = Timetable.find(query).then(tt => tt)

    await Promise.all([promiseGroup, promiseTT])
    .then(values => {
      const [ groups, tt ] = values
      
      let _result = tt


      if(tt.length > 0) {
        groups.forEach(gr => {
          if(tt.findIndex(x => x.name === gr) < 0) {
            tt.push({
              date: tt[0].date,
              name: gr,
              disciplines: [{}, {}, {}, {}, {}]
            })
          }
        })
      } else {
        groups.forEach(gr => {
            tt.push({
              date: req.params.date,
              name: gr,
              disciplines: [{}, {}, {}, {}, {}]
            })
        })
      }
      //console.log(tt)

      return res.status(200).json(_result)
    })
  }
  catch(err) {
    next(err)
  }
}

// exports.addTimetables = async(req, res, next) => {
//   try {
//     const timetable = new Timetable(req.body)
//     await timetable.save()
//     .then(result => {
//       return res.status(200).json({
//         status: 'success'
//       })
//     })
//     .catch(error => {
//       return next(new AppError(500, 'fail', 'Sometimes shit happens'), req, res, next)
//     })

//   }
//   catch(err) {
//     next(err)
//   }
// }

exports.addTimetables = async(req, res, next) => {
  try {
    const timetables = req.body.timetables

    for(let x of timetables) {
      const timetable = new Timetable(x)
      await timetable.save()
      .then(result => {
        
      })
      .catch(error => {
        console.log(error)
        return next(new AppError(500, 'fail', 'Sometimes shit happens'), req, res, next)
      }) 
    }

    return res.status(200).json({
      status: 'success'
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

// exports.updateTimetables = async(req, res, next) => {
//   try {
//     const { _id, date, disciplines, name } = req.body
//     if(_id) {
//       await Timetable.updateOne({
//         '_id': _id
//       }, {
//         'date': date,
//         'disciplines': disciplines,
//         'name': name
//       })
//       .then(result => {
//         return res.status(200).json({
//           status: 'success'
//         })
//       })
//       .catch(err => {
//         return next(new AppError(419, 'fail', 'No timetable with provided id'), req, res, next)
//       })
//     } else {
//       return next(new AppError(419, 'fail', 'Please provide id of timetable'), req, res, next)
//     }
//   }
//   catch(err) {
//     next(err)
//   }
// }


exports.updateTimetables = async(req, res, next) => {
  try {
    const timetables = req.body.timetables

    for(let x of timetables) {
      await Timetable.findOneAndUpdate({
        date: x.date,
        name: x.name
      }, {
        date: x.date,
        disciplines: x.disciplines,
        name: x.name
      }, {
        upsert: true
      })
      .then(result => {
        
      })
      .catch(error => {
        console.log(error)
        return next(new AppError(500, 'fail', 'Sometimes shit happens'), req, res, next)
      }) 
    }

    return res.status(200).json({
      status: 'success'
    })
  }
  catch(err) {
    next(err)
  }
}