// Core module
const path = require('path')

// External module
const express = require('express')
const hostRouter = express()

// Local module
const rootPath = require('../utils/utilPath')

hostRouter.get("/add-home-page", (req, res, next)=>{
  res.render('addHome',{
    PageTitle:'Add Home to airbnb'
  })
})
const registrationHome = []
hostRouter.post("/showMessage-page", (req, res, next)=>{
  res.render( 'showMessage',{
    PageTitle:'Home Added Successfully'
  })
  // console.log(req.body)
  registrationHome.push({HouseName: req.body.houseName})
  // console.log(registrationHome)
})
exports.hostRouter = hostRouter;
exports.registrationHome = registrationHome;

