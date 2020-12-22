const mongoose = require('mongoose')

const dbUrlConnection = `mongodb+srv://mikhail:1q2w3e4r5t@schedulecluster.lzlry.mongodb.net/ScheduleApp?retryWrites=true&w=majority`

mongoose.connect(dbUrlConnection, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('open', () => {
    console.log('App has been connected to database...')
})

const Schema = mongoose.Schema

const Timetable = new Schema({
    name: String,
    subjects: Array,
    date: Date
})

const TimetableModel = mongoose.model('Timetable', Timetable)

const Spec = new Schema({
    name: String
})

const SpecModel = mongoose.model('Spec', Spec)

const Discipline = new Schema({
    name: String,
    speciality: String
})

const DisciplineModel = mongoose.model('Discipline', Discipline)

module.exports.Timetable = TimetableModel
module.exports.Spec = SpecModel
module.exports.Discipline = DisciplineModel