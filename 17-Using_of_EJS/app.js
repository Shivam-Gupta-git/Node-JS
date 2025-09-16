// Core module
const path = require('path')

// External Module
const express = require('express')
const app = express()

// EJS Function
app.set('view engine', 'ejs')
app.set('views', 'views')

// Local module
const { userRouter } = require('./router/userRouter')
const{ hostRouter } = require('./router/hostRouter')
const rootPath = require('./utils/utilPath')

// middleWare Function
app.use(express.urlencoded())

app.use(userRouter)
app.use(hostRouter)
app.use(express.static(path.join(rootPath, 'public')))

app.use((req, res, next)=>{
  res.status(404).render('errorHandling', {
   PageTitle:'Page Not Found' 
  })
})

const port = 3002;
app.listen(port, ()=>{
  console.log(`server running at http://localhost:${port}`)
})