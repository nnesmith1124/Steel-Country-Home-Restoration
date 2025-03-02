const express = require('express')
const router = express.Router()

// import routes
const userRoutes = require('./user-routes')
const serviceRoutes = require('./service-routes')
const inquiryRoutes = require('./inquiry-routes')

// define routes
router.use('/users', userRoutes)
router.use('/services', serviceRoutes)
router.use('/inquiries', inquiryRoutes)

// export the router
module.exports = router