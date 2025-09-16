// Core module
const path = require('path')

// External module
const express = require('express')
const app = express()

// Local module
const userRouter = require('./router/userRouter')
const rootPath = require('./utils/utilPath')

// Middleware
app.use(express.urlencoded());

app.use(userRouter);
app.use(express.static(path.join(rootPath, 'public')))

const port = 3002;
app.listen(port, ()=>{
  console.log(`Surver running at http://localhost:${port}`)
})