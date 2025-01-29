const mongoose = require('mongoose')

//Define the Service Schema
const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
  },
  { timestamps: true } //add createdAt and updatedAt timestamps
)

//Define model
module.exports = mongoose.model('Service', serviceSchema)
//export the service model
