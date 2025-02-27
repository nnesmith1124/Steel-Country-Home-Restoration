const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8080
const cors = require('cors')

app.use(express.json())
app.use(cors())


//connect to DB
const connectDB = require('./config/database.js')
connectDB()

//* Imports for controllers
const serviceController = require('./controllers/service-routes.js')
const inquiryController = require('./controllers/inquiry-routes.js')
const userController = require('./controllers/user-routes.js')

//* Routes
app.use('/api/services', serviceController)
app.use('/api/inquiry', inquiryController)
app.use('/api', userController)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
