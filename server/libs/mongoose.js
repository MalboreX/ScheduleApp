const CONFIG = require('./../creds')

const mongoose = require('mongoose')

const dbUrlConnection = `mongodb+srv://${CONFIG.dbuser}:${CONFIG.dbpass}@schedulecluster.lzlry.mongodb.net/${CONFIG.dbname}?retryWrites=true&w=majority`

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

module.exports.Timetable = TimetableModel