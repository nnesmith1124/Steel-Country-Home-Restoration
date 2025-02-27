const router = require('express').Router() // Import express and create a new router

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Login = require('../models/login.schema')
const SALT_ROUNDS = 10

router.post('/register', async (req, res) => {
  const { username, password } = req.body

  // validate the request body
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all the fields'
    })
  }

  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

    const loginUser = new Login({
      username,
      password: hashedPassword
    })

    await loginUser.save()

    res.status(201).json(loginUser)
  } catch (error) {
    console.log(error)
  }
})

// app.post("/api/login", (req, res) => {});
router.post('/login', async (request, response) => {
  const { username, password } = request.body

  if (!username || !password) {
    return response.status(400).json({
      success: false,
      message: 'Please provide all the fields'
    })
  }

  try {
    // find the user in the database
    const user = await Login.findOne({ username })

    // if the user is not found then return an error
    if (!user) {
      return response.status(404).json({
        success: false,
        message: 'User not found'
      })
    }

    // compare the password
    const isValidPassword = await bcrypt.compare(password, user.password)

    // validate the password
    if (!isValidPassword) {
      return response.status(401).json({
        success: false,
        message: 'Invalid credentials'
      })
    }

    // generate a jwt token
    const token = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        password: user.password
      },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )

    // send the success response
    response.status(200).json(token)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
