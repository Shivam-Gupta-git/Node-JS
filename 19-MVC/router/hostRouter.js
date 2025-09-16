// External module
const express = require('express')
const hostRouter = express()

// Local module
const homeControlers = require('../controllers/homes')

hostRouter.get("/add-home-page", homeControlers.getAddHome)
hostRouter.post("/showMessage-page", homeControlers.postAddHome)


exports.hostRouter = hostRouter;
