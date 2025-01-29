const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
// middleware to parse JSON data from the body of the request
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 8080

//connect to DB
const connectDB = require('./config/database.js')
connectDB()

//Imports for controllers
const serviceController = require('./controllers/service-routes.js')

//Routes
app.use('/services', serviceController)

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
