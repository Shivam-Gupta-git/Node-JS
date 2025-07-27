const { additionRequestHandler } = require('./Addition')
const requireRequestHandel = (req, res)=>{  
console.log(req.url, req.method)
if(req.url === '/'){
res.setHeader('Content-Type', 'text/html')
res.write(`
<html lang="en">
<head>
<title>Server Calculator</title>
</head>
<body>
<h1>Welcome to Calculator </h1>
<a href="/calculator">Go to Calculator</a><br>
</body>
</html>
`)
return res.end()
}

if(req.url.toLowerCase() === '/calculator'){
  res.setHeader('Content-Type', 'text/html')
  res.write(`
  <html lang="en">
  <head>
  <title>Calculator Page</title>
</head>
<body>
  <h1>Here is the Calculator </h1>
 <form action="/add" method="POST">
 <label for="name">First Num:</label>
 <input type="text" id="name" name="first" placeholder="Enter Your First Number"><br>

 <label for="name">Second Num:</label>
 <input type="text" id="name" name="second" placeholder="Please Enter Your Second Number"><br>
 
 <button type="submit" value="sum">SUM</button>
 </form>
</body>
  </html>
  `);
  return res.end()
}
else if(req.url.toLowerCase() === '/add', req.method === 'POST'){
  return additionRequestHandler(req, res)
}
 
}
exports.requireRequestHandel = requireRequestHandel;