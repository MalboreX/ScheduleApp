const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const app = express()

const Timetable = require('./libs/mongoose').Timetable
const Spec = require('./libs/mongoose').Spec
const Discipline = require('./libs/mongoose').Discipline

app.listen(5000, () => console.log('App has been started...'))

const apiRouter = express.Router()

apiRouter.get('/schedule', (request, response) => {
    Timetable.find({}, (error, result) => {
        if(error) console.log(error)
        return response.json(result)
    })
})

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.use('/api/v1/', apiRouter)

function isAuthorized(req, res, next) {

}

apiRouter.get('/auth', (request, response) => {
  const privateKey = 'MY_SUPER_PRIVATE_KEY'
  const token = jwt.sign({body: 'stuff'}, privateKey, { algorithm: 'HS256'})

  response.status(200).json({
    'token': token
  })
})



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

app.delete('/api/v1/specs', (request, response) => {
    const name = request.body.name
    Spec.deleteOne({name: name})
    .then((result) => {
        response.json(JSON.stringify({'result': 'ok'}))
    })
    .catch((err) => {
        response.json(JSON.stringify({'result': 'error'}))
    })
})

app.patch('/api/v1/specs', (request, response) => {
    const sourceName = request.body.sourceName
    const destName = request.body.destName

    Spec.updateOne({name: sourceName}, {name: destName})
    .then((result) => {
        response.json(JSON.stringify({'result': 'ok'}))
    })
    .catch((err) => {
        response.json(JSON.stringify({'result': 'error'}))
    })
})


//disciplines
app.get('/api/v1/disciplines', (request, response) => {
    Discipline.find({}, (err, res) => {
        response.json(JSON.stringify(res))
    })
})

app.post('/api/v1/disciplines', (request, response) => {
    const name = request.body.name
    const spec = request.body.speciality

    const discipline = new Discipline({name: name, speciality: spec})
    discipline.save()
    .then((result) => {
        response.json(JSON.stringify({'result': 'ok'}))
    })
    .catch((err) => {
        response.json(JSON.stringify({'result': 'error'}))
    })
})

app.delete('/api/v1/disciplines', (request, response) => {
    const name = request.body.name

    Discipline.deleteOne({name: name})
    .then((result) => {
        response.json(JSON.stringify({'result': 'ok'}))
    })
    .catch((err) => {
        response.json(JSON.stringify({'result': 'error'}))
    })
})
