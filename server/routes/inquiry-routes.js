const express = require("express");
const router = express.Router();
const inquiryControllers = require("../controllers/inquiry-controllers.js");

const authenticateToken = require("../middleware/authenticateToken");

// GET - /api/inquiry - get all inquiries
router.get("/", authenticateToken, inquiryControllers.getAllInquiries);

// GET - /api/inquiry/:id - get an inquiry by id
router.get("/:_id", authenticateToken, inquiryControllers.getInquiryById);

// POST - /api/inquiry - create a new inquiry
router.post("/", inquiryControllers.createInquiry);

// PUT - /api/inquiry/:id - update an inquiry by id
router.put("/:_id", authenticateToken, inquiryControllers.updateInquiryById);

// DELETE - /api/inquiry/:id - delete an inquiry by id
router.delete("/:_id", authenticateToken, inquiryControllers.deleteInquiryById);

module.exports = router;
