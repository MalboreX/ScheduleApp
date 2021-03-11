const express = require('express')
const cors = require('cors')

const globalErrHandler = require('./api/controllers/errorController')
const userRoutes = require('./api/routes/userRoutes')
const teacherRoutes = require('./api/routes/teacherRoutes')
const specRoutes = require('./api/routes/specRoutes')
const disciplineRoutes = require('./api/routes/disciplineRoutes')

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/teachers', teacherRoutes)
app.use('/api/v1/specs', specRoutes)
app.use('/api/v1/disciplines', disciplineRoutes)


app.use(globalErrHandler);

module.exports = app

//app.listen(5000, () => console.log('App has been started...'))

//const apiRouter = express.Router()


/*
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

apiRouter.get('/auth', (request, response) => {

})




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
*/
