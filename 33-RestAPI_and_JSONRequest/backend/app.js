// Core module
const path = require('path')

// External module 
const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors')
const DB_path = "mongodb+srv://root:shivam123@shivamgupta.yettrq8.mongodb.net/todo?retryWrites=true&w=majority&appName=shivamgupta"

// Local module
const {todoItemsRouter} = require('./routes/todoItems-router')
const rootPath = require('./utils/utils-path')

const app = express()

// Middleware 
app.use(express.urlencoded())
app.use(express.json())
app.use(cors())

app.use("/api/todo", todoItemsRouter)

const port = 3000;
mongoose.connect(DB_path).then(() => {
  app.listen(port, ()=>{
    console.log(`Surver running at http://localhost:${port}`)
  })
}).catch((err)=>{
  console.log('Wrror while connecting Data Base', err)
})