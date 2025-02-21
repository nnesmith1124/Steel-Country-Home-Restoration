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
    message: {type: String,
              required : true           
    }
}, 
{timestamps: true}
)
  //inquiry model
  mongoose.exports = mongoose.model('Inquiry', inquirySchema)
