const router = require("express").Router(); // Import express and create a new router

const serviceControllers = require("../controllers/service-controllers.js");

const authenticateToken = require("../middleware/authenticateToken");

//POST - 'localhost:3000/api/services' - create a new service - Admin only
router.post("/", authenticateToken, serviceControllers.createService);

//GET All - 'localhost:3000/api/services' - display all services - Any User
router.get("/", serviceControllers.getAllServices);

//GET one - 'localhost:3000/api/services/:id' - display one service by ID - Any User
router.get("/:_id", serviceControllers.getServiceById);

//GET one - 'localhost:3000/api/services/servicename/:name' - display one service by Name - Any User
router.get("/servicename/:name", serviceControllers.getServiceByName);

//Update one - 'localhost:3000/api/services/:id' - update a service by ID 
router.put("/:_id", authenticateToken, serviceControllers.updateServiceById);

//Delete one - 'localhost:3000/api/services/:id' - delete a service by ID 
router.delete("/:_id", authenticateToken, serviceControllers.deleteServiceById);

module.exports = router;