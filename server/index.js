const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const cors = require('cors')

const PORT = process.env.PORT || 8080

// middleware to parse JSON data from the body of the request
app.use(express.json())
app.use(cors())



//connect to DB
const connectDB = require('./config/database.js')
connectDB()

//* Imports for controllers
const serviceController = require('./controllers/service-routes.js')
const inquiryController = require('./controllers/inquiry-routes.js')

//* Routes
app.use('/api/services', serviceController)
app.use('/api/inquiry',inquiryController)

//routes
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
