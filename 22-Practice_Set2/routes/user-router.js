// Core module
const express = require('express')
const userRouter = express()

const userController = require('../controllers/user-controller')

userRouter.get('/', userController.getStudentList)

exports.userRouter = userRouter;