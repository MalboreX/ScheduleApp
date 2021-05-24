const mongoose = require('mongoose')
const validator = require('validator')

const timetableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please fill timetable\'s name']
  },
  disciplines: {
    type: Array,
    required: [true, 'Please fill array of disciplines']
  },
  date: {
    type: Date,
    required: [true, 'Please fill date']
  }
})


const Timetable = mongoose.model('Timetable', timetableSchema)
module.exports = Timetable
