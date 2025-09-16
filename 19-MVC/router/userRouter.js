// External module
const express = require('express')

// Local module
const homeControlers = require('../controllers/homes')

const userRouter = express.Router()
userRouter.get("/", homeControlers.getHomes)
exports.userRouter = userRouter;