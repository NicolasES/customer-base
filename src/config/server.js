require('dotenv').config({
    path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
})

const express = require('express')
const app = express()

app.use(express.json())

// ROUTES
const routes = require('../routes')
app.use(routes)

module.exports = app