const express = require('express')
const routes = require('./routes')

const app = express()


app.use(express.json())

app.use((req, res, next) => {
    res.set('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.set('Access-Control-Allow-Headers', 'Content-Type')
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')
    next()
})

app.use(routes)

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.send({ error: error.message || error })
})

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.listen(3000)