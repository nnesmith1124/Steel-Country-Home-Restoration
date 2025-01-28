const mongoose = require('mongoose')
require('dotenv').config()

async function connectDB () {
  try {
    await mongoose.connect(process.env.MONGO_DB)
    console.log('MongoDB Connected')
  } catch (error) {
    console.log('MongoDB Connection Error: ', error)
  }
}

module.exports = connectDB
