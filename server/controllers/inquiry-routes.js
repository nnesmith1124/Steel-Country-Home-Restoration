const express = require('express')
const router = express.Router()
const Inquiry = require('../models/inquiry') // Import the room model
const authenticateToken = require('../middleware/authenticateToken')

//Get all inquiries
router.get('/', async (req, res) => { 
try{
    const inquiry = await Inquiry.find()
    
    if (inquiry.length === 0) {
        //no Inquiries are found in the database
        return res.status(400).json({
          message: 'No Inquiries are found!'
        })

 }
 res.status(200).json({
    //return a 200 status code and the inquiry
    result: inquiry,
    message: 'All inquiries are retrieved successfully' //return a success message
  })
}catch{
    res.status(500).json({
        Error: error.message
    })
 }
}) 

// GET - /api/inquiry/:id - get an inquiry by id
router.get("/:_id", async (req, res) => {
    try {
        // capture the id from the request
        const {_id} = req.params;

        // find the inquiry in the array by id
        const inquire = await Inquiry.findById(_id)

        // if not found, return a 404
        if (!inquire) {
            res.status(404).send('Inquiry not found');
            return;
        }

        // if found, return the inquiry
        res.json(inquire);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})

router.post('/', async (req, res) => {
    try {
        const { name, email, phone, address, service, description } = req.body   
// Create New inquiry
        const newInquiry = new Inquiry ({
            name,
            email,
            phone,
            address,
            service,
            description
        })
         // add the new inquiry to the array
         await newInquiry.save();

         // return the new inquiry
         res.status(200).json(newInquiry);
    }catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error: Failure to Post Inquiry');
    }
})

//Update one - update an inquiry by ID 
router.put("/:_id", async (req, res) => {
  try {
    //get the service ID from the request params
    const { _id } = req.params

    //get the updated service fields from the request body
    const { name, email, phone, service, address, message } = req.body

    const updatedInquiry = { name, email, phone, service, address, message }

    //find the service and update its fields
    await Inquiry.findByIdAndUpdate(_id, updatedInquiry)

    res.status(200).json({
      result: updatedInquiry,
      message: 'Inquiry was updated!'
    })
  } catch (error) {
    //return a 500 status code and an error message
    res.status(500).json({
      Error: error.message
    })
  }
})
// DELETE - /api/inquiry/:id - delete an inquiry by id
router.delete("/:_id", async (req, res) => {
    try {
        const id = (req.params);
        // remove the inquire from the array
        const inquire =   Inquiry.findByIdAndRemove(id);
        // if not found, return a 404
        if (!inquire) {
            res.status(404).send('inquiry not found');
            return;
        }
          // return the deleted inquire
          res.status(200).json(inquire)
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router