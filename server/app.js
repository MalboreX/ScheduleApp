const express = require('express')
const cors = require('cors')
const app = express()

const Timetable = require('./libs/mongoose').Timetable

app.listen(5000, () => console.log('App has been started...'))

const apiRouter = express.Router()

apiRouter.get('/schedule', (request, response) => {
    Timetable.find({}, (error, result) => {
        if(error) console.log(error)        
        return response.json(result)
    })
})


app.use(express.json());
app.use(cors());

app.use('/api/v1/', apiRouter)

app.get('/api/v1/specs', (requst, response) => {
    response.json('specs')
})