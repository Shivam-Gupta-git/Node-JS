const Complete = require("../models/complete-model");
const Progress = require("../models/progress-models");
const Todo = require("../models/user-models");

exports.getTodoHomePage = (req, res, next) => {
  // Step 1: Fetch all TODO items
  Todo.fetchAll((allTodos) => {
    // Step 2: Get all Progress IDs
    Progress.getProgressTodo((progressIds) => {
      // Step 3: Get all Complete IDs
      Complete.getCompleteTodo((completeIds) => {
        const progressSet = new Set(progressIds.map((id) => id.id || id));
        const completeSet = new Set(completeIds.map((id) => id.id || id));

        const remainingItems = [];
        const progressItems = [];
        const completeItems = [];

        // Step 4: Categorize tasks
        allTodos.forEach((todo) => {
          const id = todo.id;
          if (completeSet.has(id)) {
            completeItems.push(todo);
          } else if (progressSet.has(id)) {
            progressItems.push(todo);
          } else {
            remainingItems.push(todo);
          }
        });

        // Step 5: Render homepage
        res.render("user/home", {
          PageTitle: "Todo Home Page",
          todoItems: remainingItems, // Not started
          progressItems: progressItems, // In progress
          completeItems: completeItems, // Completed
        });
      });
    });
  });
};

exports.postTodoItems = (req, res, next) => {
  const { TodoItemsName, TodoItemsDate } = req.body;
  const todo = new Todo(TodoItemsName, TodoItemsDate);
  todo.save();
  res.redirect("/");
};

exports.postAddProgressTodoItems = (req, res, next) => {
  const id = req.body.id;
  Progress.addProgressTodo(id, (error) => {
    if (error) {
      console.error("Error while adding to progress:", error);
    }
    res.redirect("/");
  });
};

exports.postAddCompleteTodoItems = (req, res, next) => {
  const id = req.body.id;
  Complete.addCompleteTodo(id, (error) => {
    if (error) {
      console.error("Error while adding to complete:", error);
    }
    res.redirect("/");
  });
};

exports.postDeleteTodo = (req, res, next) => {
  const todoItemId = req.params.todoItemId;
  Todo.deleteById(todoItemId, (error) => {
    if (error) {
      console.log("error while delete", error);
    }
    res.redirect("/");
  });
};

exports.postDeleteCompleteTodo = (req, res, next) => {
  const todoItemId = req.params.todoItemId;
  Complete.deleteById(todoItemId, (error) => {
    if (error) {
      console.log("error while delete complete", error);
    }
    res.redirect("/");
  });
};

exports.postDeleteTodoEverywhere = (req, res, next) => {
  const todoItemId = req.params.todoItemId;
  // Remove from main todo list
  Todo.deleteById(todoItemId, (error) => {
    if (error) {
      console.log("error while deleting from todoItems", error);
    }
    // Remove from progress
    Progress.getProgressTodo((progressItems) => {
      const updatedProgress = progressItems.filter((id) => id !== todoItemId);
      const progressPath = require("path").join(
        require("../utils/path-utils"),
        "data",
        "progress.json"
      );
      require("fs").writeFile(
        progressPath,
        JSON.stringify(updatedProgress),
        (err) => {
          if (err) {
            console.log("error while deleting from progress", err);
          }
          // Remove from complete
          Complete.deleteById(todoItemId, (err2) => {
            if (err2) {
              console.log("error while deleting from complete", err2);
            }
            res.redirect("/");
          });
        }
      );
    });
  });
};
