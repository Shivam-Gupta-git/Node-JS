// Core Module
const path = require('path')

// External Modeule
const express = require('express')
const hostRouter = express.Router()

// Local Module
const rootPath = require('../utils/pathUtil')

hostRouter.get("/host/add-home", (req, res, next)=>{
  res.sendFile(path.join(rootPath, 'views', 'addHome.html'))
 })
 
hostRouter.post("/add-home", (req, res, next)=>{
   console.log(req.body)
   res.sendFile(path.join(rootPath, 'views', 'homeAdded.html'))
 })

module.exports = hostRouter;