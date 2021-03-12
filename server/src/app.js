const express = require('express')
const cors = require('cors')

const globalErrHandler = require('./api/controllers/errorController')
const userRoutes = require('./api/routes/userRoutes')
const teacherRoutes = require('./api/routes/teacherRoutes')
const specRoutes = require('./api/routes/specRoutes')
const disciplineRoutes = require('./api/routes/disciplineRoutes')
const timetableRoutes = require('./api/routes/timetableRoutes')

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/teachers', teacherRoutes)
app.use('/api/v1/specs', specRoutes)
app.use('/api/v1/disciplines', disciplineRoutes)
app.use('/api/v1/timetables', timetableRoutes)

app.use(globalErrHandler);

module.exports = app
