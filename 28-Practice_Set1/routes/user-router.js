// External module
const express = require("express");
const userRouter = express.Router();

const userController = require("../controllers/user-controller");

userRouter.get("/", userController.getHomePage);
userRouter.get('/itemsList', userController.getItemsList)


exports.userRouter = userRouter;
