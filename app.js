const express = require('express')

const app = express()

app.listen(5000, () => console.log('App has been started...'))

app.use('/', function(request, response) {
    response.end('<h1>I\'m just express</h1>')
})