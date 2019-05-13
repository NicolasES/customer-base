require('dotenv').config({
    path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
})

const express = require('express')
const app = express()

// ROUTES
const routes = require('../routes')
app.use(routes)

module.exports = app