const router = require('express').Router() // Import express and create a new router
const userControllers = require('../controllers/user-controllers.js')

// POST - '/api/register' - create a new user
router.post('/register', userControllers.registerUser)

// POST - '/api/login' - login a user
router.post('/login', userControllers.loginUser)

module.exports = router
