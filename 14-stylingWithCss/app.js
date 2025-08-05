// Core Module
const path = require('path')

// External Module
const express = require('express')
const app = express()

// Local Module
const userRouter = require('./routes/userRouter')
const hostRouter = require('./routes/hostRouter')
const rootPath = require('./utils/utilPath')


app.use(express.urlencoded());
app.use(userRouter)
app.use(hostRouter)

app.use(express.static(path.join(rootPath, 'public')))

app.use((req, res, next)=>{
  res.status(404).sendFile(path.join(rootPath, 'views', 'errorShow.html'))
})

const port = 3000;
app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`)
})