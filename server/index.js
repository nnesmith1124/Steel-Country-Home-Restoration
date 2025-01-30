const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
const cors = require('cors')

const PORT = process.env.PORT || 8080

const root = ReactDom.createRoot(document.getElementById('root'));

// middleware to parse JSON data from the body of the request
app.use(express.json())
app.use(cors())

//inquiry schema
const inquirySchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    service: String,
    message: String
});

//inquiry model
const Inquiry = mongoose.model('Inquiry', inquirySchema);

//database connection
dotenv.config();



//* Imports for controllers
const serviceController = require('./controllers/service-routes.js')

//* Routes
app.use('/api/services', serviceController)

//routes
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
