// Core module
const path = require('path')

// External Module
const express = require('express')
const userRouter = express.Router()

// Local module 
const rootPath = require('../utils/utilPath')
const { registrationHome } = require('./hostRouter')

userRouter.get("/", (req, res, next)=>{
  // console.log(registrationHome)
  res.render('home', {registrationHome: registrationHome})
})

module.exports = userRouter;