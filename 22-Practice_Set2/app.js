// Core module
const path = require('path')

// External module
const express = require('express')
const app = express()

// Local Module
const rootPath = require('./utils/utilPath')
const {hostRouter} = require('./routes/host-router')
const {userRouter} = require('./routes/user-router')

// middleware Function
app.use(express.urlencoded())


// EJS Functionality
app.set('view engine', 'ejs')
app.set('views', 'views')


// Import Files...
app.use(hostRouter)
app.use(userRouter)

// Tailwind Path
app.use(express.static(path.join(rootPath, 'public')))

// Running Surver 
const port = 3000;
app.listen(port, ()=>{
  console.log(`Surver running at http://localhost:${port}`)
})