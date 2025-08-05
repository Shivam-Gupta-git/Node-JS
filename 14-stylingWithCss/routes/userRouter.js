const path = require('path')

const express = require('express')
const userRouter = express.Router()

const rootPath = require('../utils/utilPath')

userRouter.get("/", (req, res, next)=>{
res.sendFile(path.join(rootPath, 'views', 'home.html'))
})
module.exports = userRouter;