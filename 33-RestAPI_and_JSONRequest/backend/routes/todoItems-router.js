const express  = require('express')
const todoItemsRouter = express.Router()

const todoItemsController = require('../controllers/todoItems-controller')

todoItemsRouter.get('/', todoItemsController.getTodoItems)
todoItemsRouter.post('/', todoItemsController.postTodoItems)
todoItemsRouter.delete('/:id', todoItemsController.deleteTodoItems)
todoItemsRouter.put('/:id/completed', todoItemsController.updateTodoItems)

exports.todoItemsRouter = todoItemsRouter