// External module
const express = require('express')
const hostRouter = express()

const hostControllers = require('../controllers/host-controllers')

hostRouter.get('/add-student', hostControllers.getStusentAdd)
hostRouter.post('/student-added',hostControllers.postStudentAdded)
hostRouter.get('/host-student-lists', hostControllers.getHostStudentList)
hostRouter.get('/host-student-details/:studentId', hostControllers.getHostStudentDetails)
hostRouter.get('/host-edit-student/:studentId', hostControllers.getEditStudent)
hostRouter.post('/edited-student', hostControllers.postEditStudents)
hostRouter.post('/delete-student/:studentId', hostControllers.postDeleteStudentDetails)

exports.hostRouter = hostRouter;