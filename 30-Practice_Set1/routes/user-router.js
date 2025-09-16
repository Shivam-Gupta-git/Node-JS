const express = require('express')
const userRouter = express.Router()

const userControllers = require('../controllers/user-controllers')

userRouter.get('/', userControllers.getHomePage)

exports.userRouter = userRouter;