const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 8080
const cors = require('cors')
const routes = require('./routes/index.js')

app.use(express.json())
app.use(cors())

//connect to DB
const connectDB = require('./config/database.js')
connectDB()

app.use('/api', routes)

// health check
app.get('/alive', (req, res) => {
  res.json({ message: 'API is running' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
