const mongoose = require ('mongoose')

const inquirySchema = new mongoose.Schema (
  {
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
    description: {type: String,
              required : true           
    },
    status: {type: String, 
             required : false
    }
}, 

)
  //inquiry model
  module.exports = mongoose.model('Inquiry', inquirySchema)
