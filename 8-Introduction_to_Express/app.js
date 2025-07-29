// External Module
const express = require('express')

// Local Module
const { userRequestHandel } = require('./user')

const app = express()

// using and adding middleware........
app.use("/",(req, res, next)=>{
  console.log('Come in First Middleware', req.url, req.method)
  next();
})
app.use("/submit-details", (req, res, next)=>{
  console.log('Come in Second Middleware', req.url, req.method)
  res.send('<p>Welcome to the Dashboard</p>');
})


const port = 3002;
app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`)
})