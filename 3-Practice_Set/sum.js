const sumRequiredHandle = ((req, res)=>{
console.log('In Sum request Handler', req.url)
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
  // console.log(result)

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
exports.sumRequiredHandle = sumRequiredHandle;