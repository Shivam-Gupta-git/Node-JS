// Core modules
const fs = require('fs')
const path = require('path')

// Local modules
const rootPath = require('../utils/path-utils');
const { error } = require('console');
const progressDataPath = path.join(rootPath, 'data', 'progress.json');

module.exports = class Progress{
  static getProgressTodo(callback){
    fs.readFile(progressDataPath, (err, data)=>{
      callback(!err ? JSON.parse(data) : [])
    })
  }

  static addProgressTodo(todoItemId, callback){
    Progress.getProgressTodo((progressTodos)=>{
      if(progressTodos.includes(todoItemId)){
        callback('Progress todo is allready in progress section', error)
      }
      else{
        progressTodos.push(todoItemId);
        fs.writeFile(progressDataPath, JSON.stringify(progressTodos), callback)
      }
    })
  }
}

