// Core module
const path = require('path')

// External module
const express = require('express')
const hostRouter = express.Router()

// Local module
const rootPath = require('../utils/utilPath')

hostRouter.get("/add-home-page", (req, res, next)=>{
  res.sendFile(path.join(rootPath, 'views', 'addHome.html'))
})

const registrationHome = []
console.log(registrationHome)

hostRouter.post("/showMessage-page", (req, res, next)=>{
  res.sendFile(path.join(rootPath, 'views', 'showMessage.html'))
  // console.log('Home Registration Successfully for:', req.body, req.body.text)
  registrationHome.push({HouseName: req.body.text})
})
exports.hostRouter = hostRouter;
exports.registrationHome = registrationHome

