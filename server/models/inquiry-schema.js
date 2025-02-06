const mongoose = require('mongoose')

//inquiry schema
const inquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  service: String,
  message: String
})

//inquiry model
module.exports = mongoose.model('Inquiry', inquirySchema)
