// Core module
const path = require('path')

// External Module
const express = require('express')

const app = express()

// Local Module
const rootPath = require('./utils/path-utils')
const {userRouter} = require('./routes/userRouter')

// Middleware Functionality
app.use(express.urlencoded()) 

// ejs Functionality
app.set('view engine', 'ejs')
app.set('views', 'views')

// use Routers
app.use(userRouter)

// Tailwind Path
app.use(express.static(path.join(rootPath, 'public')))

const port = 3000;
app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`)
})