const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const filmeRoutes = require('./routes/filmeRoutes')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(filmeRoutes)

module.exports = app
