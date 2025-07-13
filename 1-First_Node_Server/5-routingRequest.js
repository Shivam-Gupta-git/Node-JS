const http = require('http')
const server = http.createServer((req, res)=>{
  // console.log(req.url, req.headers, req.method)
  
  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Complete Coding</title></head>')
    res.write('<body><h1>Welcome to Home Page</h1></body>')
    res.write('</html>')
    return res.end()
  }
  else if(req.url === '/product'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Complete Coding</title></head>')
    res.write('<body><h1>Our Product</h1></body>')
    res.write('</html>')
    return res.end()
  }
  else if(req.url === '/user')
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>Complete Coding</title></head>')
  res.write('<body><h1>Shivam Gupta</h1></body>')
  res.write('</html>')
  return res.end()
})
const port = 3000;
server.listen(port, ()=>{
  console.log(`Server run at http://localhost:${port}`)
})