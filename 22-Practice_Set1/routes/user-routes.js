// External module
const express = require('express')
const userRouter = express()

// local module
const userControllers = require('../controllers/user-controllers')

userRouter.get('/', userControllers.getStudentHome);
userRouter.get('/student-lists', userControllers.getStudentLists)
userRouter.get('/student-details/:studentId', userControllers.getStudentDetails)

exports.userRouter = userRouter;