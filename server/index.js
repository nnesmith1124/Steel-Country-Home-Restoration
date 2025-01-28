const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
const port = process.env.PORT || 8080

//connect to DB
const connectDB = require('./config/database.js')
connectDB()

//routes
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
