const mongoose = require('mongoose')

const inquirySchema = new mongoose.Schema(
        {
                name: {
                        type: String,
                        required: true
                },
                phone: {
                        type: String,
                        required: true
                },
                email: {
                        type: String,
                        required: true
                },
                zipCode: {
                        type: String,
                        required: true
                },
                service: {type: String,
                            required: true
                    },
                message: {
                        type: String,
                        required: true
                }
        }

)
//inquiry model
module.exports = mongoose.model('Inquiry', inquirySchema)
