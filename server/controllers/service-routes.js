const router = require('express').Router()
const Service = require('../models/service')

//POST - 'localhost:000/services - create new service
router.post('/', async (req, res) => {
  try {
    //Get the service name, description and image URL from the request body
    const { name, description, imageUrl } = req.body

    //Request Validation
    if (!name || !description || !imageUrl) {
      return res.status(401).json({
        message: 'All fields are required!'
      })
    }

    //create a new service using the input data
    const newService = new Service({
      name,
      description,
      imageUrl
    })

    //save the new service to database
    await newService.save()

    //return a 200 status code and a success message
    res
      .status(200)
      .json({ result: newService, message: 'Service was created successfully' })
  } catch (error) {
    res.status(500).json({
      Error: error.message
    })
  }
})

//GET All- 'localhost:3000/services - display all services
router.get('/', async (req, res) => {
  try {
    //get all services in the database
    const services = await Service.find()

    //if no services are found
    if (services.length === 0) {
      return res.status(400).json({
        message: 'No Services are found!'
      })
    }

    res.status(200).json({
      result: services,
      message: 'All services are retrieved successfully'
    })
  } catch (error) {
    res.status(500).json({ Error: error.message })
  }
})

//GET One - 'localhost:3000/services - display One service by ID
router.get('/:_id', async (req, res) => {
  try {
    //get the service ID from the request params
    const { _id } = req.params
    //get the selected service fom the database
    const serviceSelected = await Service.findById(_id)

    //if no services are found
    if (!serviceSelected) {
      return res.status(400).json({
        message: 'Service was not found!'
      })
    }

    res.status(200).json({
      result: serviceSelected,
      message: 'Service was retrieved successfully'
    })
  } catch (error) {
    res.status(500).json({ Error: error.message })
  }
})

//PUT - 'localhost:3000/services/:id - update service by ID - ADMIN ONLY
router.put('/:_id', async (req, res) => {
  try {
    //get the service ID from the request params
    const { _id } = req.params

    //get the updated service information from the request body
    const { name, description, imageUrl } = req.body

    //create an updated service object
    const updatedService = { name, description, imageUrl }

    //find the service by ID in the database and then save the changes to the database
    const serviceToBeUpdated = await Service.findByIdAndUpdate(
      _id,
      updatedService
    )

    if (!serviceToBeUpdated) {
      return res.status(400).json({
        message: 'Service not found!'
      })
    }
    //return a success message
    res.status(200).json({
      result: updatedService,
      message: 'Service was updated successfully!'
    })
  } catch (error) {
    res.status(500).json({
      Error: error.message
    })
  }
})

//DELETE - 'localhost:3000/services/:id - delete service by ID
router.delete('/:_id', async (req, res) => {
  try {
    //get the service ID from the request params
    const { _id } = req.params

    const serviceToBeDeleted = await Service.findByIdAndDelete({ _id })

    //if service does not exist
    if (!serviceToBeDeleted) {
      return res.status(401).json({
        message: 'Service was not found!'
      })
    }

    res.status(200).json({
      result: serviceToBeDeleted,
      message: 'Service was deleted successfully'
    })
  } catch (error) {
    res.status(500).json({
      Error: error.message
    })
  }
})

module.exports = router
