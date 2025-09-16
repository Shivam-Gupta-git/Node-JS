// External module
const express = require('express')
const hostRouter = express()

// Local modules
// const homeControlers = require('../controllers/home')
const hostController = require('../controllers/hostController')

hostRouter.get('/add-home-page', hostController.getAddHomes)
hostRouter.post('/showMessage-page', hostController.postAddedHomes);
hostRouter.get('/host-home-list', hostController.getHostHomesList)


exports.hostRouter = hostRouter;