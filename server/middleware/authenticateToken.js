const jwt = require('jsonwebtoken') //import jsonwebtoken
const User = require('../models/login.schema') //import the user model
const dotenv = require('dotenv')
require('dotenv').config()

const authenticateUser = async (req, res, next) => {
  try {
    // get the token from the request headers
    const token = req.headers['auth']

    // validate the token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Authentication failed'
      })
    }

    // verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // get the user from the database
    const user = await Login.findById(decoded.userId)

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication failed'
      })
    }

    // add the user to the request object
    req.user = user
    next()
  } catch (error) {
    console.log(error)
  }
}
