const express = require('express')
const cors = require('cors')
//const { Timetable, Spec } = require('./libs/mongoose')
const app = express()

const Timetable = require('./libs/mongoose').Timetable
const Spec = require('./libs/mongoose').Spec

app.listen(5000, () => console.log('App has been started...'))

const apiRouter = express.Router()

apiRouter.get('/schedule', (request, response) => {
    Timetable.find({}, (error, result) => {
        if(error) console.log(error)        
        return response.json(result)
    })
})


app.use(express.json());
app.use(express.urlencoded())
app.use(cors());

app.use('/api/v1/', apiRouter)

//SPECS//
app.get('/api/v1/specs', (request, response) => {
    Spec.find({}, (err, res) => {
        response.json(JSON.stringify(res))
    })    
})

app.post('/api/v1/specs', (request, response) => {
    const name = request.body.name

    const spec = new Spec({name: name})
    spec.save()
    .then((result) => {
        response.json(JSON.stringify({'result': 'ok'}))
    })
    .catch((err) => {
        response.json(JSON.stringify({'result': 'error'}))
    })
    
})