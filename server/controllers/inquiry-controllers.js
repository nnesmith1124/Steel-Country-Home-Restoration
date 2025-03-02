const Inquiry = require("../models/inquiry"); // Import the room model

//Get all inquiries
const getAllInquiries = async (req, res) => {
  try {
    const inquiry = await Inquiry.find();

    if (inquiry.length === 0) {
      //no Inquiries are found in the database
      return res.status(400).json({
        message: "No Inquiries are found!",
      });
    }
    res.status(200).json({
      //return a 200 status code and the inquiry
      result: inquiry,
      message: "All inquiries are retrieved successfully", //return a success message
    });
  } catch {
    res.status(500).json({
      Error: error.message,
    });
  }
};

// GET - /api/inquiry/:id - get an inquiry by id
const getInquiryById = async (req, res) => {
  try {
    // capture the id from the request
    const { _id } = req.params;

    // find the inquiry in the array by id
    const inquire = await Inquiry.findById(_id);

    // if not found, return a 404
    if (!inquire) {
      res.status(404).send("Inquiry not found");
      return;
    }

    // if found, return the inquiry
    res.json(inquire);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

// POST - /api/inquiries - create a new inquiry
const createInquiry = async (req, res) => {
  try {
    const { name, phone, email, zipCode, service, message } = req.body;
    // Create New inquiry
    const newInquiry = new Inquiry({
      name,
      phone,
      email,
      zipCode,
      service,
      message,
    });
    // add the new inquiry to the array
    await newInquiry.save();

    // return the new inquiry
    res.status(200).json(newInquiry);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error: Failure to Post Inquiry");
  }
};

//Update one - update an inquiry by ID
const updateInquiryById = async (req, res) => {
  try {
    //get the service ID from the request params
    const { _id } = req.params;

    //get the updated service fields from the request body
    const { name, phone, email, zipCode, service, message } = req.body;

    const updatedInquiry = { name, phone, email, zipCode, service, message };

    //find the service and update its fields
    await Inquiry.findByIdAndUpdate(_id, updatedInquiry);

    res.status(200).json({
      result: updatedInquiry,
      message: "Inquiry was updated!",
    });
  } catch (error) {
    //return a 500 status code and an error message
    res.status(500).json({
      Error: error.message,
    });
  }
};

// DELETE - /api/inquiry/:id - delete an inquiry by id
const deleteInquiryById = async (req, res) => {
  try {
    // Destructure the id from the params
    const { _id } = req.params;

    // Execute the query and await its result
    const inquiry = await Inquiry.findByIdAndDelete(_id);

    // if not found, return a 404
    if (!inquiry) {
      return res.status(404).send("Inquiry not found");
    }

    // return the deleted inquiry
    res.status(200).json(inquiry);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};


module.exports = {
  getAllInquiries,
  getInquiryById,
  createInquiry,
  updateInquiryById,
  deleteInquiryById,
};
