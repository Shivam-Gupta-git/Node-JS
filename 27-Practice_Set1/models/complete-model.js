// Core module
const fs = require("fs");
const path = require("path");

// Local Module
const rootPath = require("../utils/path-utils");
const { error } = require("console");
const completeDataPath = path.join(rootPath, "data", "complete.json");

module.exports = class Complete {
  static getCompleteTodo(callback) {
    fs.readFile(completeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
  static addCompleteTodo(todoItemId, callback) {
    Complete.getCompleteTodo((completeItems) => {
      if (completeItems.includes(todoItemId)) {
        callback("Progress todo is allready in complete section", error);
      } else {
        completeItems.push(todoItemId);
        fs.writeFile(completeDataPath, JSON.stringify(completeItems), callback);
      }
    });
  }
  static deleteById(todoItemId, callback) {
    this.getCompleteTodo((completeItems) => {
      completeItems = completeItems.filter((id) => id !== todoItemId);
      fs.writeFile(completeDataPath, JSON.stringify(completeItems), callback);
    });
  }
};
