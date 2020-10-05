const CONFIG = require('./creds.js')

const express = require('express')
const cors = require('cors')
const mongodb = require('mongodb')

const dbUrlConnection = `mongodb+srv://${CONFIG.dbuser}:${CONFIG.dbpass}@schedulecluster.lzlry.mongodb.net/${CONFIG.dbname}?retryWrites=true&w=majority`

const app = express()
const MongoClient = new mongodb.MongoClient(dbUrlConnection, { useUnifiedTopology: true,  useNewUrlParser: true})

MongoClient.connect((error, client) => {
    if(error)
        console.log(error)
    else console.log('App has been connected to database...')
})

app.listen(5000, () => console.log('App has been started...'))

app.use(express.json());
app.use(cors());

app.get('/api/v1/week', (request, response) => {
    let res = {
        'week': 1
    }

    response.json(res)
})

app.get('/api/v1/schedule', (request, response) => {
    const data = {
        items: { 
            'П-17': {
                    0: {'name': 'Физкультура', 'room': 'С/З', 'teacher': ''}
                }
            }
        }

    return response.json(data)
})