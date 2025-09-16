// Core module
const path = require('path')

// External module
const express = require('express')

// Local module
const rootPath = require('../utils/utilPath')

const { registrationHome } = require('./hostRouter')

const userRouter = express.Router()
userRouter.get("/", (req, res, next)=>{
res.render('home', {
  registrationHome: registrationHome,
  PageTitle: 'airbnb Home',
  currentPage: 'Home'
})
})
exports.userRouter = userRouter;