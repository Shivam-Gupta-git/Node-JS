const bodyParser = require('body-parser');
const express = require('express')

const app = express();

app.get('/',(req, res, next)=>{
  console.log('handling / for Get', req.url, req.method)
  res.send(`
  <p>Welcome to the Home Page</p>
  <a href="contact-us">Contact Form</a>
  `)
})

app.get('/contact-us',(req, res, next)=>{
  console.log('handling contact-us for Get', req.url, req.method)
  res.send(`
  <h1>Please enter your details here</h1>
  <form action="/contact-us" method="POST">
  <input type="text" name="text" placeholder="Please Enter Your Name">
  <input type="email" name="email" placeholder="Please Enter Your Email">
  <input type="submit"/>
 </form>
  `) 
})
app.use(bodyParser.urlencoded())

app.post('/contact-us',(req, res, next)=>{
  console.log('handling contact-us for post', req.url, req.method, req.body)
  const result = req.body;
  console.log(result.text)
  console.log(result.email)
  res.send(`
  <h1>Thank you for filling your details</h1>
  <p>Name: ${result.text}</p>
  <p>Email: ${result.email}</p>

  `)
})

const port = 3002;
app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`)
})