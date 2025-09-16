// External Module
const express = require("express");
const userRouter = express();

const userControllers = require("../controllers/user-controller");
userRouter.get("/", userControllers.getTodoHomePage);
userRouter.post("/todo-submit", userControllers.postTodoItems);
userRouter.post("/progress-items", userControllers.postAddProgressTodoItems);
userRouter.post("/complete-todo", userControllers.postAddCompleteTodoItems);
userRouter.post(
  "/delete-in-todo/:todoItemId",
  userControllers.postDeleteTodoEverywhere
);
userRouter.post(
  "/delete-complete-todo/:todoItemId",
  userControllers.postDeleteTodoEverywhere
);

exports.userRouter = userRouter;
