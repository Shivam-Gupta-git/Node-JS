// Core Module
const path = require('path')
// External Module
const express = require('express')

// Local Module
const userRouter = require('./routes/userRouter')
const hostRouter = require('./routes/hostRouter')
const rootPath = require('./utils/pathUtil')

const app = express()

app.use(express.urlencoded())

app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next)=>{
  res.status(404).sendFile(path.join(rootPath,  'views', '404.html'))
})

const port = 3000;
app.listen(port, ()=>{
  console.log(`Surver running at http://localhost:${port}`)
})