const path = require('path')

const express = require('express')
const hostRouter = express.Router()

const rootPath = require('../utils/utilPath')

hostRouter.get("/section-page",(req, res, next)=>{
  res.sendFile(path.join(rootPath, 'views', 'registrationForm.html'))
})
hostRouter.post("/submit-details", (req, res, next)=>{
  console.log(req.body)
  res.sendFile(path.join(rootPath, 'views', 'showDetails.html'))
})
module.exports = hostRouter