// required express import and router declaration
const express = require('express')
const router = express.Router()
// userController path creation
const userController = require('./controllers/userController')

// Creates the router to the home-guest page
router.get('/', userController.home)
// Creates a post request when the user hits the  Become UnSocial button
router.post('/register', userController.register)
module.exports = router