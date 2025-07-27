const { error } = require('console')
const fs = require('fs')
const additionRequestHandler = ((req, res)=>{
  console.log("addition", req.url)

  const body = []
req.on('data', (chunk)=>{
  body.push(chunk)
})
req.on('end', ()=>{
  const parseBody = Buffer.concat(body).toString()
  // console.log(parseBody)

  const params = new URLSearchParams(parseBody)
  const bodyObject = Object.fromEntries(params)
  const result = Number(bodyObject.first) + Number(bodyObject.second)
  console.log(result)
  fs.writeFile('user.txt', JSON.stringify(result), error => {
    res.statusCode = 302,
    res.setHeader = ('Location', '/add')
    return res.end();
  })
  res.setHeader('Content-Type', 'text/html')
  res.write(`
  <html lang="en">
  <head>
  <title>Calculator Page</title>
</head>
<body>
  <h1>Sum of Numbers: ${result}</h1>
</body>
  </html>
  `);

  return res.end()
})
})

exports.additionRequestHandler = additionRequestHandler;