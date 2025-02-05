const router = require('express').Router() // Import express and create a new router

const Service = require('../models/service') // Import the room model
//const authenticateToken = require("../middleware/authenticateToken"); // Import the authenticateToken middleware

//POST - 'localhost:3000/api/services' - create a new service - Admin only
router.post(
  '/',
  /* authenticateToken ,*/ async (req, res) => {
    try {
      //get request body
      const { name, description, imageUrl } = req.body

      if (!name || !description || !imageUrl) {
        // If any of the fields are missing
        return res.status(401).json({
          message: 'All Fields are Required!' // Return a 401 status code and a message
        })
      }
      //create a new service object
      const newService = new Service({ name, description, imageUrl })

      //save new service to database
      await newService.save()

      res.status(200).json({
        result: newService,
        message: 'Service was created successfully'
      })
    } catch (error) {
      //return a 500 status code and an error message
      res.status(500).json({
        Error: error.message
      })
    }
  }
)

//GET All - 'localhost:3000/api/services' - display all services - Any User
router.get('/', async (req, res) => {
  try {
    const services = await Service.find()
    //get all services from database

    if (services.length === 0) {
      //no services are found in the database
      return res.status(400).json({
        message: 'No Services are found!'
      })
    }
    res.status(200).json({
      //return a 200 status code and the services
      result: services,
      message: 'All services are retrieved successfully' //return a success message
    })
  } catch (error) {
    //return a 500 status code and an error message
    res.status(500).json({
      Error: error.message
    })
  }
})

//GET one - 'localhost:3000/api/services/:id' - display one service by ID - Any User
router.get('/:_id', async (req, res) => {
  try {
    //get the service ID from the request params
    const { _id } = req.params

    const service = await Service.findById(_id)

    //if no service matches the given ID
    if (!service) {
      return res.status(400).json({
        message: 'Service not found!'
      })
    }

    res.status(200).json({
      result: service,
      message: 'Service was retrieved successfully'
    })
  } catch (error) {
    //return a 500 status code and an error message
    res.status(500).json({
      Error: error.message
    })
  }
})

//Update one - 'localhost:3000/api/services/:id' - update a service by ID - Any User
router.put('/:_id', async (req, res) => {
  try {
    //get the service ID from the request params
    const { _id } = req.params

    //get the updated service fields from the request body
    const { name, description, imageUrl } = req.body

    const updatedService = { name, description, imageUrl }

    //find the service and update its fields
    await Service.findByIdAndUpdate(_id, updatedService)

    res.status(200).json({
      result: updatedService,
      message: 'Service was updated!'
    })
  } catch (error) {
    //return a 500 status code and an error message
    res.status(500).json({
      Error: error.message
    })
  }
})

//Delete one - 'localhost:3000/api/services/:id' - delete a service by ID - Any User
router.delete('/:_id', async (req, res) => {
  try {
    //get the service ID from the request params
    const { _id } = req.params

    //find service by ID and delete it
    const serviceToBeDeleted = await Service.findByIdAndDelete(_id)

    if (!serviceToBeDeleted) {
      return res.status(400).json({
        message: 'No service was found'
      })
    }
    res.status(200).json({
      result: serviceToBeDeleted,
      message: `Service "${serviceToBeDeleted.name}" was deleted successfully.`
    })
  } catch (error) {
    //return a 500 status code and an error message
    res.status(500).json({
      Error: error.message
    })
  }
})

module.exports = router
