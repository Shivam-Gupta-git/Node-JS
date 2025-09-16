const express = require('express')

const hostRouter = express.Router()

const hostController = require('../controllers/host-cotrollers')

hostRouter.get('/add-items', hostController.getAddItems)

exports.hostRouter = hostRouter;