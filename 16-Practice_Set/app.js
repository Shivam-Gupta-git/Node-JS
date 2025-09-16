// Core module
const path = require('path')

// External module
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

// Local module 
const userRouter = require('./router/userRouter')
const { hostRouter } = require('./router/hostRouter')
const rootPath = require('./utils/utilPath')

// midelware
app.use(express.urlencoded())

app.use(userRouter);
app.use(hostRouter)
app.use(express.static(path.join(rootPath, 'public')))

app.use((req, res, next)=>{
  res.status(404).sendFile(path.join(rootPath, 'views', 'errorMessage.html'))
})

const port = 3000;
app.listen(port, ()=>{
  console.log(`Serve running at http://localhost:${port}`)
})