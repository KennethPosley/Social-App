// imports the express module
const express = require ('express')
// defines the app variable and sets it to the express module
const app = express()
// helps execute code from other files and also returns whatever is being exporteds
const router = require('./router')

// links the source folders 
app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')

// main function to send request and responses and renders the home-guest page
app.use('/', router)
// tells the app to listen on port 3000 localhosts
app.listen(3000)