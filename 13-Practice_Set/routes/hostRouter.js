// Core Module
const path = require('path')

// External Module
const express = require('express')
const hostRouter = express.Router()

// Local Module
const rootPath = require('../utils/path')

hostRouter.get("/section-page", (req, res, next)=>{
 res.sendFile(path.join(rootPath, 'views', 'registrationForm.html'))
})

hostRouter.post("/submit-details", (req, res, next)=>{
  console.log(req.body)
  res.sendFile(path.join(rootPath, 'views', 'showDetails.html'))
})
module.exports = hostRouter;