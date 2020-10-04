const express = require('express')
const cors = require('cors')

const app = express()


app.listen(5000, () => console.log('App has been started...'))

app.use(express.json());
app.use(cors());

app.get('/api/v1/schedule', function(request, response) {
    const timetable = {
        items: {
            'm': '1'
        }
    }

    return response.json(timetable)
})