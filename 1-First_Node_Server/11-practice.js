const http = require('http')
const fs = require('fs')
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
    <label for="name">Full Name:</label>
    <input type="text" id="name" name="name" placeholder="Your full name"><br>

    <label for="email">Email Address:</label>
    <input type="email" id="email" name="email" placeholder="Your email"><br>

    <label for="gender">Gender:</label>
    <select id="gender" name="gender">
      <option value="">--Select--</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select><br>
    <button type="submit">Submit</button>
  </form>
</body>
  </html>
    `)
    return res.end();
  }
  else if(req.url === '/submit-details' && req.method === 'POST'){
    const StoreStreamBody = [];
    req.on('data', (chunk)=>{
      console.log(chunk)
      StoreStreamBody.push(chunk)
    })

    req.on('end', ()=>{
      const parseBody = Buffer.concat(StoreStreamBody).toString();
      console.log(parseBody)

      const params = new URLSearchParams(parseBody);
      const bodyObject = Object.fromEntries(params)
      console.log(bodyObject)
      fs.writeFileSync('user.txt', JSON.stringify(bodyObject))

    })
    res.statusCode = 302;
    res.setHeader('Location', '/')
    return res.end()
  }
});

const port = 3000;
server.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}`)
})