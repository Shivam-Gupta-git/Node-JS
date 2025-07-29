const { error } = require('console');
const fs = require('fs')
const userRequestHandel = (req, res)=>{
  console.log(req.url, req.method)

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
   if(req.url.toLowerCase() === '/submit-details' && req.method === 'POST'){
    const body = []
    req.on('data', (chunk)=>{
      // console.log(chunk)
      body.push(chunk)
    })
    req.on('end', ()=>{
      const parseBody = Buffer.concat(body).toString()
      // console.log(parseBody)

      const params = new URLSearchParams(parseBody)
      const bodyObject = Object.fromEntries(params)
      // console.log(bodyObject)
      fs.writeFile('user.txt', JSON.stringify(bodyObject), error => {
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end()
      })
    })
  }
}

exports.userRequestHandel =  userRequestHandel;