const express = require('express')
const path = require('path')

const mealRoutes = require('./routes/meals')
const commentRoutes = require('./routes/comments')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/meals', mealRoutes)
server.use('/api/v1/comments', commentRoutes)

module.exports = server
