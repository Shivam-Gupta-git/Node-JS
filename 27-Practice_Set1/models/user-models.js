// Core module
const fs = require('fs')
const path = require('path')

// Local module
const rootPath = require('../utils/path-utils')
const { error } = require('console')
const TodoListItems = path.join(rootPath, 'data', 'todoItems.json')

module.exports = class Todo {
  constructor(TodoItemsName, TodoItemsDate){
    this.TodoItemsName = TodoItemsName
    this.TodoItemsDate = TodoItemsDate
  }
  save(){
    Todo.fetchAll((todoItems)=>{
      this.id = Math.random().toString()
      todoItems.push(this)
      fs.writeFile(TodoListItems, JSON.stringify(todoItems), error => {
        console.log('while writing Conculaded')
      })
    })
  }
  static fetchAll(callback){
    fs.readFile(TodoListItems, (err, data)=>{
      callback(!err ? JSON.parse(data) : [])
    })
  }

  
  // Finding Items Id
  static findById(todoItemId, callback){
    this.fetchAll(todoItems =>{
      const todoItemFound = todoItems.find(todo => todo.id === todoItemId);
      callback(todoItemFound)
      console.log(todoItemFound)
    })
  }

  // For Delete Home....
  
  static deleteById(todoItemId, callback){
    this.fetchAll(todoItems => {
     todoItems = todoItems.filter(todoItems => todoItems.id !== todoItemId);
     console.log(todoItems)
     fs.writeFile(TodoListItems, JSON.stringify(todoItems), callback)
    })
   }
};

