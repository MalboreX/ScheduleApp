const mongoose = require('mongoose')
const config = require('config')

const app = require('./app')

const dbUser = config.get('db.user')
const dbPassword = config.get('db.password')
const dbUrlConnection = `mongodb+srv://${dbUser}:${dbPassword}@schedulecluster.lzlry.mongodb.net/ScheduleApp?retryWrites=true&w=majority`

mongoose.connect(dbUrlConnection, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('open', () => {
    console.log('App has been connected to database...')
})

app.listen(config.get('env.port'), () => console.log('App has been started...'))
