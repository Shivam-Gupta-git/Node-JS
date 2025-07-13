const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res)=>{
  // console.log(req.url, req.headers, req.method)

  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Informationational Form</title></head>')
    res.write('<body><h1>Enter Your Detels</h1>')
    res.write('<form action="/submit-details" method="POST">')

    res.write('<Input type="text" name="username" placeholder="Enter Your Name"><br>')
    
    res.write('<label for="male">Male</label>')
    res.write('<Input type="radio" id="male" name="gender" value="male"/>')
    res.write('<label for="female">Female</label>')
    res.write('<Input type="radio" id="female" name="gender" value="female"/>')
    res.write('<label for="other">Other</label>')
    res.write('<Input type="radio" id="other" name="gender" value="other"/><br>')
    res.write('<button type="submit">Submit</button>')

    res.write('</form>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
  }
  else if(req.url.toLocaleLowerCase() === '/submit-details' && req.method === 'POST'){
    fs.writeFileSync('user.txt', 'Shivam Gupta')
    res.statusCode = 302;
    res.setHeader('Location', '/')
  }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Informationational Form</title></head>')
    res.write('<body><h1>Thank You for Submitting</h1></body>')
    res.write('</html>')
    return res.end()
})
const port = 3000;
server.listen(port, ()=>{
  console.log(`Server runing at http://localhost:${port}`)
})