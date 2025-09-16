const express = require('express')
const hostRouter = express()

const hostController = require('../controllers/host-controller')

hostRouter.get('/add-student', hostController.getAddStudent)
hostRouter.post('/added-student', hostController.PostAddedStudent)
hostRouter.get('/host-student-list', hostController.getHostStudentList)
hostRouter.get('/host-Edit-Student-details/:studentId', hostController.getHostEditStudentDetails)
hostRouter.post('/update-student-details', hostController.postEditedStudentDetails)
hostRouter.post('/delete-student-details/:studentId', hostController.postDeleteStudentDetails)

exports.hostRouter = hostRouter;