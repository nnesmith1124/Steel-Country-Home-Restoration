import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import App from "..client/src/App";

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 8080;

const root = ReactDom.createRoot(document.getElementById('root'));



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

root.render(
<App />
);


//routes
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
