const mongoose = require ('mongoose')

const Schema = mongoose.Schema

const inquirySchema = new Schema({
    name: { type: String,
            required: true
    },
    email: { type: String,
            required: true
    },
    phone: { type: String,
            required: true
    },
    address: { type: String,
            required: true
    }, 
    service: {type: String,
            required: true
    },
    message: {type: String,
              required : true           
    }
})

  
  //inquiry model
  mongoose.exports = mongoose.model('Inquiry', inquirySchema)
