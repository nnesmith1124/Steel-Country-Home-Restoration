const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String, // Set the type of the name field to String
      required: true // Set the required field to true
    },
    description: {
      type: String, // Set the type of the description field to String
      required: true // Set the required field to true
    },
    imageUrl: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
) // Adds createdAt & updatedAt timestamps

//Define model
module.exports = mongoose.model('Service', serviceSchema)
