const express = require('express')

const app = express()

app.use((req, res, next)=>{
  console.log('Come in First Middleware', req.url, req.method)
  next()
})

app.use((req, res, next)=>{
  console.log('Come in Second middleware', req.url, req.method)
  res.send('<p>Welcome to the Dashboard')
})

app.use((req, res, next)=>{
  console.log('Come in third Middleware', req.url, req.method)
  res.send('<p>Welcome to the another Dashboard')
})

const port = 3000
app.listen(port, ()=>{
  console.log(`Surver will be running at http://localhost:${port}`)
})