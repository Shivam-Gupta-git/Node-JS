const express = require('express')
const authRouter = express.Router()

const authController = require('../controllers/auth-controllers')

authRouter.get('/login-page', authController.getLogInPage)
authRouter.post('/login', authController.postLoginPage)
authRouter.post('/logout', authController.postLogOut)

exports.authRouter = authRouter;