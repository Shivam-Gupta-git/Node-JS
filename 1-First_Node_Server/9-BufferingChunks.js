const http = require('http')
const server = http.createServer((req, res)=>{
  console.log(req.url, req.method)
if(req.url === '/'){
  res.write(`
  <html lang="en">
  <head>
    <title>Informationational Form</title>
  </head>
  <body>
    <form action="/submit-details" method="POST">
    <h1>Enter Your Details</h1>
    <input type="text" name="username" placeholder="Enter Your Name">
    <button type="submit">Submit</button>
  </form>
  </body>
  </html>
  `)
  return res.end()
}
 else if(req.url.toLocaleLowerCase() === '/submit-details' && req.method === 'POST'){
  const body = [];
  req.on('data', (chunk)=>{
    console.log(chunk)
    body.push(chunk)
  });
  req.on('end', ()=>{
    const parsedBody = Buffer.concat(body).toString();
    console.log(parsedBody)
  })
}
})
const port = 3000;
server.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})